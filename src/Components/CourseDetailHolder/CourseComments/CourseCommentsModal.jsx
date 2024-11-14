import { Field, Form, Formik } from "formik";
import {
  CommentRemove01Icon,
  MailReply02Icon,
  MessagePreview02Icon,
  SentIcon,
  SmileIcon,
} from "hugeicons-react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Pic from "../../../assets/logo (3)highQ.png";

const CourseCommentsModal = ({ isOpen, onClose, courseComments, dataBlog }) => {
  const commentsData = [
    {
      id: 1,
      user: "مهرداد علیزاده",
      avatar: "https://via.placeholder.com/40",
      date: "۱۳ مهر ۱۴۰۳",
      comment: "دوره خیلی خوبی بود واقعا لذت بردم",
      description:
        "واقعاً مفید بود. هم اساتیدش و هم کلاس‌ها منظم برگزار شدن و اصلاً از ساعت عقب نیفتادم و تونستم به مقدار زیادی پیشرفت کنم توی کنوانسیون جاوا اسکریپت.",
      likes: 29,
      replies: [
        // {
        //   id: 2,
        //   user: "امیرحسین سپهریان",
        //   avatar: "https://via.placeholder.com/40",
        //   date: "۱۳ مهر ۱۴۰۳",
        //   comment: "خوب بود ولی نبود",
        //   description:
        //     "دوره منظم بود، ولی هم کلاس‌ها منظم برگزار شدن و اصلاً از ساعت عقب نمی‌افتادم و تونستم به مقدار زیادی پیشرفت کنم توی کنوانسیون جاوا اسکریپت.",
        //   likes: 18,
        // },
      ],
    },
  ];

  if (!isOpen) return null;

  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [isReplyOpen, setIsReplyOpen] = useState(false);
  const [isReplyReplyOpen, setIsReplyReplyOpen] = useState(false);
  const [isCourseComment, setIsCourseComment] = useState();
  const { pathname } = useLocation();

  useEffect(() => {
    {
      pathname.includes("courseDetails")
        ? setIsCourseComment(true)
        : setIsCourseComment(false);
    }
  }, []);

  // {
  //   pathname.includes("courseDetails")
  //     ? setIsCourseComment(true)
  //     : setIsCourseComment(false);
  // }
  console.log(isCourseComment);

  const handleComment = () => {
    setIsCommentOpen(!isCommentOpen);
    {
      isReplyOpen ? setIsReplyOpen(!isReplyOpen) : "";
    }
    {
      isReplyReplyOpen ? setIsReplyReplyOpen(!isReplyReplyOpen) : "";
    }
  };

  const handleReply = () => {
    setIsReplyOpen(!isReplyOpen);
    {
      isCommentOpen ? setIsCommentOpen(!isCommentOpen) : "";
    }
    {
      isReplyReplyOpen ? setIsReplyReplyOpen(!isReplyReplyOpen) : "";
    }
  };

  const handleReplyReply = () => {
    setIsReplyReplyOpen(!isReplyReplyOpen);
    {
      isCommentOpen ? setIsCommentOpen(!isCommentOpen) : "";
    }
    {
      isReplyOpen ? setIsReplyOpen(!isReplyOpen) : "";
    }
  };

  console.log(courseComments);

  const addComment = (style) => {
    return (
      <Formik
        initialValues={{ title: "", describe: "" }}
        onSubmit={(value) => addComment(value)}
      >
        <Form
          className={`w-full border border-[#3772FF] rounded-[24px] h-[72px] flex gap-4 px-4 ${style} items-center`}
        >
          <button
            type="submit"
            className="size-10 min-w-10 min-h-10 bg-[#3772FF] rounded-full flex justify-center items-center"
          >
            <SentIcon className="size-5 text-white" />
          </button>
          <button className="size-10 min-w-10 min-h-10 border border-[#F1F1F1] rounded-full flex justify-center items-center">
            <SmileIcon className="size-5 text-blue-500" />
          </button>

          <div className="w-full flex flex-col justify-between">
            <Field
              name="title"
              placeholder="عنوان نظر خود را بنویسید"
              className="outline-none w-full bg-transparent"
            />
            <div className="w-full border"></div>
            <Field
              name="describe"
              placeholder="متن نظر خود را بنویسید"
              className="outline-none w-full bg-transparent"
            />
          </div>
        </Form>
      </Formik>
    );
  };
  return (
    <div className="fixed inset-0 flex justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative w-full max-w-3xl p-8 bg-white dark:bg-gray-800 rounded-[2rem] shadow-lg overflow-y-scroll">
        {/* Header */}
        <div className="flex justify-between items-center mb-2 pb-2">
          <div className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <div className="text-2xl">نظرات دانشجو ها و اساتید</div>
            <div className=" text-lg text-gray-500">
              (فیگما یا ادوبی ایکس‌دی؟)
            </div>
          </div>
          <button
            className="text-red-500 border border-[#FF5353] rounded-full py-2 px-4 mb-2"
            onClick={onClose}
          >
            ✕ بستن
          </button>
        </div>

        {isCommentOpen ? (
          <button
            className="text-white bg-[#ff5555] rounded-full py-2 px-4 mb-4 flex gap-2 items-center"
            onClick={handleComment}
          >
            <CommentRemove01Icon
              size={24}
              color={"#ffffff"}
              variant={"stroke"}
            />
            بستن
          </button>
        ) : (
          <button
            className="text-white bg-[#3772FF] rounded-full py-2 px-4 mb-4 flex gap-2 items-center"
            onClick={handleComment}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 6H22M18 2V10"
                stroke="#FCFCFC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.09881 19.5C4.7987 19.3721 3.82475 18.9816 3.17157 18.3284C2 17.1569 2 15.2712 2 11.5V11C2 7.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3H11.5M6.5 18C6.29454 19.0019 5.37769 21.1665 6.31569 21.8651C6.806 22.2218 7.58729 21.8408 9.14987 21.0789C10.2465 20.5441 11.3562 19.9309 12.5546 19.655C12.9931 19.5551 13.4395 19.5125 14 19.5C17.7712 19.5 19.6569 19.5 20.8284 18.3284C21.947 17.2098 21.9976 15.4403 21.9999 12"
                stroke="#FCFCFC"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M8 14H14M8 9H11"
                stroke="#FCFCFC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            نظر شما
          </button>
        )}

        {/* Comments Section */}
        <div className="space-y-6">
          {(isCourseComment ? courseComments : dataBlog)?.map((comment, id) => (
            <div key={id} className="space-y-4">
              {/* Main Comment */}
              <div className="flex items-start space-x-2">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="flex mb-2 gap-2">
                      <img
                        src={comment.pictureAddress ?? Pic}
                        alt="avatar"
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex flex-col gap-1 justify-center">
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">
                          {isCourseComment ? comment.author : comment.autor}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {isCourseComment
                            ? comment.insertDate.slice(0, 10)
                            : comment.inserDate.slice(0, 10)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <h1 className="mt-1 text-lg font-bold text-gray-900 dark:text-gray-300">
                    {comment.title}
                  </h1>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-400">
                    {comment.describe}
                  </p>
                  <div className="flex gap-3 space-x-2">
                    <div className="text-sm text-black hover:text-green-500 dark:text-gray-400 dark:hover:text-green-400 flex items-center gap-1">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 12.5C2 11.3954 2.89543 10.5 4 10.5C5.65685 10.5 7 11.8431 7 13.5V17.5C7 19.1569 5.65685 20.5 4 20.5C2.89543 20.5 2 19.6046 2 18.5V12.5Z"
                          stroke="#2F2F2F"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.4787 7.80626L15.2124 8.66634C14.9942 9.37111 14.8851 9.72349 14.969 10.0018C15.0369 10.2269 15.1859 10.421 15.389 10.5487C15.64 10.7065 16.0197 10.7065 16.7791 10.7065H17.1831C19.7532 10.7065 21.0382 10.7065 21.6452 11.4673C21.7145 11.5542 21.7762 11.6467 21.8296 11.7437C22.2965 12.5921 21.7657 13.7351 20.704 16.0211C19.7297 18.1189 19.2425 19.1678 18.338 19.7852C18.2505 19.8449 18.1605 19.9013 18.0683 19.9541C17.116 20.5 15.9362 20.5 13.5764 20.5H13.0646C10.2057 20.5 8.77628 20.5 7.88814 19.6395C7 18.7789 7 17.3939 7 14.6239V13.6503C7 12.1946 7 11.4668 7.25834 10.8006C7.51668 10.1344 8.01135 9.58664 9.00069 8.49112L13.0921 3.96056C13.1947 3.84694 13.246 3.79012 13.2913 3.75075C13.7135 3.38328 14.3652 3.42464 14.7344 3.84235C14.774 3.8871 14.8172 3.94991 14.9036 4.07554C15.0388 4.27205 15.1064 4.37031 15.1654 4.46765C15.6928 5.33913 15.8524 6.37436 15.6108 7.35715C15.5838 7.46692 15.5488 7.5801 15.4787 7.80626Z"
                          stroke="#2F2F2F"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {comment.likeCount}
                    </div>
                    <div className="text-sm text-black hover:text-green-500 dark:text-gray-400 dark:hover:text-green-400 flex items-center gap-1">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 11.5C2 12.6046 2.89543 13.5 4 13.5C5.65685 13.5 7 12.1569 7 10.5V6.5C7 4.84315 5.65685 3.5 4 3.5C2.89543 3.5 2 4.39543 2 5.5V11.5Z"
                          stroke="#2F2F2F"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.4787 16.1937L15.2124 15.3337C14.9942 14.6289 14.8851 14.2765 14.969 13.9982C15.0369 13.7731 15.1859 13.579 15.389 13.4513C15.64 13.2935 16.0197 13.2935 16.7791 13.2935H17.1831C19.7532 13.2935 21.0382 13.2935 21.6452 12.5327C21.7145 12.4458 21.7762 12.3533 21.8296 12.2563C22.2965 11.4079 21.7657 10.2649 20.704 7.9789C19.7297 5.88111 19.2425 4.83222 18.338 4.21485C18.2505 4.15508 18.1605 4.0987 18.0683 4.04586C17.116 3.5 15.9362 3.5 13.5764 3.5H13.0646C10.2057 3.5 8.77628 3.5 7.88814 4.36053C7 5.22106 7 6.60607 7 9.37607V10.3497C7 11.8054 7 12.5332 7.25834 13.1994C7.51668 13.8656 8.01135 14.4134 9.00069 15.5089L13.0921 20.0394C13.1947 20.1531 13.246 20.2099 13.2913 20.2493C13.7135 20.6167 14.3652 20.5754 14.7344 20.1577C14.774 20.1129 14.8172 20.0501 14.9036 19.9245C15.0388 19.728 15.1064 19.6297 15.1654 19.5323C15.6928 18.6609 15.8524 17.6256 15.6108 16.6429C15.5838 16.5331 15.5488 16.4199 15.4787 16.1937Z"
                          stroke="#2F2F2F"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {isCourseComment
                        ? comment.disslikeCount
                        : comment.dissLikeCount}
                    </div>
                    {isReplyOpen ? (
                      <>
                        {addComment()}
                        <button
                          className="text-white bg-[#ff5555] rounded-3xl py-3 px-1 mb-4 flex flex-col gap-2 items-center"
                          onClick={handleReply}
                        >
                          <CommentRemove01Icon
                            size={24}
                            color={"#ffffff"}
                            variant={"stroke"}
                          />
                          بستن
                        </button>
                      </>
                    ) : (
                      <div className="flex gap-4">
                        <button
                          className="text-[#3772FF] border border-[#3772FF] rounded-full py-2 px-3 flex gap-1"
                          onClick={handleReply}
                        >
                          <MailReply02Icon
                            size={20}
                            color={"#3772ff"}
                            variant={"stroke"}
                          />
                          جواب دادن
                        </button>
                        <button
                          className="text-[#3772FF] border border-[#3772FF] rounded-full py-2 px-3 flex gap-1"
                          onClick={handleReply}
                        >
                          <MessagePreview02Icon
                            size={20}
                            color={"#3772ff"}
                            variant={"stroke"}
                          />
                          مشاهده جواب ها
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Replies */}
              {/* {comment.replies && comment.replies.length > 0 && (
                <div className="mt-4 space-y-4 flex gap-4">
                  <div className="bg-[#3772FF] h-auto w-2 rounded-full py-8"></div>
                  {comment.replies.map((reply) => (
                    <div key={reply.id} className="flex items-start space-x-2">
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="flex mb-2 gap-2">
                            <img
                              src={comment.avatar}
                              alt="avatar"
                              className="w-12 h-12 rounded-full"
                            />
                            <div className="flex flex-col gap-1 justify-center">
                              <div className="text-sm font-semibold text-gray-900 dark:text-white">
                                {comment.user}
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">
                                {comment.date}
                              </div>
                            </div>
                          </div>
                        </div>
                        <h1 className="mt-1 text-lg font-bold text-gray-900 dark:text-gray-300">
                          {comment.comment}
                        </h1>
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-400">
                          {comment.description}
                        </p>
                        <div className="flex gap-3 space-x-2">
                          <div className="text-sm text-black hover:text-green-500 dark:text-gray-400 dark:hover:text-green-400 flex items-center gap-1">
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2 12.5C2 11.3954 2.89543 10.5 4 10.5C5.65685 10.5 7 11.8431 7 13.5V17.5C7 19.1569 5.65685 20.5 4 20.5C2.89543 20.5 2 19.6046 2 18.5V12.5Z"
                                stroke="#2F2F2F"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M15.4787 7.80626L15.2124 8.66634C14.9942 9.37111 14.8851 9.72349 14.969 10.0018C15.0369 10.2269 15.1859 10.421 15.389 10.5487C15.64 10.7065 16.0197 10.7065 16.7791 10.7065H17.1831C19.7532 10.7065 21.0382 10.7065 21.6452 11.4673C21.7145 11.5542 21.7762 11.6467 21.8296 11.7437C22.2965 12.5921 21.7657 13.7351 20.704 16.0211C19.7297 18.1189 19.2425 19.1678 18.338 19.7852C18.2505 19.8449 18.1605 19.9013 18.0683 19.9541C17.116 20.5 15.9362 20.5 13.5764 20.5H13.0646C10.2057 20.5 8.77628 20.5 7.88814 19.6395C7 18.7789 7 17.3939 7 14.6239V13.6503C7 12.1946 7 11.4668 7.25834 10.8006C7.51668 10.1344 8.01135 9.58664 9.00069 8.49112L13.0921 3.96056C13.1947 3.84694 13.246 3.79012 13.2913 3.75075C13.7135 3.38328 14.3652 3.42464 14.7344 3.84235C14.774 3.8871 14.8172 3.94991 14.9036 4.07554C15.0388 4.27205 15.1064 4.37031 15.1654 4.46765C15.6928 5.33913 15.8524 6.37436 15.6108 7.35715C15.5838 7.46692 15.5488 7.5801 15.4787 7.80626Z"
                                stroke="#2F2F2F"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            {comment.likes}
                          </div>
                          <div className="text-sm text-black hover:text-green-500 dark:text-gray-400 dark:hover:text-green-400 flex items-center gap-1">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2 11.5C2 12.6046 2.89543 13.5 4 13.5C5.65685 13.5 7 12.1569 7 10.5V6.5C7 4.84315 5.65685 3.5 4 3.5C2.89543 3.5 2 4.39543 2 5.5V11.5Z"
                                stroke="#2F2F2F"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M15.4787 16.1937L15.2124 15.3337C14.9942 14.6289 14.8851 14.2765 14.969 13.9982C15.0369 13.7731 15.1859 13.579 15.389 13.4513C15.64 13.2935 16.0197 13.2935 16.7791 13.2935H17.1831C19.7532 13.2935 21.0382 13.2935 21.6452 12.5327C21.7145 12.4458 21.7762 12.3533 21.8296 12.2563C22.2965 11.4079 21.7657 10.2649 20.704 7.9789C19.7297 5.88111 19.2425 4.83222 18.338 4.21485C18.2505 4.15508 18.1605 4.0987 18.0683 4.04586C17.116 3.5 15.9362 3.5 13.5764 3.5H13.0646C10.2057 3.5 8.77628 3.5 7.88814 4.36053C7 5.22106 7 6.60607 7 9.37607V10.3497C7 11.8054 7 12.5332 7.25834 13.1994C7.51668 13.8656 8.01135 14.4134 9.00069 15.5089L13.0921 20.0394C13.1947 20.1531 13.246 20.2099 13.2913 20.2493C13.7135 20.6167 14.3652 20.5754 14.7344 20.1577C14.774 20.1129 14.8172 20.0501 14.9036 19.9245C15.0388 19.728 15.1064 19.6297 15.1654 19.5323C15.6928 18.6609 15.8524 17.6256 15.6108 16.6429C15.5838 16.5331 15.5488 16.4199 15.4787 16.1937Z"
                                stroke="#2F2F2F"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            {comment.likes}
                          </div>
                          {isReplyReplyOpen ? (
                            <>
                              {addComment()}
                              <button
                                className="text-white bg-[#ff5555] rounded-3xl py-3 px-1 mb-4 flex flex-col gap-2 items-center"
                                onClick={handleReplyReply}
                              >
                                <CommentRemove01Icon
                                  size={24}
                                  color={"#ffffff"}
                                  variant={"stroke"}
                                />
                                بستن
                              </button>
                            </>
                          ) : (
                            <button
                              className="text-[#3772FF] border border-[#3772FF] rounded-full py-2 px-3"
                              onClick={handleReplyReply}
                            >
                              جواب دادن
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )} */}
            </div>
          ))}
        </div>

        {isCommentOpen && addComment("mt-4")}
      </div>
    </div>
  );
};

export { CourseCommentsModal };
