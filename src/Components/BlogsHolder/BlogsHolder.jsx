import { useState } from "react";
import { BlogsCards } from "./BlogsCards/BlogsCards";
import { BlogsFilter } from "./BlogsFilter/BlogsFilter";
import { BlogsHeroSection } from "./BlogsHeroSection/BlogsHeroSection";

const BlogsHolder = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategoryBlog, setSelectedCategoryBlog] = useState("");

  console.log("selectedCategoryBlog", selectedCategoryBlog);

  return (
    <>
      <BlogsHeroSection />
      <div className="flex justify-evenly">
        <BlogsFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategoryBlog={selectedCategoryBlog}
          setSelectedCategoryBlog={setSelectedCategoryBlog}
        />
        <BlogsCards
          searchTerm={searchTerm}
          selectedCategoryBlog={selectedCategoryBlog}
        />
      </div>
    </>
  );
};

export { BlogsHolder };
