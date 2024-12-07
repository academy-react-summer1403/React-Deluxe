import { Link } from "react-router-dom";
import useCourseRecommendations from "../../hooks/useCourseRecommendations";
import Logo from "../../assets/logo (3)highQ.png";
import { getRandomColor } from "./ColorGenerator";
import { formatCost } from "../../core/utils/CostEntoFa+Commas+Split.utils";

const Recommendations = () => {
  const { recommendations } = useCourseRecommendations();

  return (
    <div>
      <ul className="flex flex-col gap-2">
        {recommendations.map((course, index) => (
          <div
            key={index}
            className="p-4 bg-sky-50  flex flex-col dark:bg-indigo-950 relative   rounded-3xl justify-center items-center flex-1  size-48"
          >
            <Link
              onClick={() => {
                scrollTop();
              }}
              to={`/courseDetails/${course.courseId}`}
            >
              <div
                className={` flex justify-center items-center rounded-3xl  mx-auto mb-1 ${getRandomColor()}`}
              >
                <img
                  // src={course.tumbImageAddress ?? Logo}
                  src={
                    course.tumbImageAddress !== null &&
                    course.tumbImageAddress !== "null"
                      ? course.tumbImageAddress
                      : Logo
                  }
                  alt={""}
                  className={`h-16 w-36 `}
                />
              </div>
            </Link>

            <Link to={"/courseDetails"}>
              <h3 className="flex text-xl dark:text-white font-semibold mb-1 ">
                {course.title}
              </h3>
            </Link>

            <div className="mt-0">
              <span className="px-3 py-0 text-xs   bg-pink-500 text-white rounded-full">
                {course.levelName}
              </span>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
