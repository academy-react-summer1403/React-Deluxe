import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { CourseCommentsModal } from "../../../CourseDetailHolder/CourseComments/CourseCommentsModal";

const MyComments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative flex flex-col bg-gray-50 dark:bg-indigo-900 w-full dark:text-white p-6 rounded-lg shadow-md lg:w-1/3 ">
      <CourseCommentsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold">نظرات شما</h2>
        <div
          className="flex-row flex gap-2 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="text-blue-500 dark:text-blue-400">مشاهده بیشتر</div>

          <svg
            className="relative top-1"
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 1C6.5 1 1.50001 4.68242 1.5 6C1.49999 7.31767 6.5 11 6.5 11"
              stroke="#3772FF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="absolute  top-[68px]  w-[90%]  h-1 bg-gray-300 overflow-hidden"></div>
        <div className="flex justify-center">
          <div className=" items-center px-2 z-10 w-32 bg-gray-50 dark:bg-indigo-900 dark:text-white">
            دوره‌ها و بلاگ ها
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="flex items-center ">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_56_1831)">
                <rect width="48" height="48" rx="24" fill="#4354ED" />
                <path
                  d="M45.1654 41.1881C44.9097 39.1698 45.0096 35.5209 47.5354 35.5209C48.6504 35.5209 49.6216 36.4202 49.6216 37.731C49.6216 38.8021 49.6336 39.3896 49.6336 40.2888C49.6336 42.8187 47.0878 43.3462 47.0878 43.3462L45.1614 41.1881H45.1654Z"
                  fill="#FF6DBA"
                />
                <path
                  d="M24.7676 23.1836C25.7188 14.607 36.1778 6.23021 40.1903 9.43545C42.828 11.5416 31.9494 14.7069 27.6771 22.6121L24.7676 23.1796V23.1836Z"
                  fill="#FF6DBA"
                />
                <path
                  d="M25.7227 23.1436C26.9416 16.0737 35.9459 9.61524 36.993 10.8142C37.9441 11.9053 29.1357 15.718 26.8577 22.7719L25.7227 23.1436Z"
                  fill="#FFA8D8"
                />
                <path
                  d="M14.209 25.2099C13.5696 23.9549 12.9701 22.5282 15.38 20.4819C17.7899 18.4357 21.0351 16.0617 23.3012 17.8402C25.6632 17.1328 26.7662 18.5156 27.8213 21.0534L14.209 25.2099Z"
                  fill="#433D83"
                />
                <path
                  d="M13.6714 26.5727C12.94 25.3058 13.3197 24.3267 18.1396 22.5442C21.9603 21.1294 26.1647 19.7626 27.9511 20.0303C28.4187 20.0983 28.8064 20.2901 29.0262 20.8736C29.5138 22.1725 29.5857 22.748 29.5857 22.748L13.6714 26.5727Z"
                  fill="#FFC200"
                />
                <path
                  d="M20.2397 24.7743C19.1926 13.9556 8.96943 7.11743 6.12388 9.63926C4.07364 11.4537 15.292 19.0671 17.7619 25.4257L20.2397 24.7743Z"
                  fill="#FF6DBA"
                />
                <path
                  d="M19.2845 24.8142C18.2015 17.8841 11.3674 11.094 10.3123 12.2849C9.48897 13.2161 16.3591 18.4077 18.4613 25.1059L19.2845 24.8102V24.8142Z"
                  fill="#FFA8D8"
                />
                <path
                  d="M43.5724 41.3878C44.5275 40.4406 45.4947 40.6644 46.298 41.4917C47.1013 42.319 47.8886 43.7298 47.1093 44.561C46.33 45.3923 45.3228 45.5802 45.3228 45.5802L43.5684 41.3878H43.5724Z"
                  fill="#FFC200"
                />
                <path
                  d="M30.903 40.0252C32.5336 39.3418 34.6798 40.4888 37.8211 43.2184C41.8656 40.8565 43.1845 40.5967 44.3794 42.0234C45.5704 43.4542 47.5767 46.5436 42.6249 48.9815C37.6772 51.4194 33.9044 51.1796 31.9022 46.5316C30.2076 42.599 30.903 40.0252 30.903 40.0252Z"
                  fill="#433D83"
                />
                <path
                  d="M31.1009 39.7293C32.8554 41.3719 37.2796 48.8415 34.9376 53.1418C34.1503 54.5885 26.313 56.359 20.6499 55.152C14.9868 53.9451 18.9394 42.2791 18.9394 42.2791L31.1049 39.7333L31.1009 39.7293Z"
                  fill="#FFC200"
                />
                <path
                  d="M29.8003 54.0811C29.8003 54.0811 29.7843 54.0811 29.7723 54.0811C29.5645 54.0651 29.4046 53.8852 29.4206 53.6774C29.6524 50.2763 28.905 47.211 27.2065 44.5652C27.0946 44.3894 27.1425 44.1536 27.3224 44.0417C27.4982 43.9298 27.734 43.9778 27.8459 44.1576C29.6364 46.9432 30.4197 50.1644 30.1759 53.7334C30.1639 53.9332 29.9961 54.0891 29.7963 54.0891L29.8003 54.0811Z"
                  fill="#FFE535"
                />
                <path
                  d="M35.5233 51.8069C34.4802 49.7326 33.3332 48.4897 31.9504 47.1788C31.7266 46.963 31.7026 46.9071 31.9504 46.4794C32.1982 46.0678 32.39 46.0918 32.7417 46.3236C34.0926 47.2228 35.0917 48.6855 35.7152 49.8086C35.7471 50.508 35.6872 51.1794 35.5233 51.8069Z"
                  fill="#433D83"
                />
                <path
                  d="M20.3223 42.4192C22.7082 43.2025 27.0405 44.8691 27.5281 44.6732C27.9517 44.5054 30.1658 41.8077 30.4815 39.9813L20.3223 42.4192Z"
                  fill="#433D83"
                />
                <path
                  d="M23.0508 41.7397C23.0508 41.7397 26.5837 43.0546 26.8755 42.9347C27.1672 42.8148 28.8738 41.1082 28.8738 40.181L23.0508 41.7397Z"
                  fill="#FF2EA1"
                />
                <path
                  d="M19.3169 42.9386C16.855 43.3542 16.2236 43.8538 15.3403 46.0319C10.6564 49.2332 9.4614 51.6032 13.382 55.216C16.1916 57.8058 17.2027 57.9377 18.9293 55.5038C20.0923 53.8692 20.6078 52.8501 20.1962 51.807C19.9963 51.2994 19.0611 50.2923 19.0611 50.2923C19.0611 50.2923 20.2082 48.8855 20.4799 47.4187C21.0155 44.5452 19.3129 42.9386 19.3129 42.9386H19.3169Z"
                  fill="#433D83"
                />
                <path
                  d="M28.5794 22.4323C24.5149 22.9718 18.6959 24.1388 14.7753 25.8374C12.3614 26.8845 10.7148 29.1705 11.3342 31.6923C11.9537 34.2142 14.5035 35.593 17.0293 34.9735L30.8335 31.5685C33.3553 30.945 34.898 28.3952 34.2745 25.8734C33.6511 23.3515 31.5129 22.0446 28.5794 22.4323Z"
                  fill="#FF6DBA"
                />
                <path
                  d="M31.2938 30.2695L16.0149 34.0382C13.4931 34.6617 11.9504 37.2115 12.5739 39.7333C13.1974 42.2552 15.3675 43.59 18.4728 43.1424C24.2559 42.3071 28.9478 41.292 33.5479 39.4016C36.5613 38.1627 37.6124 36.2284 36.9889 33.7065C36.3655 31.1847 33.8156 29.642 31.2938 30.2655V30.2695Z"
                  fill="#FF6DBA"
                />
                <path
                  d="M22.9834 31.1394C23.2011 30.8176 22.8766 30.2179 22.2587 29.7998C21.6408 29.3818 20.9634 29.3037 20.7457 29.6255C20.528 29.9472 20.8525 30.547 21.4704 30.965C22.0883 31.3831 22.7657 31.4611 22.9834 31.1394Z"
                  fill="#2F2F2F"
                />
                <path
                  d="M29.5501 29.0062C29.9028 28.3488 29.9111 27.667 29.5688 27.4833C29.2265 27.2997 28.6631 27.6838 28.3104 28.3412C27.9578 28.9987 27.9494 29.6805 28.2917 29.8641C28.634 30.0477 29.1975 29.6637 29.5501 29.0062Z"
                  fill="#2F2F2F"
                />
                <path
                  d="M28.3556 31.5164C27.8241 31.1527 26.5971 32.2078 26.5971 32.2078C26.5971 32.2078 25.1024 31.8801 24.7187 32.4156C24.451 32.7873 24.8466 33.5067 25.578 34.0023C25.8658 34.1981 26.5572 34.5298 27.1327 34.3859C27.7082 34.242 28.1638 33.6266 28.3276 33.3228C28.7473 32.5435 28.7313 31.7762 28.3516 31.5164H28.3556Z"
                  fill="#2F2F2F"
                />
                <path
                  d="M27.1371 34.386C27.5607 34.2821 27.9164 33.9224 28.1442 33.6186C27.7006 33.203 26.8973 32.9113 26.042 32.9113C25.5425 32.9113 25.1108 33.0112 24.7871 33.175C24.947 33.4588 25.2227 33.7585 25.5864 34.0023C25.8742 34.1982 26.5656 34.5299 27.1411 34.386H27.1371Z"
                  fill="#FF2EA1"
                />
              </g>
              <defs>
                <clipPath id="clip0_56_1831">
                  <rect width="48" height="48" rx="24" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div className="text-right flex flex-col  items-center pr-4">
              <div className="text-sm font-semibold">شما</div>
              <div className="text-sm text-gray-300">12 دی 1402</div>
            </div>
          </div>
          <h2 className="mt-2">دوره خیلی خوبی بود واقعا لذت بردم</h2>
          <p className="text-justify m-0">
            واقعا عالی بود. هم استادش و هم کلاس ها منظم برگزار شدن و اصلا از
            مباحث عقب نموندم و تونستم به مقدار ثابتی پیشرفت کنم توی کدنویسی جاوا
            اسکریپت. ممنون از آکادمی بحر که این دوره رو گذاشتن
          </p>

          <div className="flex gap-3">
            <button className="  text-black dark:text-white w-12 h-12 rounded-full flex gap-2 justify-center items-center">
              <AiOutlineLike className="size-4" /> 25
            </button>
            <button className="  text-black dark:text-white  gap-2  w-12 h-12 rounded-full flex justify-center items-center">
              <AiOutlineDislike className="size-5" />1
            </button>
          </div>
          <div className="flex gap-4">
            <div className="border-r-8 rounded-xl  border-blue-500"></div>
            <div className="overflow-hidden">
              <div className="flex items-center ">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_54_124)">
                    <rect width="48" height="48" rx="24" fill="#29CC7A" />
                    <path
                      d="M36.2607 42.6107C40.3653 44.3526 42.5221 46.3721 44.5395 50.3433C46.557 54.3145 49.2002 59.748 43.9138 61.9077C38.6264 64.0665 37.6524 56.4732 35.9135 53.6171C33.4782 49.5773 32.8525 46.2328 36.2607 42.6107Z"
                      fill="#F79C13"
                    />
                    <path
                      d="M45.5151 61.0013C48.8546 58.0756 48.9939 55.1499 49.4108 54.1054C49.8286 53.0599 51.8461 48.7414 52.1942 47.2781C52.5414 45.8148 53.3064 44.9095 50.9418 42.6105C48.5761 40.3115 47.254 40.799 45.9329 43.1676L43.0807 48.6718C43.0807 48.6718 39.3233 52.5724 38.8369 56.5436C38.3494 60.5138 41.8283 64.2065 45.5151 61.0013Z"
                      fill="#F79C13"
                    />
                    <path
                      d="M34.8693 27.5635C35.5646 25.4048 36.5386 23.3844 36.6778 24.8468C36.7641 26.6367 37.0437 28.4119 37.5125 30.1411C38.2079 32.1615 37.8607 32.7882 36.1904 31.1866C34.5211 29.584 34.4515 29.0965 34.8693 27.5635Z"
                      fill="#C44FA3"
                    />
                    <path
                      d="M10.0336 73.8889C8.01609 73.3318 7.25009 72.0088 7.94645 69.8491C8.3015 68.7967 8.60358 67.7267 8.85074 66.6439C7.459 65.4601 7.04118 63.8574 8.29365 60.1657C9.54612 56.473 7.73754 54.2447 7.52864 48.7405C7.31973 43.2373 6.3458 37.3859 15.2504 37.8037C24.155 38.2215 33.1998 40.4509 37.0259 43.098C40.8519 45.7452 40.0173 54.0358 40.0173 55.8463C40.0173 57.6578 41.5473 63.9967 41.408 68.5946C41.2697 73.1925 24.8513 77.6512 10.0336 73.8889Z"
                      fill="#F79C13"
                    />
                    <path
                      d="M19.3471 12.9566L18.4821 13.2194C18.2614 13.2871 18.1368 13.5205 18.2035 13.7412L18.2241 13.8079C18.2908 14.0286 18.5242 14.1531 18.7449 14.0864L19.61 13.8226C19.8307 13.7559 19.9552 13.5225 19.8875 13.3018L19.8679 13.2351C19.8003 13.0144 19.5678 12.8889 19.3471 12.9566Z"
                      fill="#4070EF"
                    />
                    <path
                      d="M29.1665 46.3035L32.4364 45.5366C34.8717 42.7501 37.5846 38.571 32.9935 38.6406L24.2969 40.66L29.1665 46.3035Z"
                      fill="#F79C13"
                    />
                    <path
                      d="M30.2075 43.9339C31.1843 42.5765 31.8062 40.9964 32.017 39.3369L23.5293 39.6851L30.2075 43.9339Z"
                      fill="#C44FA3"
                    />
                    <path
                      d="M27.4248 40.6599C36.3991 40.3117 37.1641 35.1567 37.0248 31.8132C36.8855 28.4697 35.2859 26.8671 33.8941 25.3351C32.573 20.8764 30.9723 14.3277 20.8153 16.6963C12.4678 18.7167 12.1196 23.245 11.9107 29.3749C11.7018 34.2514 13.6497 41.2876 27.4248 40.6599Z"
                      fill="#D65A9F"
                    />
                    <path
                      d="M31.9464 20.179C30.2771 17.3229 27.2857 15.1632 20.8154 16.6962C19.8209 16.9267 18.845 17.2288 17.8937 17.6015C17.7328 17.7702 17.6426 17.9947 17.6426 18.2291C17.6426 18.4626 17.7328 18.6872 17.8937 18.8559C20.2593 21.0852 25.1289 21.9209 27.5642 22.1298C29.9986 22.3387 31.5296 22.5476 31.9464 20.179Z"
                      fill="#C44FA3"
                    />
                    <path
                      d="M33.8962 25.3341C33.5392 23.9846 33.0978 22.6585 32.5741 21.3639C33.1998 23.8021 27.1474 23.7325 23.8087 22.7566C20.4692 21.7817 18.3124 22.3388 18.4517 24.9163C18.7557 27.4487 19.3874 29.9311 20.3299 32.3007C21.3038 34.53 24.0167 39.9636 30.7655 39.3368C31.7943 39.2652 32.7977 38.9877 33.7177 38.5208C34.6376 38.054 35.4556 37.4076 36.1216 36.6201C36.8415 35.1253 37.1534 33.4668 37.0259 31.8132C36.8179 28.4697 35.6351 27.0064 33.8962 25.3341Z"
                      fill="#E66EA6"
                    />
                    <path
                      d="M24.8767 25.1704C25.3298 25.089 25.5721 24.3171 25.4171 23.4462C25.2621 22.5753 24.7688 21.9348 24.3147 22.0152C23.8616 22.0966 23.6183 22.8685 23.7733 23.7395C23.9292 24.6104 24.4226 25.2519 24.8767 25.1704Z"
                      fill="#3C2439"
                    />
                    <path
                      d="M31.2841 25.4243C31.701 25.3498 31.9236 24.6446 31.7814 23.8492C31.6401 23.0538 31.188 22.4692 30.7721 22.5438C30.3563 22.6173 30.1336 23.3225 30.2749 24.1179C30.4161 24.9133 30.8683 25.4979 31.2841 25.4243Z"
                      fill="#3C2439"
                    />
                    <path
                      d="M23.4609 27.8417L33.4787 28.9568C33.2698 30.7683 33.4787 30.4192 33.7573 31.8129C34.0348 33.2056 31.5309 34.1815 28.4002 33.0663C25.2695 31.9522 24.226 29.6532 23.4609 27.8417Z"
                      fill="#4D1616"
                    />
                    <path
                      d="M29.372 30.2105H31.9456L32.3634 29.932L32.7116 30.699C32.7116 30.699 30.6245 30.8383 29.7899 30.7686C28.9542 30.699 29.372 30.2105 29.372 30.2105Z"
                      fill="#A1C4FF"
                    />
                    <path
                      d="M28.3983 33.0666C29.4664 33.4619 30.5992 33.6512 31.7379 33.6247C31.0425 31.9524 29.233 30.5587 26.9379 29.932H24.5723C25.4216 31.411 26.783 32.5262 28.3983 33.0666Z"
                      fill="#C12254"
                    />
                    <path
                      d="M33.4787 28.957L33.2002 30.3497C33.1835 30.4664 33.1246 30.5734 33.0354 30.6508C32.9452 30.7273 32.8314 30.7695 32.7137 30.7676L32.3655 30.0016L31.9477 30.2801H29.3741C28.1216 30.1408 24.5741 30.0712 24.5741 30.0712C24.122 29.3964 23.7483 28.6716 23.4609 27.9115L33.4787 28.957Z"
                      fill="#FCFCFC"
                    />
                    <path
                      d="M24.5741 30.0893H25.4784L24.9213 28.0002L23.4609 27.861C23.7434 28.6446 24.1171 29.393 24.5741 30.0893Z"
                      fill="#E6EAF0"
                    />
                    <path
                      d="M15.2507 33.1372C13.0979 33.5707 10.9068 33.7806 8.7118 33.7639C8.5029 33.6943 8.29399 33.555 8.29399 33.3461C8.36362 32.0221 8.15471 30.0712 6.55504 29.166C6.44912 29.0728 6.37752 28.9463 6.35202 28.807C6.32652 28.6677 6.34908 28.5246 6.41577 28.4C7.18079 27.3545 7.32006 26.4492 6.90225 24.1502C6.83261 23.9413 7.04151 23.7324 7.32006 23.7324C9.99271 24.0786 12.6261 24.6848 15.1811 25.5439C15.2242 25.5763 15.2596 25.6185 15.2841 25.6665C15.3076 25.7146 15.3204 25.7685 15.3204 25.8225C14.9692 28.092 15.185 30.4135 15.9461 32.5791C16.0854 32.8577 16.0157 32.9283 15.2507 33.1372Z"
                      fill="#D65A9F"
                    />
                    <path
                      d="M13.5137 21.0852C19.8437 17.3229 23.2529 17.114 29.375 17.3925C27.6361 14.2579 25.4097 12.0982 19.6358 13.5616C13.8609 15.0239 13.5137 21.0852 13.5137 21.0852Z"
                      fill="#4070EF"
                    />
                    <path
                      d="M19.6353 13.5619H19.2871C20.619 14.5398 21.537 15.9806 21.8607 17.6028H21.9303C24.3921 17.2173 26.8912 17.1232 29.3745 17.3233C27.6356 14.2583 25.4092 12.0986 19.6353 13.5619Z"
                      fill="#FCFCFC"
                    />
                    <path
                      d="M31.3923 19.3432C30.8637 18.5586 30.1762 17.8946 29.3748 17.3934C26.8915 17.1923 24.3934 17.2865 21.9316 17.6719L26.5227 16.3478C32.9234 14.9551 34.2445 16.1389 34.0365 17.1138C33.8276 18.0897 33.0626 18.5772 31.3923 19.3432Z"
                      fill="#0F809C"
                    />
                    <path
                      d="M31.3892 15.7212C28.8853 15.5819 27.7024 16.4175 25.8242 17.5317C23.945 18.6469 22.4846 19.3432 17.8926 18.8558C23.3193 16.6961 28.9539 15.5123 31.3892 15.7212Z"
                      fill="#13B7BF"
                    />
                    <path
                      d="M10.2423 38.5709C6.41627 40.5903 5.1638 43.6563 4.39878 45.6757C3.63377 47.6962 1.82421 48.9506 0.0852691 51.3889C-1.65367 53.8271 -1.02793 55.9858 -0.540475 56.892C-0.0540036 57.7973 -0.26193 60.3052 1.96348 61.0015C4.18987 61.6989 7.5991 61.9078 9.40768 61.9775C10.922 62.0314 12.4315 62.1707 13.9291 62.3953C15.3209 62.5345 16.1555 61.5597 16.5733 60.0267C16.9902 58.4937 17.9641 54.5234 15.4601 54.5234H11.7733C11.2722 54.1596 10.7053 53.8987 10.1031 53.7565C10.5846 53.5633 11.0024 53.2396 11.3104 52.8208C11.6174 52.403 11.8018 51.9067 11.842 51.3889C12.9405 50.6052 13.8448 49.5803 14.4862 48.3926C14.903 47.4873 16.1555 45.3276 15.5994 42.7501C15.0423 40.1726 12.7473 37.2468 10.2423 38.5709Z"
                      fill="#F79C13"
                    />
                    <path
                      d="M12.6768 37.8735C12.259 36.4807 13.0936 35.3656 15.1808 34.7389C17.2679 34.1121 19.8415 35.3656 24.5728 39.4761C29.3031 43.5856 30.2074 43.9338 30.2074 43.9338L29.1639 46.3023L12.6768 37.8735Z"
                      fill="#F79C13"
                    />
                    <path
                      d="M9.12932 39.2671C11.9118 39.0582 13.9989 41.9839 13.79 45.6059C13.5821 49.229 12.8857 50.4128 11.8422 51.319C12.4758 51.22 13.079 50.9806 13.6086 50.6197C14.1382 50.2578 14.5806 49.7831 14.9032 49.2289C16.0694 47.2566 16.4186 44.9066 15.8772 42.6802C15.3211 39.7545 13.8597 38.2922 11.2861 38.0126C10.932 37.9548 10.5691 38.0038 10.2425 38.1529C9.33823 38.5707 9.05969 38.8492 9.12932 39.2671Z"
                      fill="#3C2439"
                    />
                    <path
                      d="M51.9796 45.6991C52.2895 45.4108 51.6922 44.2633 50.6457 43.1363C49.6002 42.0084 48.5007 41.3278 48.1908 41.6161C47.8818 41.9045 48.4791 43.052 49.5247 44.1789C50.5712 45.3068 51.6696 45.9865 51.9796 45.6991Z"
                      fill="#D65A9F"
                    />
                    <path
                      d="M48.0901 41.9144C48.1597 40.8002 48.2294 40.1725 48.2294 40.1725C47.4869 39.3889 46.8337 38.5239 46.2806 37.5951C46.0334 37.1135 45.7549 36.6476 45.4459 36.2023C45.3596 36.0631 45.3204 35.9012 45.3321 35.7384C45.3449 35.5746 45.4096 35.4206 45.5155 35.2961C45.7039 35.1539 45.9304 35.0715 46.1658 35.0587C46.4012 35.047 46.6356 35.1048 46.8376 35.2265C47.4271 35.6492 47.9646 36.1406 48.4373 36.6898L49.064 37.3165C51.2208 38.4317 51.3591 39.4066 51.4287 40.7306C51.4983 42.0537 51.3591 44.0045 51.3591 44.0045L48.0901 41.9144Z"
                      fill="#D65A9F"
                    />
                    <path
                      d="M48.2939 38.5013C48.085 37.038 47.5289 35.8542 47.2503 34.0426C46.9718 32.2311 46.9718 32.3704 46.9022 31.883C46.8933 31.8006 46.9002 31.7172 46.9228 31.6378C46.9453 31.5573 46.9836 31.4828 47.0356 31.4181C47.0875 31.3533 47.1513 31.2994 47.2238 31.2601C47.2964 31.2199 47.3769 31.1954 47.4592 31.1866C47.6868 31.1611 47.9173 31.217 48.1075 31.3445C48.2988 31.472 48.439 31.6623 48.5028 31.883L49.4071 35.3667L52.12 37.4558C53.0939 38.2228 53.5813 39.5459 53.2332 41.7752C52.9321 43.1248 52.5368 44.4518 52.0503 45.7464L48.085 41.9144L48.2939 38.5013Z"
                      fill="#D65A9F"
                    />
                    <path
                      d="M23.4609 24.4983L32.2262 24.9161L33.0609 26.5884L23.4609 25.5438V24.4983Z"
                      fill="#E66EA6"
                    />
                    <path
                      d="M29.3045 34.8088C30.4207 34.9579 31.5555 34.8872 32.6441 34.5999C33.2699 34.3909 32.9217 35.1569 32.2263 35.5051C31.8595 35.7454 31.4378 35.8906 31.0003 35.9269C30.5629 35.9631 30.1235 35.8906 29.7224 35.715C28.9564 35.2266 28.7484 34.7391 29.3045 34.8088Z"
                      fill="#C44FA3"
                    />
                    <path
                      d="M23.6698 28.3997L33.4091 29.1657L33.4787 28.9568L23.4609 27.8417L23.6698 28.3997Z"
                      fill="#5E1B1B"
                    />
                    <path
                      d="M22.5564 28.957C24.1561 28.6089 23.8776 27.4937 23.7393 26.9366C23.6 26.3795 23.5304 26.7277 23.3215 27.2848C23.1145 27.7673 22.832 28.2136 22.4868 28.6089C22.2779 28.8178 22.2779 29.0267 22.5564 28.957Z"
                      fill="#C44FA3"
                    />
                    <path
                      d="M15.2524 33.1367C13.1005 33.5712 10.9085 33.7811 8.71348 33.7644H8.08773C8.0181 33.6251 8.01809 33.5555 8.29566 33.4859C9.6874 33.2063 11.7049 32.6492 13.5135 32.1618C13.6998 32.0941 13.8597 31.9676 13.9666 31.8008C14.0745 31.6331 14.1235 31.436 14.1078 31.2379C14.0921 31.0397 14.0117 30.8524 13.8793 30.7053C13.7469 30.5572 13.5694 30.4572 13.3742 30.4199L6.55671 29.2361C5.93097 29.1664 5.93097 28.679 6.41744 28.5397L12.8181 27.912C12.9838 27.9306 13.1506 27.8826 13.281 27.7776C13.4115 27.6737 13.4948 27.5217 13.5135 27.3549C13.5321 27.1892 13.484 27.0225 13.3791 26.891C13.2751 26.7606 13.1231 26.6772 12.9573 26.6586L8.5742 25.3345C7.39137 25.056 7.04417 24.7774 6.9049 24.3596C6.83526 24.1507 7.04417 23.9418 7.32173 23.9418C9.99536 24.288 12.6278 24.8941 15.1828 25.7533C15.2269 25.7857 15.2612 25.8278 15.2857 25.8759C15.3093 25.924 15.322 25.9779 15.322 26.0318C14.9719 28.3014 15.1867 30.6229 15.9488 32.7885C16.088 32.8581 16.0184 32.9278 15.2524 33.1367Z"
                      fill="#C44FA3"
                    />
                    <path
                      d="M52.8874 39.1276C53.0953 40.3811 52.5392 40.4508 52.1214 39.6848C51.7046 38.9188 51.0779 38.2224 49.3389 37.8036C48.9731 37.2955 48.5533 36.8287 48.0864 36.4109C47.8736 35.589 47.7343 34.7494 47.6696 33.903C47.6 33.4852 47.1822 31.7433 47.8089 31.604C47.8962 31.5678 47.9913 31.555 48.0855 31.5667C48.1796 31.5785 48.2699 31.6138 48.3464 31.6697C48.4229 31.7247 48.4837 31.7992 48.5239 31.8855C48.5641 31.9718 48.5808 32.067 48.5739 32.1611C48.6435 32.5789 49.5478 35.7842 49.5478 35.7842C49.6793 34.719 49.9127 33.6696 50.2432 32.6486C50.4521 32.3004 51.3564 32.37 51.2868 33.2763C51.2171 34.1815 50.9396 36.3412 50.9396 36.3412L52.5392 35.0172C52.7481 34.8779 53.2346 34.5297 53.3739 34.8083C53.5132 35.0868 53.5132 35.3653 53.3043 35.5743C53.0953 35.7841 51.9135 37.0376 51.9135 37.0376C52.3529 37.6741 52.6814 38.3813 52.8874 39.1276Z"
                      fill="#E66EA6"
                    />
                    <path
                      d="M34.9375 41.9144C38.4164 45.6061 39.8768 51.3888 40.016 55.8465C40.7124 54.1056 41.2685 47.6962 37.8593 43.3777C37.1639 42.4715 35.0768 41.6359 35.0768 41.6359L34.9375 41.9144Z"
                      fill="#3C2439"
                    />
                    <path
                      d="M12.6777 37.8735C15.2513 37.8038 16.851 38.0127 18.0338 39.3368C19.2167 40.6599 21.1645 43.3767 26.5912 45.0489C27.982 45.4667 27.4955 45.606 25.478 45.3275C23.1545 45.0577 20.9203 44.2721 18.9381 43.0285C17.5258 41.8702 16.2429 40.5627 15.112 39.1278C14.6324 38.5511 13.9694 38.1579 13.2338 38.0127L12.6777 37.8735Z"
                      fill="#F08024"
                    />
                    <path
                      d="M34.9363 41.9144C33.8927 43.6563 32.6413 45.1187 33.1277 45.1187C33.6152 45.1187 35.2845 43.4474 35.7023 42.8197L34.9363 41.9144Z"
                      fill="#F08024"
                    />
                    <path
                      d="M33.6198 50.3433C33.1333 48.3229 31.1158 45.8855 31.1158 45.8855C31.1158 45.8855 34.4544 47.4175 34.5937 45.4667C34.733 43.5169 32.437 44.3526 30.9766 45.606C27.0809 43.2384 25.4802 43.6562 26.3149 46.3034C27.1495 48.9505 30.7677 45.9552 30.7677 45.9552C29.7359 47.9423 29.0317 50.0823 28.6805 52.294"
                      stroke="#E6EAF0"
                      stroke-width="1.34482"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_54_124">
                      <rect width="48" height="48" rx="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <div className="text-right flex flex-col  items-center pr-4">
                  <div className="text-sm font-semibold">امیرحسین سهرابی</div>
                  <div className="text-sm text-gray-300">12 دی 1402</div>
                </div>
              </div>
              <h2 className="mt-2">خوب بود بد نبود</h2>
              <p className="truncate">منم موافقم </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MyComments };
