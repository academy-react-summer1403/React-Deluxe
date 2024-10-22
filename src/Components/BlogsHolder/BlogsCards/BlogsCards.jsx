import { ConfigProvider, Modal, Pagination } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const cardsData = [
  {
    title: "فرق ری‌اکت با نکست جی‌اس چیست؟",
    author: "محسن اسفندیاری",
    date: "17 اردیبهشت 1403",
    views: 290,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/e186/5b86/bca1c8cd3132e2639f0ded1c76c11d46?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=muFxYD2fdDTghyT3akyfQRGLCXbK5cs8xGUHKkZBUrsmRNfzuCQOuiIPk0Msp2WUV-UzndCzpzBWLyinFXJiNutEDil5SvTT7rFNwFJC83ue1cYKFMxewp-I8szWezADhT0F1RGZjQAwxXSmaANjCcJoYRQxjw-lSgO4N-m9fpQ~t~urlMfcClORI9m-AFltZsKO6uawoGuVxWPrHUWu2hTNlzVE9-4-W75e-MLX0G1Eh9tzRqZ5nsocQBZ-eW68Gta4f01ZznlkulJS3z6pKmo8PcAQUHbvsZBndS8CpoBuJuYP4j-XPnrV0P7~GFBXsZNILbR1jZXVDpQ4C0dt7A__",
    bgColor: "bg-[#87DFFF]",
  },
  {
    title: "فیگما یا ادوبی ایکس‌دی؟",
    author: "محمدحسین خلیل‌پور",
    date: "17 اردیبهشت 1403",
    views: 318,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/72eb/0bda/c649ce20dfb0409d36134908c7d16a53?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VKvXDw8XmMqPX-avBXZ3r-CHzU9Gajrp1YuONERMXpFwVwsZ621ROUvmGg0l0M5Uk3WLvvw2rJNVCzHrcBZFnMZ7223KYF1zthqjB~agrpfX1me4Htn4sYgPWzfOwWcoeMc-8Ft~KokEaEwmlvGatv8eiEtEq7qJdFYL2XiYwSwyu6q6HpeqpSxry78jz0IRAoiTvIYk2P9IFUBoe0ld3XB~XIPFhnHivN8S7q7uvba6q8faq91bBMcoe6dbzjhSVpBQOyKyOeSw4CO4ds4OMV-PV~7gwlyWBn85CIdU5oudgmBhTkRo5lytZ9g8DyzRqkHuWOr7Wez3jdvHYkD02g__",
    bgColor: "bg-[#FF6C6C]",
  },
  {
    title: "زبان جاوا اسکریپت در چه حوزه ای به کار میره؟",
    author: "محمدحسین بحرالعلومی",
    date: "17 اردیبهشت 1403",
    views: 318,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/6405/b314/68db8ea561a27064e67d06d024404030?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=plAdFIOKijEfsSeU-9aihHOhbNcP~sosS5W~X9aELB0u5HdlmsEYjQJA0UZKFCv4HrgNvN-D9t0Fv1RljNjHNzddGL9qXbdEHeaIQzWWpB26CmVXACneoTk1yKtsimn4L4yZhz6t6lPtw9Jd19zX6DDtsMiZrU-y0ZWBBEO0cqb7XRfqedjRCrGmx6ikEc6UkdA-rXiQySoEWqOIoOl0sW4OPKqvAmB1QwR0PxNrpGUUu5I0QylRgUaK~DtnPFEHb8plnrfz5R~HiFU8gphiEYknrYA6fRqPJQDE5T0RA2kwOq0gU3rUwjfjqk1wnmVhND~4LDaQR-8KDA63SebBxg__",
    bgColor: "bg-[#F0DB4F]",
  },
  {
    title: "فرق ری‌اکت با نکست جی‌اس چیست؟",
    author: "محسن اسفندیاری",
    date: "17 اردیبهشت 1403",
    views: 290,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/e186/5b86/bca1c8cd3132e2639f0ded1c76c11d46?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=muFxYD2fdDTghyT3akyfQRGLCXbK5cs8xGUHKkZBUrsmRNfzuCQOuiIPk0Msp2WUV-UzndCzpzBWLyinFXJiNutEDil5SvTT7rFNwFJC83ue1cYKFMxewp-I8szWezADhT0F1RGZjQAwxXSmaANjCcJoYRQxjw-lSgO4N-m9fpQ~t~urlMfcClORI9m-AFltZsKO6uawoGuVxWPrHUWu2hTNlzVE9-4-W75e-MLX0G1Eh9tzRqZ5nsocQBZ-eW68Gta4f01ZznlkulJS3z6pKmo8PcAQUHbvsZBndS8CpoBuJuYP4j-XPnrV0P7~GFBXsZNILbR1jZXVDpQ4C0dt7A__",
    bgColor: "bg-[#87DFFF]",
  },
  {
    title: "فیگما یا ادوبی ایکس‌دی؟",
    author: "محمدحسین خلیل‌پور",
    date: "17 اردیبهشت 1403",
    views: 318,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/72eb/0bda/c649ce20dfb0409d36134908c7d16a53?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VKvXDw8XmMqPX-avBXZ3r-CHzU9Gajrp1YuONERMXpFwVwsZ621ROUvmGg0l0M5Uk3WLvvw2rJNVCzHrcBZFnMZ7223KYF1zthqjB~agrpfX1me4Htn4sYgPWzfOwWcoeMc-8Ft~KokEaEwmlvGatv8eiEtEq7qJdFYL2XiYwSwyu6q6HpeqpSxry78jz0IRAoiTvIYk2P9IFUBoe0ld3XB~XIPFhnHivN8S7q7uvba6q8faq91bBMcoe6dbzjhSVpBQOyKyOeSw4CO4ds4OMV-PV~7gwlyWBn85CIdU5oudgmBhTkRo5lytZ9g8DyzRqkHuWOr7Wez3jdvHYkD02g__",
    bgColor: "bg-[#FF6C6C]",
  },
  {
    title: "زبان جاوا اسکریپت در چه حوزه ای به کار میره؟",
    author: "محمدحسین بحرالعلومی",
    date: "17 اردیبهشت 1403",
    views: 318,
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/6405/b314/68db8ea561a27064e67d06d024404030?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=plAdFIOKijEfsSeU-9aihHOhbNcP~sosS5W~X9aELB0u5HdlmsEYjQJA0UZKFCv4HrgNvN-D9t0Fv1RljNjHNzddGL9qXbdEHeaIQzWWpB26CmVXACneoTk1yKtsimn4L4yZhz6t6lPtw9Jd19zX6DDtsMiZrU-y0ZWBBEO0cqb7XRfqedjRCrGmx6ikEc6UkdA-rXiQySoEWqOIoOl0sW4OPKqvAmB1QwR0PxNrpGUUu5I0QylRgUaK~DtnPFEHb8plnrfz5R~HiFU8gphiEYknrYA6fRqPJQDE5T0RA2kwOq0gU3rUwjfjqk1wnmVhND~4LDaQR-8KDA63SebBxg__",
    bgColor: "bg-[#F0DB4F]",
  },
];
const BlogsCards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false); // For controlling slide effect

  const openModal = () => {
    setIsModalOpen(true);
    // Add a slight delay before triggering the slide-up animation
    setTimeout(() => {
      setIsAnimating(true);
    }, 10); // Delay for the transition to trigger properly
  };

  const closeModal = () => {
    setIsAnimating(false);
    // Delay closing modal until the slide-down animation finishes
    setTimeout(() => {
      setIsModalOpen(false);
    }, 300); // Match the transition duration (300ms)
  };

  return (
    <div className="mb-8 w-[72rem]">
      <div className="hidden lg:flex justify-start items-center gap-2 mb-4 mr-7">
        <span className="text-xl ml-2 dark:text-white">ترتیب </span>
        <button className=" text-white bg-blue-500 py-2 px-4 rounded-full">
          جدیدترین
        </button>
        <button className="text-blue-500 border border-blue-500 py-2 px-4 rounded-full">
          محبوب‌ترین
        </button>
      </div>

      {/* On smaller screens, we show a single button to trigger the modal */}
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
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 12H18"
              stroke="#FCFCFC"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 16H16"
              stroke="#FCFCFC"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 4H21"
              stroke="#FCFCFC"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.5 21V3M5.5 21C4.79977 21 3.49153 19.0057 3 18.5M5.5 21C6.20023 21 7.50847 19.0057 8 18.5"
              stroke="#FCFCFC"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          ترتیب
        </button>
      </div>

      {/* Modal Background */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end"
          onClick={closeModal} // Close modal when background is clicked
        >
          {/* Modal Content (Slide-up effect) */}
          <div
            className={`w-full bg-white rounded-t-3xl p-4 transform transition-transform duration-300 flex flex-col ${
              isAnimating ? "translate-y-0" : "translate-y-full"
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
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

      <div className="flex flex-wrap justify-around">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`lg:basis-[47%] basis-[90%] rounded-3xl mb-7`}
          >
            <Link to={"/BlogDetails"} className="cursor-pointer ">
              <div
                className={`mb-4 w-full h-[22rem] rounded-[2.5rem] object-cover ${card.bgColor} flex justify-center items-center`}
              >
                <img
                  src={card.imgUrl}
                  alt={card.title}
                  className={`w-60 h-60 object-contain`}
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 dark:text-slate-300">
                {card.title}
              </h3>
            </Link>
            <div className="text-gray-600 flex flex-row justify-between">
              <p className="text-sm/[1.3rem] dark:text-slate-400">
                {card.author}
              </p>
              <div className="flex flex-row gap-4">
                <p className="flex text-xs/[1.4rem] gap-2 dark:text-slate-400">
                  {card.date}
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
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.99658 10.8334H10.0041M9.99658 14.1667H10.0041M13.3262 10.8334H13.3337M6.66699 10.8334H6.67447M6.66699 14.1667H6.67447"
                      stroke="#707070"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.91699 6.66663H17.0837"
                      stroke="#707070"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.08301 10.2027C2.08301 6.57162 2.08301 4.75607 3.12644 3.62803C4.16987 2.5 5.84925 2.5 9.20801 2.5H10.7913C14.1501 2.5 15.8295 2.5 16.8729 3.62803C17.9163 4.75607 17.9163 6.57162 17.9163 10.2027V10.6307C17.9163 14.2617 17.9163 16.0773 16.8729 17.2053C15.8295 18.3333 14.1501 18.3333 10.7913 18.3333H9.20801C5.84925 18.3333 4.16987 18.3333 3.12644 17.2053C2.08301 16.0773 2.08301 14.2617 2.08301 10.6307V10.2027Z"
                      stroke="#707070"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.5 6.66663H17.5"
                      stroke="#707070"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </p>
                <p className="flex text-xs/[1.4rem] gap-2 dark:text-slate-400">
                  {card.views}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.9537 9.20413C18.207 9.55938 18.3337 9.73704 18.3337 9.99996C18.3337 10.2629 18.207 10.4405 17.9537 10.7958C16.8152 12.3921 13.908 15.8333 10.0003 15.8333C6.09264 15.8333 3.18541 12.3921 2.04703 10.7958C1.79367 10.4405 1.66699 10.2629 1.66699 9.99996C1.66699 9.73704 1.79367 9.55938 2.04703 9.20413C3.18541 7.60783 6.09264 4.16663 10.0003 4.16663C13.908 4.16663 16.8152 7.60783 17.9537 9.20413Z"
                      stroke="#707070"
                      stroke-width="1.5"
                    />
                    <path
                      d="M12.5 10C12.5 8.61925 11.3807 7.5 10 7.5C8.61925 7.5 7.5 8.61925 7.5 10C7.5 11.3807 8.61925 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 10Z"
                      stroke="#707070"
                      stroke-width="1.5"
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
  );
};

export { BlogsCards };
