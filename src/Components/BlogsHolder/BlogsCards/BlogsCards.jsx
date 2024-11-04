import { ConfigProvider, Modal, Pagination } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetAllBlogsByPg } from "../../../core/services/api/Blogs.api";
import Logo from "../../../assets/logo (3).png";

// const cardsData = [
//   {
//     title: "فرق ری‌اکت با نکست جی‌اس چیست؟",
//     author: "محسن اسفندیاری",
//     date: "17 اردیبهشت 1403",
//     views: 290,
//     imgUrl:
//       "https://s3-alpha-sig.figma.com/img/e186/5b86/bca1c8cd3132e2639f0ded1c76c11d46?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=muFxYD2fdDTghyT3akyfQRGLCXbK5cs8xGUHKkZBUrsmRNfzuCQOuiIPk0Msp2WUV-UzndCzpzBWLyinFXJiNutEDil5SvTT7rFNwFJC83ue1cYKFMxewp-I8szWezADhT0F1RGZjQAwxXSmaANjCcJoYRQxjw-lSgO4N-m9fpQ~t~urlMfcClORI9m-AFltZsKO6uawoGuVxWPrHUWu2hTNlzVE9-4-W75e-MLX0G1Eh9tzRqZ5nsocQBZ-eW68Gta4f01ZznlkulJS3z6pKmo8PcAQUHbvsZBndS8CpoBuJuYP4j-XPnrV0P7~GFBXsZNILbR1jZXVDpQ4C0dt7A__",
//     bgColor: "bg-[#87DFFF]",
//   },
//   {
//     title: "فیگما یا ادوبی ایکس‌دی؟",
//     author: "محمدحسین خلیل‌پور",
//     date: "17 اردیبهشت 1403",
//     views: 318,
//     imgUrl:
//       "https://s3-alpha-sig.figma.com/img/72eb/0bda/c649ce20dfb0409d36134908c7d16a53?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VKvXDw8XmMqPX-avBXZ3r-CHzU9Gajrp1YuONERMXpFwVwsZ621ROUvmGg0l0M5Uk3WLvvw2rJNVCzHrcBZFnMZ7223KYF1zthqjB~agrpfX1me4Htn4sYgPWzfOwWcoeMc-8Ft~KokEaEwmlvGatv8eiEtEq7qJdFYL2XiYwSwyu6q6HpeqpSxry78jz0IRAoiTvIYk2P9IFUBoe0ld3XB~XIPFhnHivN8S7q7uvba6q8faq91bBMcoe6dbzjhSVpBQOyKyOeSw4CO4ds4OMV-PV~7gwlyWBn85CIdU5oudgmBhTkRo5lytZ9g8DyzRqkHuWOr7Wez3jdvHYkD02g__",
//     bgColor: "bg-[#FF6C6C]",
//   },
//   {
//     title: "زبان جاوا اسکریپت در چه حوزه ای به کار میره؟",
//     author: "محمدحسین بحرالعلومی",
//     date: "17 اردیبهشت 1403",
//     views: 318,
//     imgUrl:
//       "https://s3-alpha-sig.figma.com/img/6405/b314/68db8ea561a27064e67d06d024404030?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=plAdFIOKijEfsSeU-9aihHOhbNcP~sosS5W~X9aELB0u5HdlmsEYjQJA0UZKFCv4HrgNvN-D9t0Fv1RljNjHNzddGL9qXbdEHeaIQzWWpB26CmVXACneoTk1yKtsimn4L4yZhz6t6lPtw9Jd19zX6DDtsMiZrU-y0ZWBBEO0cqb7XRfqedjRCrGmx6ikEc6UkdA-rXiQySoEWqOIoOl0sW4OPKqvAmB1QwR0PxNrpGUUu5I0QylRgUaK~DtnPFEHb8plnrfz5R~HiFU8gphiEYknrYA6fRqPJQDE5T0RA2kwOq0gU3rUwjfjqk1wnmVhND~4LDaQR-8KDA63SebBxg__",
//     bgColor: "bg-[#F0DB4F]",
//   },
//   {
//     title: "فرق ری‌اکت با نکست جی‌اس چیست؟",
//     author: "محسن اسفندیاری",
//     date: "17 اردیبهشت 1403",
//     views: 290,
//     imgUrl:
//       "https://s3-alpha-sig.figma.com/img/e186/5b86/bca1c8cd3132e2639f0ded1c76c11d46?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=muFxYD2fdDTghyT3akyfQRGLCXbK5cs8xGUHKkZBUrsmRNfzuCQOuiIPk0Msp2WUV-UzndCzpzBWLyinFXJiNutEDil5SvTT7rFNwFJC83ue1cYKFMxewp-I8szWezADhT0F1RGZjQAwxXSmaANjCcJoYRQxjw-lSgO4N-m9fpQ~t~urlMfcClORI9m-AFltZsKO6uawoGuVxWPrHUWu2hTNlzVE9-4-W75e-MLX0G1Eh9tzRqZ5nsocQBZ-eW68Gta4f01ZznlkulJS3z6pKmo8PcAQUHbvsZBndS8CpoBuJuYP4j-XPnrV0P7~GFBXsZNILbR1jZXVDpQ4C0dt7A__",
//     bgColor: "bg-[#87DFFF]",
//   },
//   {
//     title: "فیگما یا ادوبی ایکس‌دی؟",
//     author: "محمدحسین خلیل‌پور",
//     date: "17 اردیبهشت 1403",
//     views: 318,
//     imgUrl:
//       "https://s3-alpha-sig.figma.com/img/72eb/0bda/c649ce20dfb0409d36134908c7d16a53?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VKvXDw8XmMqPX-avBXZ3r-CHzU9Gajrp1YuONERMXpFwVwsZ621ROUvmGg0l0M5Uk3WLvvw2rJNVCzHrcBZFnMZ7223KYF1zthqjB~agrpfX1me4Htn4sYgPWzfOwWcoeMc-8Ft~KokEaEwmlvGatv8eiEtEq7qJdFYL2XiYwSwyu6q6HpeqpSxry78jz0IRAoiTvIYk2P9IFUBoe0ld3XB~XIPFhnHivN8S7q7uvba6q8faq91bBMcoe6dbzjhSVpBQOyKyOeSw4CO4ds4OMV-PV~7gwlyWBn85CIdU5oudgmBhTkRo5lytZ9g8DyzRqkHuWOr7Wez3jdvHYkD02g__",
//     bgColor: "bg-[#FF6C6C]",
//   },
//   {
//     title: "زبان جاوا اسکریپت در چه حوزه ای به کار میره؟",
//     author: "محمدحسین بحرالعلومی",
//     date: "17 اردیبهشت 1403",
//     views: 318,
//     imgUrl:
//       "https://s3-alpha-sig.figma.com/img/6405/b314/68db8ea561a27064e67d06d024404030?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=plAdFIOKijEfsSeU-9aihHOhbNcP~sosS5W~X9aELB0u5HdlmsEYjQJA0UZKFCv4HrgNvN-D9t0Fv1RljNjHNzddGL9qXbdEHeaIQzWWpB26CmVXACneoTk1yKtsimn4L4yZhz6t6lPtw9Jd19zX6DDtsMiZrU-y0ZWBBEO0cqb7XRfqedjRCrGmx6ikEc6UkdA-rXiQySoEWqOIoOl0sW4OPKqvAmB1QwR0PxNrpGUUu5I0QylRgUaK~DtnPFEHb8plnrfz5R~HiFU8gphiEYknrYA6fRqPJQDE5T0RA2kwOq0gU3rUwjfjqk1wnmVhND~4LDaQR-8KDA63SebBxg__",
//     bgColor: "bg-[#F0DB4F]",
//   },
// ];

