import { BlogsCards } from "./BlogsCards/BlogsCards";
import { BlogsFilter } from "./BlogsFilter/BlogsFilter";
import { BlogsHeroSection } from "./BlogsHeroSection/BlogsHeroSection";

const BlogsHolder = () => {
  return (
    <>
      <BlogsHeroSection />
      <div className="flex justify-evenly">
        <BlogsFilter />
        <BlogsCards />
      </div>
    </>
  );
};

export { BlogsHolder };
