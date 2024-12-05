import { useState, useEffect } from "react";

// Local JSON data
const allCourses = [
  { id: 1, title: "React Basics", technologyList: ["React", "JavaScript"] },
  {
    id: 2,
    title: "Advanced JavaScript",
    technologyList: ["JavaScript", "ES6"],
  },
  {
    id: 3,
    title: "Node.js Fundamentals",
    technologyList: ["Node.js", "Backend"],
  },
  { id: 4, title: "CSS Mastery", technologyList: ["CSS", "Design"] },
  { id: 5, title: "HTML for Beginners", technologyList: ["HTML", "Web"] },
  {
    id: 6,
    title: "TypeScript in Depth",
    technologyList: ["TypeScript", "JavaScript"],
  },
  { id: 7, title: "Python Basics", technologyList: ["Python", "Backend"] },
  { id: 8, title: "Django Fundamentals", technologyList: ["Django", "Python"] },
  {
    id: 9,
    title: "Data Analysis with Pandas",
    technologyList: ["Python", "Pandas"],
  },
  {
    id: 10,
    title: "Vue.js Essentials",
    technologyList: ["Vue.js", "JavaScript"],
  },
  {
    id: 11,
    title: "Angular for Professionals",
    technologyList: ["Angular", "JavaScript"],
  },
  {
    id: 12,
    title: "Kubernetes Basics",
    technologyList: ["Kubernetes", "DevOps"],
  },
  { id: 13, title: "Docker in Practice", technologyList: ["Docker", "DevOps"] },
  {
    id: 14,
    title: "Linux Administration",
    technologyList: ["Linux", "SysAdmin"],
  },
  { id: 15, title: "AWS Cloud Practitioner", technologyList: ["AWS", "Cloud"] },
  {
    id: 16,
    title: "Machine Learning with Python",
    technologyList: ["Python", "Machine Learning"],
  },
  { id: 17, title: "AI for Beginners", technologyList: ["AI", "Python"] },
  {
    id: 18,
    title: "Cybersecurity Fundamentals",
    technologyList: ["Security", "Networking"],
  },
  { id: 19, title: "Golang Essentials", technologyList: ["Go", "Backend"] },
  { id: 20, title: "Ruby on Rails Basics", technologyList: ["Ruby", "Web"] },
];

const myCourses = [
  { courseTitle: "Linux Administration" },
  { courseTitle: "Kubernetes Basics" },
  { courseTitle: "Angular for Professionals" },
];

const reservedCourses = [
  { courseName: "Cybersecurity Fundamentals" },
  { courseName: "Golang Essentials" },
];

// Helper: Fetch embeddings in batches
import { HfInference } from "@huggingface/inference";

const hf = new HfInference("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");

const getEmbedding = async (texts, batchSize = 10) => {
  try {
    const batches = [];
    for (let i = 0; i < texts.length; i += batchSize) {
      const batch = texts.slice(i, i + batchSize);
      const response = await hf.featureExtraction({
        model: "sentence-transformers/all-MiniLM-L6-v2",
        inputs: batch,
      });
      batches.push(...response);
    }
    return batches;
  } catch (error) {
    console.error("Error fetching embeddings:", error);
    return [];
  }
};

// Cosine Similarity Calculation
const cosineSimilarity = (a, b) => {
  const dotProduct = a.reduce((sum, ai, i) => sum + ai * b[i], 0);
  const magnitudeA = Math.sqrt(a.reduce((sum, ai) => sum + ai * ai, 0));
  const magnitudeB = Math.sqrt(b.reduce((sum, bi) => sum + bi * bi, 0));
  return dotProduct / (magnitudeA * magnitudeB);
};

const useCourseRecommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const recommendCourses = async () => {
      // Extract course names from user and reserved courses
      const userCourseNames = [
        ...myCourses.map((course) => course.courseTitle),
        ...reservedCourses.map((course) => course.courseName),
      ];

      // Match user/reserved course names with allCourses
      const matchedCourses = allCourses.filter((course) =>
        userCourseNames.includes(course.title)
      );

      if (!matchedCourses.length) {
        console.warn(
          "No matching courses found in allCourses for user/reserved courses."
        );
        return;
      }

      // Get technology lists for matched courses
      const technologyLists = matchedCourses.flatMap(
        (course) => course.technologyList || []
      );

      if (!technologyLists.length) {
        console.warn("No technology lists found for matched courses.");
        return;
      }

      // Fetch embeddings for technology lists of matched courses
      const userEmbeddings = await getEmbedding(technologyLists, 5);

      // Fetch embeddings for technology lists of all courses
      const allCourseEmbeddings = await getEmbedding(
        allCourses.map((course) => course.technologyList?.join(", ") || ""),
        5
      );

      if (!userEmbeddings.length || !allCourseEmbeddings.length) {
        console.error("Embeddings could not be generated for recommendations.");
        return;
      }

      // Generate recommendations
      const recommendations = allCourses
        .map((course, index) => {
          const isUserCourse = myCourses.some(
            (c) => c.courseTitle === course.title
          );
          const isReserved = reservedCourses.some(
            (c) => c.courseName === course.title
          );

          if (isUserCourse || isReserved) return null;

          const similarityScores = userEmbeddings.map((userEmbedding) =>
            cosineSimilarity(userEmbedding, allCourseEmbeddings[index])
          );
          const averageSimilarity =
            similarityScores.reduce((sum, score) => sum + score, 0) /
            similarityScores.length;

          return { ...course, similarity: averageSimilarity };
        })
        .filter((rec) => rec) // Remove nulls
        .sort((a, b) => b.similarity - a.similarity) // Sort by similarity
        .slice(0, 5); // Limit to top 10 recommendations

      setRecommendations(recommendations);
    };

    recommendCourses();
  }, []);

  return { recommendations };
};

export default useCourseRecommendations;
