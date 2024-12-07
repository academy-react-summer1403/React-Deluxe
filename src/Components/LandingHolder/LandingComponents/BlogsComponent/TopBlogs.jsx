import { useState, useEffect } from "react";
import { BsCalendar4Week } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Carousel } from "antd";
import { GetTopBlogsByPg } from "../../../../core/services/api/TopBlogs.api";
import { getRandomColor } from "../../../Common/ColorGenerator";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { DatePersianizer } from "../../../../core/utils/DatePersianizer";
import Logo from "../../../../assets/logo (3)highQ.png";

const contentStyle = {
  height: "",
  color: "",
  lineHeight: "",
  textAlign: "center",
  background: "",
};

const BlogsCarsoual = () => {
  const [TopBlogSlice, setTopBlogs] = useState([]);

  const getTopBlogs = async () => {
    try {
      const result = await GetTopBlogsByPg();

      setTopBlogs(result.news);

      console.log(result.news);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTopBlogs();
  }, []);

  return (
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>
          <div className="md:hidden flex flex-wrap justify-center gap-2">
            {TopBlogSlice.slice(0, 1).map((blog, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 flex flex-col dark:bg-indigo-950 relative   rounded-3xl justify-center items-center flex-1  min-w-[250px] max-w-[350px]"
              >
                <Link to={`/BlogDetails/${blog.id}`}>
                  <div
                    className={`h-56 flex justify-center items-center rounded-3xl w-64 mx-auto mb-4 `}
                  >
                    <img
                      src={
                        blog.addUserProfileImage !== null &&
                        blog.addUserProfileImage !== "null"
                          ? blog.addUserProfileImage
                          : Logo
                      }
                      alt={""}
                      className={`size-48 `}
                    />
                  </div>

                  <h3 className="flex text-xl dark:text-white truncate w-[350px] font-semibold mb-2 ">
                    {blog.title}
                  </h3>
                </Link>
                <div className="flex flex-col items-center justify-between  px-2 text-gray-500 space-x-2 rtl:space-x-reverse ">
                  <p className="flex text-gray-400 dark:text-white truncate w-56 text-sm items-center ">
                    {blog.keyword}
                  </p>
                  <div className=" mt-0 pt-0">
                    <span
                      className={`inline-flex items-center dark:text-white text-xs gap-2 w-32 `}
                    >
                      <i /> {blog.insertDate}
                      <BsCalendar4Week />
                    </span>
                    <span className="inline-flex items-center dark:text-white text-xs gap-2">
                      <i /> {blog.currentView} <BsEye />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          {" "}
          <div className="md:hidden flex flex-wrap justify-center gap-2">
            {TopBlogSlice.slice(1, 2).map((blog, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 flex flex-col dark:bg-indigo-950 relative   rounded-3xl justify-center items-center flex-1  min-w-[250px] max-w-[350px]"
              >
                <Link to={"/blogDetails"}>
                  <div
                    className={`h-56 flex justify-center items-center ${getRandomColor()} rounded-3xl w-64 mx-auto mb-4 `}
                  >
                    <img
                      src={blog.addUserProfileImage}
                      alt={""}
                      className={`size-48 `}
                    />
                  </div>
                </Link>

                <Link to={"/blogDetails"}>
                  <h3 className="flex text-xl dark:text-white   font-semibold mb-2 ">
                    {blog.title}
                  </h3>
                </Link>
                <div className="flex flex-col items-center justify-between  px-2 text-gray-500 space-x-2 rtl:space-x-reverse ">
                  <p className="flex text-gray-400 dark:text-white text-sm items-center ">
                    {blog.author}
                  </p>
                  <div className=" mt-0 pt-0">
                    <span
                      className={`inline-flex items-center dark:text-white text-xs gap-2 w-32 `}
                    >
                      <i /> {blog.insertDate}
                      <BsCalendar4Week />
                    </span>
                    <span className="inline-flex items-center dark:text-white text-xs gap-2">
                      <i /> {blog.currentView} <BsEye />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          {" "}
          <div className="md:hidden flex flex-wrap justify-center gap-2">
            {TopBlogSlice.slice(2, 3).map((blog, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 flex flex-col dark:bg-indigo-950 relative   rounded-3xl justify-center items-center flex-1  min-w-[250px] max-w-[350px]"
              >
                <Link to={"/blogDetails"}>
                  <div
                    className={`h-56 flex justify-center items-center rounded-3xl w-64 mx-auto mb-4 ${getRandomColor()}`}
                  >
                    <img
                      src={blog.addUserProfileImage}
                      alt={""}
                      className={`size-48 `}
                    />
                  </div>

                  <h3 className="flex text-xl dark:text-white  font-semibold mb-2 ">
                    {blog.title}
                  </h3>
                </Link>
                <div className="flex flex-col items-center justify-between  px-2 text-gray-500 space-x-2 rtl:space-x-reverse ">
                  <p className="flex text-gray-400 dark:text-white text-sm items-center ">
                    {blog.author}
                  </p>
                  <div className=" mt-0 pt-0">
                    <span
                      className={`inline-flex items-center dark:text-white text-xs gap-2 w-32 `}
                    >
                      <i /> {blog.insertDate}
                      <BsCalendar4Week />
                    </span>
                    <span className="inline-flex items-center dark:text-white text-xs gap-2">
                      <i /> {blog.currentView} <BsEye />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </h3>
      </div>
    </Carousel>
  );
};

const TopBlogs = () => {
  const scrollTop = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const [TopBlog, setTopBlogs] = useState([]);

  const getTopBlogs = async () => {
    try {
      const result = await GetTopBlogsByPg();

      setTopBlogs(result.news);

      console.log(result.news);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTopBlogs();
  }, []);

  return (
    <section className="py-16 ">
      <div className="container mx-auto text-center">
        <h2
          data-aos="fade-up"
          className="text-3xl font-bold mb-8 dark:text-white"
        >
          بلاگ های برتر هفته
        </h2>
        <div
          data-aos="flip-down"
          className="md:flex hidden   md:flex-wrap justify-center gap-8 mx-2 "
        >
          {TopBlog.slice(0, 3).map((blog, index) => (
            <div
              key={index}
              className="dark:bg-indigo-950 rounded-3xl w-1/3 flex-1 bg-sky-50 "
            >
              <Link
                onClick={() => {
                  scrollTop();
                }}
                to={`/BlogDetails/${blog.id}`}
              >
                <div
                  className={`h-72 mx-auto flex justify-center items-center mb-4 rounded-2xl ${blog.color}`}
                >
                  <img
                    src={blog.addUserProfileImage}
                    alt={""}
                    className={`size-full rounded-2xl`}
                  />
                </div>

                <h3 className="flex text-l font-bold mb-2 px-2 dark:text-white">
                  {blog.title}
                </h3>
              </Link>
              <div className="flex justify-between mt-4 px-2 text-gray-500 space-x-2 rtl:space-x-reverse mb-2">
                <p className="flex text-gray-400 dark:text-white w-56 truncate text-sm items-center ">
                  {blog.keyword}
                </p>
                <div>
                  <span
                    className={`inline-flex items-center dark:text-white text-xs gap-2 w-32 `}
                  >
                    <i />
                    {/* {blog.insertDate.toString().slice(0, 10)} */}
                    <div>{DatePersianizer(blog?.insertDate)}</div>
                    <BsCalendar4Week />
                  </span>
                  <span className="inline-flex items-center dark:text-white text-xs gap-2">
                    <i /> {digitsEnToFa(blog?.currentView)} <BsEye />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="md:hidden block">
          <BlogsCarsoual />
        </div>
        <Link to={"/Blogs"}>
          <button className="bg-gray-900 dark:bg-blue-500 text-white px-5 py-1.5 rounded-full mt-8">
            مشاهده بیشتر
          </button>
        </Link>
      </div>
    </section>
  );
};

export { TopBlogs };
