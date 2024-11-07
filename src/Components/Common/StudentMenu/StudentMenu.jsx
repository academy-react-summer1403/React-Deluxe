import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const StudentMenu = () => {
  return (
    <div className="w-full h-full bg-gray-950 hidden text-white xl:flex flex-col justify-between">
      <div>
        {/* Logo Section */}
        <div className="px-6 py-4">
          <h1 className="text-xl font-bold text-blue-400">
            آکادمی کد نویسی بحر
          </h1>
        </div>

        {/* Menu Items */}
        <nav className="space-y-7 py-16 lg:px-6">
          <NavLink
            to={"/dashboard"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline flex"
                : "flex hover:text-blue-300 "
            }
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.31802 19.682C3 18.364 3 16.2426 3 12C3 7.75736 3 5.63604 4.31802 4.31802C5.63604 3 7.75736 3 12 3C16.2426 3 18.364 3 19.682 4.31802C21 5.63604 21 7.75736 21 12C21 16.2426 21 18.364 19.682 19.682C18.364 21 16.2426 21 12 21C7.75736 21 5.63604 21 4.31802 19.682Z"
                stroke="#FCFCFC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 14L9.79289 11.2071C10.1834 10.8166 10.8166 10.8166 11.2071 11.2071L12.7929 12.7929C13.1834 13.1834 13.8166 13.1834 14.2071 12.7929L17 10"
                stroke="#FCFCFC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="text-lg pr-1">داشبورد</span>
          </NavLink>
          <NavLink
            to={"/mycourse"}
            href="#"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline flex"
                : "flex hover:text-blue-300 "
            }
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 15C20 16.8638 20 17.7956 19.6955 18.5307C19.2895 19.5108 18.5108 20.2895 17.5307 20.6955C16.7956 21 15.8637 21 14 21H11C7.22874 21 5.3431 21 4.17153 19.8284C2.99995 18.6568 2.99997 16.7712 3 12.9999L3.00006 6.99983C3.00008 4.79078 4.79088 3 6.99993 3"
                stroke="#FCFCFC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.99996 8.5L10.4337 12.4689C10.4751 12.8007 10.679 13.0899 10.9862 13.2219C11.6722 13.5165 12.957 14 14 14C15.0431 14 16.3279 13.5165 17.0139 13.2219C17.3211 13.0899 17.525 12.8007 17.5664 12.4689L18 8.5M20.5 7.5V11.2692M14 4L7 7L14 10L21 7L14 4Z"
                stroke="#FCFCFC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="text-lg pr-1">دوره من</span>
          </NavLink>
          <NavLink
            to={"/myreserve"}
            href="#"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline flex"
                : "flex hover:text-blue-300 "
            }
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5 16.9286V10C20.5 6.22876 20.5 4.34315 19.3284 3.17157C18.1569 2 16.2712 2 12.5 2H11.5C7.72876 2 5.84315 2 4.67157 3.17157C3.5 4.34315 3.5 6.22876 3.5 10V19.5"
                stroke="#FCFCFC"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M20.5 17H6C4.61929 17 3.5 18.1193 3.5 19.5C3.5 20.8807 4.61929 22 6 22H20.5"
                stroke="#FCFCFC"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M20.5 22C19.1193 22 18 20.8807 18 19.5C18 18.1193 19.1193 17 20.5 17"
                stroke="#FCFCFC"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M15 7H9"
                stroke="#FCFCFC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 11H9"
                stroke="#FCFCFC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="text-lg pr-1">رزرو من</span>
          </NavLink>
          <NavLink
            to={"/favoritecourses"}
            href="#"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline flex"
                : "flex hover:text-blue-300 "
            }
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9H18C18.9319 9 19.3978 9 19.7654 9.15224C20.2554 9.35523 20.6448 9.74458 20.8478 10.2346C21 10.6022 21 11.0681 21 12C21 12.9319 21 13.3978 20.8478 13.7654C20.6448 14.2554 20.2554 14.6448 19.7654 14.8478C19.3978 15 18.9319 15 18 15H13"
                stroke="#FCFCFC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 15H3"
                stroke="#FCFCFC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 15H15C15.9319 15 16.3978 15 16.7654 15.1522C17.2554 15.3552 17.6448 15.7446 17.8478 16.2346C18 16.6022 18 17.0681 18 18C18 18.9319 18 19.3978 17.8478 19.7654C17.6448 20.2554 17.2554 20.6448 16.7654 20.8478C16.3978 21 15.9319 21 15 21H3"
                stroke="#FCFCFC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 3H14C14.9319 3 15.3978 3 15.7654 3.15224C16.2554 3.35523 16.6448 3.74458 16.8478 4.23463C17 4.60218 17 5.06812 17 6C17 6.93188 17 7.39782 16.8478 7.76537C16.6448 8.25542 16.2554 8.64477 15.7654 8.84776C15.3978 9 14.9319 9 14 9H3"
                stroke="#FCFCFC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 9V15.1905C13 16.3045 13 16.8616 12.6735 16.9803C12.3469 17.0991 11.9782 16.6761 11.2407 15.8303L10.7593 15.278C10.4064 14.8733 10.23 14.6709 10 14.6709C9.77003 14.6709 9.5936 14.8733 9.24074 15.278L8.75926 15.8303C8.02179 16.6761 7.65305 17.0991 7.32653 16.9803C7 16.8616 7 16.3045 7 15.1905V9"
                stroke="#FCFCFC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="text-lg pr-1">دوره های موردعلاقه</span>
          </NavLink>
          <NavLink
            to={"favoriteblogs"}
            href="#"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline flex"
                : "flex hover:text-blue-300 "
            }
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 7C2 5.59987 2 4.8998 2.27248 4.36502C2.51217 3.89462 2.89462 3.51217 3.36502 3.27248C3.8998 3 4.59987 3 6 3C7.40013 3 8.1002 3 8.63498 3.27248C9.10538 3.51217 9.48783 3.89462 9.72752 4.36502C10 4.8998 10 5.59987 10 7V17C10 18.4001 10 19.1002 9.72752 19.635C9.48783 20.1054 9.10538 20.4878 8.63498 20.7275C8.1002 21 7.40013 21 6 21C4.59987 21 3.8998 21 3.36502 20.7275C2.89462 20.4878 2.51217 20.1054 2.27248 19.635C2 19.1002 2 18.4001 2 17V7Z"
                stroke="#FCFCFC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 17H6.00898"
                stroke="#FCFCFC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 7H10"
                stroke="#FCFCFC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.4486 8.26843C11.0937 6.93838 10.9163 6.27336 11.0385 5.69599C11.146 5.18812 11.4108 4.72747 11.7951 4.38005C12.2319 3.98508 12.8942 3.80689 14.2187 3.4505C15.5432 3.09412 16.2055 2.91593 16.7804 3.03865C17.2862 3.1466 17.7449 3.41256 18.0909 3.79841C18.4842 4.23706 18.6617 4.90209 19.0166 6.23213L21.5514 15.7316C21.9063 17.0616 22.0837 17.7266 21.9615 18.304C21.854 18.8119 21.5892 19.2725 21.2049 19.62C20.7681 20.0149 20.1058 20.1931 18.7813 20.5495C17.4568 20.9059 16.7945 21.0841 16.2196 20.9614C15.7138 20.8534 15.2551 20.5874 14.9091 20.2016C14.5158 19.7629 14.3383 19.0979 13.9834 17.7679L11.4486 8.26843Z"
                stroke="#FCFCFC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.7812 16.6953L17.7899 16.693"
                stroke="#FCFCFC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 8.00019L18.5001 6"
                stroke="#FCFCFC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="text-lg pr-1">بلاگ های موردعلاقه</span>
          </NavLink>
          <NavLink
            to={"/myprofile"}
            href="#"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline flex"
                : "flex hover:text-blue-300 "
            }
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                stroke="#FCFCFC"
                strokeWidth="1.5"
              />
              <path
                d="M7.5 17C9.8317 14.5578 14.1432 14.4428 16.5 17M14.4951 9.5C14.4951 10.8807 13.3742 12 11.9915 12C10.6089 12 9.48797 10.8807 9.48797 9.5C9.48797 8.11929 10.6089 7 11.9915 7C13.3742 7 14.4951 8.11929 14.4951 9.5Z"
                stroke="#FCFCFC"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>

            <span className="text-lg pr-1">پروفایل</span>
          </NavLink>
          <a
            href="#"
            className="flex items-center space-x-3 hover:text-blue-300"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 6.67014C5.93408 6.67014 4.91969 6.55083 4 6.33555C3.04003 6.11084 2 6.80213 2 7.80861V18.8175C2 19.6259 2 20.0301 2.19412 20.4469C2.30483 20.6846 2.55696 21.008 2.75898 21.1714C3.11319 21.4578 3.4088 21.527 4 21.6654C4.91969 21.8807 5.93408 22 7 22C8.91707 22 10.6675 21.6141 12 20.978C13.3325 20.342 15.0829 19.956 17 19.956C18.0659 19.956 19.0803 20.0753 20 20.2906C20.96 20.5153 22 19.824 22 18.8175V7.80861C22 7.00024 22 6.59606 21.8059 6.17924C21.6952 5.94152 21.443 5.61814 21.241 5.45478C20 4.43875 18 5.44226 18 5.44226"
                stroke="#FCFCFC"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M14.5 13.5C14.5 14.8807 13.3807 16 12 16C10.6193 16 9.5 14.8807 9.5 13.5C9.5 12.1193 10.6193 11 12 11C13.3807 11 14.5 12.1193 14.5 13.5Z"
                stroke="#FCFCFC"
                strokeWidth="1.5"
              />
              <path
                d="M5.5 14.5V14.509"
                stroke="#FCFCFC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.5 12.4922V12.5012"
                stroke="#FCFCFC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.5 4.5C9.99153 3.9943 11.2998 2 12 2M12 2C12.7002 2 14.0085 3.9943 14.5 4.5M12 2V8"
                stroke="#FCFCFC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="text-lg pr-1">پرداخت ها</span>
          </a>
        </nav>
      </div>

      {/* Logout Section */}
      <div className="px-6 pb-4">
        <Link
          to={"/auth/signin"}
          href="#"
          className="flex items-center space-x-3 text-red-500 border border-red-500 px-4 py-2 rounded-3xl hover:bg-red-500 hover:text-white"
        >
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18.125C14.9264 19.9769 13.3831 21.5494 11.3156 21.4988C10.8346 21.487 10.2401 21.3194 9.05112 20.984C6.18961 20.1768 3.70555 18.8203 3.10956 15.7815C3 15.223 3 14.5944 3 13.3373V11.6627C3 10.4056 3 9.77705 3.10956 9.21846C3.70555 6.17965 6.18961 4.82316 9.05112 4.01603C10.2401 3.68064 10.8346 3.51295 11.3156 3.50119C13.3831 3.45061 14.9264 5.02307 15 6.87501"
              stroke="#FF5353"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M21 12.5H10M21 12.5C21 11.7998 19.0057 10.4915 18.5 10M21 12.5C21 13.2002 19.0057 14.5085 18.5 15"
              stroke="#FF5353"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="text-lg pr-1">خروج از حساب کاربری</span>
        </Link>
      </div>
    </div>
  );
};

export { StudentMenu };
