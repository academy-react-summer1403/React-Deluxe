import React from "react";
import { Link } from "react-router-dom";

const UserProgress = ({ percentage }) => {
  const progress = percentage || 75;

  return (
    <div className="flex flex-col items-center justify-center w-[253px] h-[246px] bg-gray-50 dark:bg-indigo-900 dark:text-white rounded-3xl p-4 ">
      <div className="flex-row flex justify-between gap-1">
        <p className="text-base ">وضعیت اطلاعات حساب کاربری</p>
        <Link to={"/myprofile"}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6791 4.9853L13.8472 3.81717C14.4923 3.17203 15.5383 3.17203 16.1835 3.81717C16.8286 4.46231 16.8286 5.50829 16.1835 6.15344L15.0153 7.32157M12.6791 4.9853L5.81751 11.8469C4.94643 12.718 4.51087 13.1535 4.21429 13.6842C3.91771 14.215 3.61932 15.4682 3.33398 16.6666C4.53239 16.3813 5.78564 16.0829 6.31639 15.7863C6.84714 15.4897 7.28268 15.0542 8.15378 14.1831L15.0153 7.32157M12.6791 4.9853L15.0153 7.32157"
              stroke="#3772FF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.16602 16.6667H14.166"
              stroke="#3772FF"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </Link>
      </div>
      <div className="relative flex justify-center items-center">
        <svg
          className="w-32 h-32 transform rotate-180"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="45" stroke="#DCDCDC" strokeWidth="6    " />
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#ffde37"
            strokeWidth="6"
            strokeDasharray="282.743"
            strokeDashoffset={282.743 - (282.743 * progress) / 100}
            strokeLinecap="round"
            transform="rotate(90 50 50)"
          />
        </svg>
        <div className="absolute text-center">
          <span className="text-3xl font-medium">{progress}%</span>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-gray-500 dark:text-gray-50 text-[14px] w-full">
          اطلاعات حساب کاربری شما کامل نیست
        </p>
      </div>
    </div>
  );
};

// const UserProgress = () => {
//   return (
//     <div
//       className="radial-progress text-primary"
//       style={{ "--value": 70 }}
//       role="progressbar"
//     >
//       70%
//     </div>
//   );
// };
export { UserProgress };
