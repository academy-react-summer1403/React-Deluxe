import useCourseRecommendations from "../../hooks/useCourseRecommendations";

const Recommendations = () => {
  const { recommendations } = useCourseRecommendations();

  return (
    <div>
      <ul>
        {recommendations.map((course) => (
          <li className="mt-5" key={course.id}>
            {course.title} - Similarity: {course.similarity.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
