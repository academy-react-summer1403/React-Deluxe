import React from "react";
import GoalItems from "./GoalItems";
import Goal1 from "../../../../assets/LandingGoals/Goal1.png";
import Goal2 from "../../../../assets/LandingGoals/Goal2.png";
import Goal3 from "../../../../assets/LandingGoals/Goal3.png";
import Goal4 from "../../../../assets/LandingGoals/Goal4.png";

const GoalsSection = () => {
  const Goals = [
    {
      title: "استعدادیابی",
      description:
        "یافتن رگه های علاقه و استعداد در دوره های پایلوت استعدادیابی صرف نظر از سن ، رشته تحصیلی ، جغرافیا و جنسیت و ...",
      url: Goal1,
    },
    {
      title: " راهنمایی و ایجاد انگیزه",
      description:
        "آشنایی با پشته ای تکنولوژیک از زبان های کدنویسی با نگاهی عمل محور برای تحریک ذهنیت خلاق در طول فرآیند آموزش",
      url: Goal2,
    },
    {
      title: "آموزش‌های تخصصی",
      description:
        "کارگاه های تخصصی و تکمیلی برای کار با پلتفرم های بازاری مورد اقبال و برگزاری تورنمت های تیمی رقابتی برای تقویت روحیه کار تیمی و ...",
      url: Goal3,
    },
    {
      title: "آماده سازی برای بازار کار",
      description:
        "جلسات تنظیم cv برای ساخت‌واشتراک رزومه فنی دربسترهای داخلی و بین المللی کاریابی و آماده سازی برای شرکت ها",
      url: Goal4,
    },
  ];

  return (
    <section className=" py-12">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6 dark:text-white">
          اهداف ما در آکادمی
        </h3>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1  place-items-center md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {Goals.map((Item, Index) => (
            <GoalItems key={Index} Item={Item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { GoalsSection };
