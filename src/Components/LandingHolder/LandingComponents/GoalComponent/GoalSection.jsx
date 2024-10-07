import React from "react";
import GoalItems from "./GoalItems";

const GoalsSection = () => {
  const Goals = [
    {
      title: "استعدادیابی",
      description:
        "یافتن رگه های علاقه و استعداد در دوره های پایلوت استعدادیابی صرف نظر از سن ، رشته تحصیلی ، جغرافیا و جنسیت و ...",
    },
    {
      title: " راهنمایی و ایجاد انگیزه",
      description:
        "آشنایی با پشته ای تکنولوژیک از زبان های کدنویسی با نگاهی عمل محور برای تحریک ذهنیت خلاق در طول فرآیند آموزش",
    },
    {
      title: "آموزش‌های تخصصی",
      description:
        "کارگاه های تخصصی و تکمیلی برای کار با پلتفرم های بازاری مورد اقبال و برگزاری تورنمت های تیمی رقابتی برای تقویت روحیه کار تیمی و ...",
    },
    {
      title: "آماده سازی برای بازار کار",
      description:
        "جلسات تنظیم cv برای ساخت‌واشتراک رزومه فنی دربسترهای داخلی و بین المللی کاریابی و آماده سازی برای شرکت ها",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">اهداف ما در آکادمی</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {Goals.map((Item, Index) => (
            <GoalItems key={Index} Item={Item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { GoalsSection };
