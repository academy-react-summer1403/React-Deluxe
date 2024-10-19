import { Filter } from "./Filter"; 
import { CategoryMenu } from "./CategoryMenu";
import { CourseList } from "./CourseList";
import { CourseHolder } from "./CoursesComponents/CourseHolder/CourseHolder";
import { Pagination } from "./PageInation";



const MainPage = () => {
    return (
      <div className="bg-white  w-full min-h-screen p-10  relative dark:bg-indigo-950">
        <CourseHolder />
        <div className="flex">
          <div className="w-1/4 pr-4">
            <Filter />
          </div>
  
          <div className="w-3/4">
            <CategoryMenu />
            <CourseList />
          </div>
        </div>
        <Pagination />
      </div>
    );
  };
  
  export  {MainPage};
  