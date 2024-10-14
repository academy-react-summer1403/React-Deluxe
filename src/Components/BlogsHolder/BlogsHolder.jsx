import { BlogsCards } from "./BlogsCards/BlogsCards";
import { BlogsFilter } from "./BlogsFilter/BlogsFilter";
import { BlogsHeroSection } from "./BlogsHeroSection/BlogsHeroSection";

const BlogsHolder = () => {
  return (
    <>
      {" "}
      <BlogsHeroSection />
      <div className="flex p-6">
        <BlogsFilter />
        <div className="flex flex-col w-full pl-8">
          <BlogsCards />
        </div>
      </div>
    </>
  );
};

export { BlogsHolder };
