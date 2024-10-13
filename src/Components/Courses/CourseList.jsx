// import React from "react";
import { CourseCard } from "./CourseCard";

const CourseList = ({ category }) => {
  const courses = [
    {
      title: "دوره جاوااسکریپت",
      category: "برنامه نویسی",
      level: "پیشرفته",
      price: "1,000,000",
      teacher: "محمدحسین بحرالعلوم",
      popularity: 5,
      date: new Date(2023, 1, 15),
      background: "#FFE4B5",
      image:
        "https://s3-alpha-sig.figma.com/img/6405/b314/68db8ea561a27064e67d06d024404030?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WIX7f3Fe52-Shpu4td9BYj9RSTp2IA1E0Ig9oPqYFRFWiJ7g0HTF~RRI69jh1bUhXqb3EDOX0KA~rvdKjK6D4-rfZBJpyGvLwsvRUeJkZiqHOZO7KizDbHpWaSFJYN-lbTC763Mccoy0-C2Bl4y8qlVbAPfdu4m8RJp1RjNQbpT0VsiF0Nusk7g3WoRjyL7FsPsiqp9aCh9yaXRBkMLn1WPh1DJvFKCLIHwrA9C8ocPV5gfLmGIID4nz4O9b4CcVANBTgs210laNfHaHY7ImPr5tBv~d-Qj-3ig5ji9v~~2mbtJBQBZfcKkfxQD25FavfcJPUVvoMpTJX3EMsv6hgA__",
    },
    {
      title: "دوره فیگما",
      category: "طراحی",
      level: "مقدماتی",
      price: "450,000",
      teacher: "محمد شفیعی‌پور",
      popularity: 4,
      date: new Date(2023, 5, 10),
      background:"#FFB7C5",
      
      image:
        "https://s3-alpha-sig.figma.com/img/72eb/0bda/c649ce20dfb0409d36134908c7d16a53?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTX-nRHg93a6TXcuTScT80hAeNu0VZeV5vMYLG-0~urRRr6LsSKNMlWdAfodQmm6J0dq-TPtvE4niMqkf1pnoxTPlAVpyNu-aF58-0c5TvDG4AuxLXAEGG0TYthmYSa5LkylYkEeL2XQcHJpMYtVE79UeBqc7cb~1bHuB-yWirNlcqqrWu0Nv8MXrUylDCPfgavysRxSoqODwqfBLBjri-TfAcrDqobkE-H30st5~ulh3PJjh~Wld46oa968aC6uj~vflXQPEeIDmEDXf~aT~DDTeqJPu68sD00W7MHbI3nVSz423ftucwaLNZlv4zKBZINmKv0TjeB-ZZgnmPmLZQ__",
    },
    {
      title: "دوره پیشرفته React",
      category: "برنامه نویسی",
      level: "پیشرفته",
      price: "1,200,000",
      teacher: "علی احمدی",
      popularity: 3,
      date: new Date(2023, 3, 20),
      background:"#FF8C00",
      image:
        "https://s3-alpha-sig.figma.com/img/fc71/0ef5/0b850c99f94ca19273ee7e343959a869?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tn92qFBUixxyZXwoDdCFdngZoyld1IodHyagJyZT~vPC5NUAb7pXV9jdxTb4haaDJHXngYKsE9f09WEdkVQk~8oZ3TZo5vA5gQ~LwBX668jcOlrNNOwpBJhTH8m74ouMcIlBUdaAfAcgwlg8tLSy6f8drKZHhAWO0AkiG6RNYwnlJI4FT3YbSfRRHZ0OVzd-lknq7BHebGGgZpJxRUTvxRSgSleqBad6MFPncGllv9f39goiGGwU86ee-miq5X4Q4l2alDmm-WBxTyI1yHv4Earhqn8kUnbuahFdv3AYf0WSG8dLkpX~E5ZTdMXxT1UMkpa0z9PxbBtcLiM7noDdKg__",
    },
    {
      title: "دوره طراحی UX",
      category: "طراحی",
      level: "مقدماتی",
      price: "300,000",
      teacher: "فاطمه نیکوکار",
      popularity: 5,
      date: new Date(2024, 0, 5),
      background:"#FFB7C5",

      image:
      "https://s3-alpha-sig.figma.com/img/72eb/0bda/c649ce20dfb0409d36134908c7d16a53?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTX-nRHg93a6TXcuTScT80hAeNu0VZeV5vMYLG-0~urRRr6LsSKNMlWdAfodQmm6J0dq-TPtvE4niMqkf1pnoxTPlAVpyNu-aF58-0c5TvDG4AuxLXAEGG0TYthmYSa5LkylYkEeL2XQcHJpMYtVE79UeBqc7cb~1bHuB-yWirNlcqqrWu0Nv8MXrUylDCPfgavysRxSoqODwqfBLBjri-TfAcrDqobkE-H30st5~ulh3PJjh~Wld46oa968aC6uj~vflXQPEeIDmEDXf~aT~DDTeqJPu68sD00W7MHbI3nVSz423ftucwaLNZlv4zKBZINmKv0TjeB-ZZgnmPmLZQ__",

    },
    {
      title: "دوره گرافیک",
      category: "طراحی",
      level: "متوسط",
      price: "700,000",
      teacher: "حسین نادری",
      popularity: 2,
      date: new Date(2023, 8, 15),
      background:"#FF8C00",
      image:
        "https://s3-alpha-sig.figma.com/img/6405/b314/68db8ea561a27064e67d06d024404030?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WIX7f3Fe52-Shpu4td9BYj9RSTp2IA1E0Ig9oPqYFRFWiJ7g0HTF~RRI69jh1bUhXqb3EDOX0KA~rvdKjK6D4-rfZBJpyGvLwsvRUeJkZiqHOZO7KizDbHpWaSFJYN-lbTC763Mccoy0-C2Bl4y8qlVbAPfdu4m8RJp1RjNQbpT0VsiF0Nusk7g3WoRjyL7FsPsiqp9aCh9yaXRBkMLn1WPh1DJvFKCLIHwrA9C8ocPV5gfLmGIID4nz4O9b4CcVANBTgs210laNfHaHY7ImPr5tBv~d-Qj-3ig5ji9v~~2mbtJBQBZfcKkfxQD25FavfcJPUVvoMpTJX3EMsv6hgA__",
    },
    {
      title: "دوره گرافیک",
      category: "طراحی",
      level: "متوسط",
      price: "700,000",
      teacher: "حسین نادری",
      popularity: 2,
      background: "#FFE4B5",
      date: new Date(2023, 8, 15),
      image:
      "https://s3-alpha-sig.figma.com/img/6405/b314/68db8ea561a27064e67d06d024404030?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WIX7f3Fe52-Shpu4td9BYj9RSTp2IA1E0Ig9oPqYFRFWiJ7g0HTF~RRI69jh1bUhXqb3EDOX0KA~rvdKjK6D4-rfZBJpyGvLwsvRUeJkZiqHOZO7KizDbHpWaSFJYN-lbTC763Mccoy0-C2Bl4y8qlVbAPfdu4m8RJp1RjNQbpT0VsiF0Nusk7g3WoRjyL7FsPsiqp9aCh9yaXRBkMLn1WPh1DJvFKCLIHwrA9C8ocPV5gfLmGIID4nz4O9b4CcVANBTgs210laNfHaHY7ImPr5tBv~d-Qj-3ig5ji9v~~2mbtJBQBZfcKkfxQD25FavfcJPUVvoMpTJX3EMsv6hgA__",
    },
    {
      title: "دوره گرافیک",
      category: "طراحی",
      level: "متوسط",
      price: "700,000",
      teacher: "حسین نادری",
      popularity: 2,
      date: new Date(2023, 8, 15),
      background: "#FFE4B5",
      image:
        "https://s3-alpha-sig.figma.com/img/6405/b314/68db8ea561a27064e67d06d024404030?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WIX7f3Fe52-Shpu4td9BYj9RSTp2IA1E0Ig9oPqYFRFWiJ7g0HTF~RRI69jh1bUhXqb3EDOX0KA~rvdKjK6D4-rfZBJpyGvLwsvRUeJkZiqHOZO7KizDbHpWaSFJYN-lbTC763Mccoy0-C2Bl4y8qlVbAPfdu4m8RJp1RjNQbpT0VsiF0Nusk7g3WoRjyL7FsPsiqp9aCh9yaXRBkMLn1WPh1DJvFKCLIHwrA9C8ocPV5gfLmGIID4nz4O9b4CcVANBTgs210laNfHaHY7ImPr5tBv~d-Qj-3ig5ji9v~~2mbtJBQBZfcKkfxQD25FavfcJPUVvoMpTJX3EMsv6hgA__",
    },
    {
      title: "دوره گرافیک",
      category: "طراحی",
      level: "متوسط",
      price: "700,000",
      teacher: "حسین نادری",
      popularity: 2,
      date: new Date(2023, 8, 15),
      background:"#FFB7C5",
      
      image:
      "https://s3-alpha-sig.figma.com/img/fc71/0ef5/0b850c99f94ca19273ee7e343959a869?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tn92qFBUixxyZXwoDdCFdngZoyld1IodHyagJyZT~vPC5NUAb7pXV9jdxTb4haaDJHXngYKsE9f09WEdkVQk~8oZ3TZo5vA5gQ~LwBX668jcOlrNNOwpBJhTH8m74ouMcIlBUdaAfAcgwlg8tLSy6f8drKZHhAWO0AkiG6RNYwnlJI4FT3YbSfRRHZ0OVzd-lknq7BHebGGgZpJxRUTvxRSgSleqBad6MFPncGllv9f39goiGGwU86ee-miq5X4Q4l2alDmm-WBxTyI1yHv4Earhqn8kUnbuahFdv3AYf0WSG8dLkpX~E5ZTdMXxT1UMkpa0z9PxbBtcLiM7noDdKg__",

    },
    {
      title: "دوره گرافیک",
      category: "طراحی",
      level: "متوسط",
      price: "700,000",
      teacher: "حسین نادری",
      popularity: 2,
      date: new Date(2023, 8, 15),
      background:"#FF8C00",
      
      image:
        "https://s3-alpha-sig.figma.com/img/6405/b314/68db8ea561a27064e67d06d024404030?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WIX7f3Fe52-Shpu4td9BYj9RSTp2IA1E0Ig9oPqYFRFWiJ7g0HTF~RRI69jh1bUhXqb3EDOX0KA~rvdKjK6D4-rfZBJpyGvLwsvRUeJkZiqHOZO7KizDbHpWaSFJYN-lbTC763Mccoy0-C2Bl4y8qlVbAPfdu4m8RJp1RjNQbpT0VsiF0Nusk7g3WoRjyL7FsPsiqp9aCh9yaXRBkMLn1WPh1DJvFKCLIHwrA9C8ocPV5gfLmGIID4nz4O9b4CcVANBTgs210laNfHaHY7ImPr5tBv~d-Qj-3ig5ji9v~~2mbtJBQBZfcKkfxQD25FavfcJPUVvoMpTJX3EMsv6hgA__",
    },
    {
      title: "دوره گرافیک",
      category: "طراحی",
      level: "متوسط",
      price: "700,000",
      teacher: "حسین نادری",
      popularity: 2,
      date: new Date(2023, 8, 15),
      background:"#FF8C00",
      image:
        "https://s3-alpha-sig.figma.com/img/6405/b314/68db8ea561a27064e67d06d024404030?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WIX7f3Fe52-Shpu4td9BYj9RSTp2IA1E0Ig9oPqYFRFWiJ7g0HTF~RRI69jh1bUhXqb3EDOX0KA~rvdKjK6D4-rfZBJpyGvLwsvRUeJkZiqHOZO7KizDbHpWaSFJYN-lbTC763Mccoy0-C2Bl4y8qlVbAPfdu4m8RJp1RjNQbpT0VsiF0Nusk7g3WoRjyL7FsPsiqp9aCh9yaXRBkMLn1WPh1DJvFKCLIHwrA9C8ocPV5gfLmGIID4nz4O9b4CcVANBTgs210laNfHaHY7ImPr5tBv~d-Qj-3ig5ji9v~~2mbtJBQBZfcKkfxQD25FavfcJPUVvoMpTJX3EMsv6hgA__",
    },
    {
      title: "دوره گرافیک",
      category: "طراحی",
      level: "متوسط",
      price: "700,000",
      teacher: "حسین نادری",
      popularity: 2,
      date: new Date(2023, 8, 15),
      background: "#FFE4B5",
      image:
        "https://s3-alpha-sig.figma.com/img/6405/b314/68db8ea561a27064e67d06d024404030?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WIX7f3Fe52-Shpu4td9BYj9RSTp2IA1E0Ig9oPqYFRFWiJ7g0HTF~RRI69jh1bUhXqb3EDOX0KA~rvdKjK6D4-rfZBJpyGvLwsvRUeJkZiqHOZO7KizDbHpWaSFJYN-lbTC763Mccoy0-C2Bl4y8qlVbAPfdu4m8RJp1RjNQbpT0VsiF0Nusk7g3WoRjyL7FsPsiqp9aCh9yaXRBkMLn1WPh1DJvFKCLIHwrA9C8ocPV5gfLmGIID4nz4O9b4CcVANBTgs210laNfHaHY7ImPr5tBv~d-Qj-3ig5ji9v~~2mbtJBQBZfcKkfxQD25FavfcJPUVvoMpTJX3EMsv6hgA__",
    },
    {
      title: "دوره گرافیک",
      category: "طراحی",
      level: "متوسط",
      price: "700,000",
      teacher: "حسین نادری",
      popularity: 2,
      date: new Date(2023, 8, 15),
      background:"#FFB7C5",

      image:
      "https://s3-alpha-sig.figma.com/img/fc71/0ef5/0b850c99f94ca19273ee7e343959a869?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tn92qFBUixxyZXwoDdCFdngZoyld1IodHyagJyZT~vPC5NUAb7pXV9jdxTb4haaDJHXngYKsE9f09WEdkVQk~8oZ3TZo5vA5gQ~LwBX668jcOlrNNOwpBJhTH8m74ouMcIlBUdaAfAcgwlg8tLSy6f8drKZHhAWO0AkiG6RNYwnlJI4FT3YbSfRRHZ0OVzd-lknq7BHebGGgZpJxRUTvxRSgSleqBad6MFPncGllv9f39goiGGwU86ee-miq5X4Q4l2alDmm-WBxTyI1yHv4Earhqn8kUnbuahFdv3AYf0WSG8dLkpX~E5ZTdMXxT1UMkpa0z9PxbBtcLiM7noDdKg__",
      

    },
  ];

  const filteredCourses = courses.filter((course) => {
    switch (category) {
      case "جدیدترین":
        return true;
      case "محبوب‌ترین":
        return course.popularity >= 4;
      case "گران‌ترین":
        return parseInt(course.price.replace(/,/g, "")) > 500000;
      case "ارزان‌ترین":
        return parseInt(course.price.replace(/,/g, "")) <= 500000;
      default:
        return false;
    }
  });

  const sortedCourses =
    category === "جدیدترین"
      ? filteredCourses.sort((a, b) => b.date - a.date)
      : filteredCourses;

  return (
    <div className="flex flex-wrap -mx-3">
      {sortedCourses.map((course, index) => (
        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-6">
          <CourseCard {...course} />
        </div>
      ))}
    </div>
  );
};

export { CourseList };
