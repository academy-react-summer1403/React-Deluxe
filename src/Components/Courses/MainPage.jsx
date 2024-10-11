import { Filter } from "./Filter"; 
import { CategoryMenu } from "./CategoryMenu";
import { CourseList } from "./CourseList";
import { CourseHolder } from "./CoursesComponents/CourseHolder/CourseHolder";





const MainPage = () => {
    return (
      <div className="bg-white min-h-screen p-10">
        <CourseHolder />
        <div className="flex">
          {/* بخش فیلتر */}
          <div className="w-1/4 pr-4">
            <Filter />
          </div>
  
          {/* لیست دوره‌ها */}
          <div className="w-3/4">
            <CategoryMenu />
            <CourseList />
          </div>
        </div>
      </div>
    );
  };
  
  export  {MainPage};
  