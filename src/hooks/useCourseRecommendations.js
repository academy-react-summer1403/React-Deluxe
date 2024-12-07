import { useState, useEffect } from "react";
import { HfInference } from "@huggingface/inference";
import { allOfCourse, myCoursesAi } from "../core/services/api/AllCoursesAi";
import { myReserve } from "../core/services/api/StudentPanel/MyReserve.api";

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

const cosineSimilarity = (a, b) => {
  const dotProduct = a.reduce((sum, ai, i) => sum + ai * b[i], 0);
  const magnitudeA = Math.sqrt(a.reduce((sum, ai) => sum + ai * ai, 0));
  const magnitudeB = Math.sqrt(b.reduce((sum, bi) => sum + bi * bi, 0));
  return dotProduct / (magnitudeA * magnitudeB);
};

const useCourseRecommendations = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [myCourses, setMyCourses] = useState([]);
  const [reservedCourses, setReservedCourses] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  console.log("tesssting", allCourses, myCourses, reservedCourses);
  const getAllCourses = async () => {
    const res = await allOfCourse();
    // console.log("tesssting", res);

    const normalizedCourses = res.courseFilterDtos.map((course) => ({
      ...course,
      technologyList: course.technologyList
        ? course.technologyList.split(",").map((tech) => tech.trim())
        : [],
    }));

    setAllCourses(normalizedCourses);
  };
  const getMyCoursesAi = async () => {
    const res = await myCoursesAi();
    // console.log("tesssting", res);

    setMyCourses(res.listOfMyCourses);
  };
  const getReserve = async () => {
    const res = await myReserve();
    // console.log("tesssting", res);

    setReservedCourses(res);
  };

  useEffect(() => {
    getAllCourses();
    getMyCoursesAi();
    getReserve();
  }, []);

  useEffect(() => {
    const recommendCourses = async () => {
      const userCourseNames = [
        ...myCourses.map((course) => course.courseTitle),
        ...reservedCourses.map((course) => course.courseName),
      ];

      const matchedCourses = allCourses.filter((course) =>
        userCourseNames.includes(course.title)
      );

      if (!matchedCourses.length) {
        console.warn("No matching courses found.");
        return;
      }

      const technologyLists = matchedCourses.flatMap(
        (course) => course.technologyList || []
      );

      if (!technologyLists.length) {
        console.warn("No technologies found for matched courses.");
        return;
      }

      const userEmbeddings = await getEmbedding(technologyLists, 10);

      const allCourseEmbeddings = await getEmbedding(
        allCourses.map((course) => (course.technologyList || []).join(", ")),
        5
      );

      if (!userEmbeddings.length || !allCourseEmbeddings.length) {
        console.error("Failed to generate embeddings.");
        return;
      }

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
        .filter((rec) => rec)
        .sort((a, b) => b.similarity - a.similarity)
        .slice(0, 5);

      setRecommendations(recommendations);
    };

    recommendCourses();
  }, [allCourses, myCourses, reservedCourses]);

  return { recommendations };
};

export default useCourseRecommendations;
