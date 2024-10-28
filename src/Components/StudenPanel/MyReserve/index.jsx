import React from "react";
import MyReserveItems from "./MyReserveItems";
import { SearchInput } from "./MyReserveItems/Search";
import { DateRangePicker } from "./MyReserveItems/DateRange";
import { RxCross1 } from "react-icons/rx";

const index = () => {
  return (
    <div className="h-full pb-8  bg-gray-950">
      <div className="bg-white dark:bg-[#041124] p-8 mx-5 dark:text-white space-y-8 rounded-3xl ">
        <h2>رزرو من</h2>
        <div className="flex flex-col">
          <div className="flex items-end mb-6 gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 17.5L22 22"
                    stroke="#2F2F2F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                    stroke="#2F2F2F"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                </svg>

                <h3 className="mb-0">جست و جو</h3>
              </div>
              <SearchInput />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 13H16M8 13H8.00898M13 17H8M16 17H15.991"
                    stroke="#272727"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18 2V4M6 2V4"
                    stroke="#272727"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z"
                    stroke="#272727"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 8H21"
                    stroke="#272727"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h3 className="mb-0">تاریخ برگزاری - اتمام</h3>
              </div>
              <DateRangePicker />
            </div>
            <div className="py-2 hidden sm:block">ترتیب</div>
            <div className="border-red-600 border text-red-600 justify-center rounded-3xl px-4 py-2 hidden sm:flex gap-2 items-center ">
              <RxCross1 className="text-red-500" />
              تایید شده
            </div>
            <div className="border-gray-700 border rounded-3xl px-4 py-2 hidden sm:flex justify-center items-center">
              تایید نشده
            </div>
          </div>
          <MyReserveItems />
        </div>
      </div>
    </div>
  );
};

export default index;