const BlogsCards = () => {
  const [news, setNews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const getAllBlogs = async () => {
    try {
      const result = await GetAllBlogsByPg();
      setNews(result.news);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      setIsAnimating(true);
    }, 10);
  };

  const closeModal = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 300);
  };

  return (
    <div className="mb-8 w-[72rem]">
      {/* <div className="hidden lg:flex justify-start items-center gap-2 mb-4 mr-7">
        <span className="text-xl ml-2 dark:text-white">ترتیب </span>
        <button className=" text-white bg-blue-500 py-2 px-4 rounded-full">
          جدیدترین
        </button>
        <button className="text-blue-500 border border-blue-500 py-2 px-4 rounded-full">
          محبوب‌ترین
        </button>
      </div> */}
      <ul className="hidden lg:flex justify-start items-center gap-2 mb-4 mr-7">
        <li className="text-xl ml-2 dark:text-white">ترتیب</li>
        <li>
          <button className="text-white bg-blue-500 py-2 px-4 rounded-full">
            جدیدترین
          </button>
        </li>
        <li>
          <button className="text-blue-500 border border-blue-500 py-2 px-4 rounded-full">
            محبوب‌ترین
          </button>
        </li>
      </ul>

      <div className="lg:hidden flex justify-end items-center gap-2 mb-4 ml-12">
        <button
          className="text-white bg-blue-500 py-3 px-4 rounded-full flex gap-2"
          onClick={openModal}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 8H20"
              stroke="#FCFCFC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 12H18"
              stroke="#FCFCFC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 16H16"
              stroke="#FCFCFC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 4H21"
              stroke="#FCFCFC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.5 21V3M5.5 21C4.79977 21 3.49153 19.0057 3 18.5M5.5 21C6.20023 21 7.50847 19.0057 8 18.5"
              stroke="#FCFCFC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          ترتیب
        </button>
      </div>

      {/* Modal Background */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end"
          onClick={closeModal}
        >
          <div
            className={`w-full bg-white rounded-t-3xl p-4 transform transition-transform duration-300 flex flex-col ${
              isAnimating ? "translate-y-0" : "translate-y-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center">
              <div className="bg-gray-300 rounded-3xl w-16 h-2 mb-6"></div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold mr-4">ترتیب</h2>
              <button
                className="text-red-500 border border-[#FF5353] rounded-full py-2 px-4 ml-4"
                onClick={closeModal}
              >
                ✕ بستن
              </button>
            </div>
            <div className="flex justify-start items-center gap-2 mb-4 mr-4">
              <button className=" text-red-500 border border-red-500 py-2 px-4 rounded-full">
                جدیدترین
              </button>
              <button className="text-gray-800 border border-gray-800 py-2 px-4 rounded-full">
                محبوب‌ترین
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-wrap  justify-around">
        <div className="flex gap-2 flex-wrap">
          {news.map((card, index) => (
            <div
              key={index}
              className={`lg:basis-[47%] p-4 bg-sky-50  basis-[90%] rounded-3xl mb-7`}
            >
              <Link to={`/BlogDetails/${card.id}`} className="cursor-pointer ">
                <div
                  className={`mb-4 w-full h-[22rem] rounded-[2.5rem] object-cover flex justify-center items-center`}
                >
                  <img
                    src={card.currentImageAddressTumb ?? Logo}
                    alt={card.title}
                    className={`size-full rounded-[2rem]`}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 dark:text-slate-300">
                  {card.title}
                </h3>
              </Link>
              <div className="text-gray-600 flex flex-row justify-between">
                <p className="text-sm/[1.3rem] dark:text-slate-400">
                  {card.addUserFullName}
                </p>
                <div className="flex flex-row gap-4">
                  <p className="flex text-xs/[1.4rem] gap-2 dark:text-slate-400">
                    {card.insertDate.toString().slice(0, 10)}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 1.66663V3.33329M5 1.66663V3.33329"
                        stroke="#707070"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.99658 10.8334H10.0041M9.99658 14.1667H10.0041M13.3262 10.8334H13.3337M6.66699 10.8334H6.67447M6.66699 14.1667H6.67447"
                        stroke="#707070"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.91699 6.66663H17.0837"
                        stroke="#707070"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.08301 10.2027C2.08301 6.57162 2.08301 4.75607 3.12644 3.62803C4.16987 2.5 5.84925 2.5 9.20801 2.5H10.7913C14.1501 2.5 15.8295 2.5 16.8729 3.62803C17.9163 4.75607 17.9163 6.57162 17.9163 10.2027V10.6307C17.9163 14.2617 17.9163 16.0773 16.8729 17.2053C15.8295 18.3333 14.1501 18.3333 10.7913 18.3333H9.20801C5.84925 18.3333 4.16987 18.3333 3.12644 17.2053C2.08301 16.0773 2.08301 14.2617 2.08301 10.6307V10.2027Z"
                        stroke="#707070"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </p>
                  <p className="flex text-xs/[1.4rem] gap-2 dark:text-slate-400">
                    {card.currentView}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 12C1.5 12 5.5 4.5 12 4.5C18.5 4.5 22.5 12 22.5 12C22.5 12 18.5 19.5 12 19.5C5.5 19.5 1.5 12 1.5 12Z"
                        stroke="#707070"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 15.75C13.7949 15.75 15.25 14.2949 15.25 12.5C15.25 10.7051 13.7949 9.25 12 9.25C10.2051 9.25 8.75 10.7051 8.75 12.5C8.75 14.2949 10.2051 15.75 12 15.75Z"
                        stroke="#707070"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ConfigProvider direction="rtl">
          <Pagination align="center" defaultCurrent={1} total={50} />
        </ConfigProvider>
      </div>
    </div>
  );
};

export { BlogsCards };
