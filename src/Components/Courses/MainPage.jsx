import { Filter } from "./Filter"; 
import { CourseList } from "./CourseList";
import { CourseHolder } from "./CoursesComponents/CourseHolder/CourseHolder";



const MainPage = () => {
    return (
      <>
        <CourseHolder />
        <div className="flex justify-evenly">
        <Filter />
        <CourseList />
      </div>  
      </>
    );
  };
  
  export  {MainPage};



  
  