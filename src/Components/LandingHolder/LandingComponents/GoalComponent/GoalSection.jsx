import React from "react";
import GoalItems from "./GoalItems";

const GoalsSection = () => {
  const Goals = [
    {
      title: "استعدادیابی",
      description:
        "یافتن رگه های علاقه و استعداد در دوره های پایلوت استعدادیابی صرف نظر از سن ، رشته تحصیلی ، جغرافیا و جنسیت و ...",
      url: "https://s3-alpha-sig.figma.com/img/812e/3f2b/59637bb62d5a61eff6a55e2e0425588a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Is0u0Z7ZCgXAIxAIVyJ7yTeuIxirviV6zlc~6zFLnX3z9qVfRCtuDtqHrqqIt1QxVhqxfLO9UGjyF4lomJewkuXPkcLQnGtBLhaSZjVpSZ5Nj8BLPURaNnYQvLym46a2hxOiVCQn~j8aSZ-VBAlKeu0KB3wcw6ai8t~aUX8CWLS1s5ZlzKh5S5beWpiwaLIIlXCYaLB3Mp-~5FFJDEJkFHa1M7VwNLlMEVU9xFQZx2jF6J6tbO6OfPevQKnPlRym39lF8V1N5BQYd1Od~zZE8ZPAP8m8Mzu6w6kkNwQYGVmB0hT0rtmwy6nCyTGBZrV0QlN-XECagcu5X~Qm2wMmSQ__",
    },
    {
      title: " راهنمایی و ایجاد انگیزه",
      description:
        "آشنایی با پشته ای تکنولوژیک از زبان های کدنویسی با نگاهی عمل محور برای تحریک ذهنیت خلاق در طول فرآیند آموزش",
      url: "https://s3-alpha-sig.figma.com/img/6579/2f86/874e15552d108f3b1ee3fc07bf7e4100?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nCYbd6~KQ2EEmHlyjMrRXB7EICQ5fA6DwF8y9nhr0qfyuZpF8e530H4nQPJ9pQeC5Og9JNXSu569Bp4Q-VUgtIDKFX8jsUuxAe3Vm6Niy6b3WZ-WpgNMJidzId6xR3QORXeNSZzDt~pR6cpnftHC5vKhkmGocuk5UH08293tvskdQZOwnlWOi1xwQSxuG8wRMTAj-NgBbbJVuI4YxUoC3esAsNqxnnCV0kZ64aVw9MFPD13vy19ONnCg82Ot5f7NP1p9EqXqUEqDGCV57twloKs0M8h5~BkrOyPojj9QPSrkm6d2zi1GrosoLA32H13m7HdxTBLFlNX~CMdeqv-0fQ__",
    },
    {
      title: "آموزش‌های تخصصی",
      description:
        "کارگاه های تخصصی و تکمیلی برای کار با پلتفرم های بازاری مورد اقبال و برگزاری تورنمت های تیمی رقابتی برای تقویت روحیه کار تیمی و ...",
      url: "https://s3-alpha-sig.figma.com/img/fd3a/2d28/c2792e78f9dd944035bc00c11717c509?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X2YTuBGzUPG~UGd9oEuGaiidxB9MkvReglvqg~HCi08bgoduiO2p6xcO08p3EMs29SgpjSGM3CwCIubTN-kaRRrEZPRIFydGyE4IMG8TnJ4Gr~sWu92euNc90V6g18hqO1rL6GTJBhjp0dvk4KfxqX2qzSyN2~bDZOOEnvDLfMHNZsUTKyoqnIsvcmDp6r7nln0f8KE8ge1vvs2rzjFeMCuJy07LRj6my09zZxlmZplKT6c0aIQ6QRmUiZpJq-77Y22vBRxRuyzCOMlX2VmwHynAAKK2dsbK1W2dIibMLdbGada7FQ8Jcb0rTg3zIaCHgEsn2DKUU4W2niIvj5nIpg__",
    },
    {
      title: "آماده سازی برای بازار کار",
      description:
        "جلسات تنظیم cv برای ساخت‌واشتراک رزومه فنی دربسترهای داخلی و بین المللی کاریابی و آماده سازی برای شرکت ها",
      url: "https://s3-alpha-sig.figma.com/img/38b6/b168/81ec47ad8de04096a5cd6602151372ca?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BciMFJMa01FEDEWZCpkqulE0ZTGy62XIPcmOwjHVKjTPUdWF8rpgtY75vXJRJ3xTXR7z8VwW4fSj56vXsDu9AXBdATUIt2sSJlFNtFr4S9fGCOO4RmY0nA6glM2wwiMHL7XZKqabXJQQQjtGlut1fsLTnSpiCyShgtkvgDBYhMCHvrge6ovW4aGhBdiQxH20vrMStX5KDA7rsbnewwduFS7JUQ89efc1u75XTxwBGwt-c5cZcuVa-xgg~62rwpz88n3zpjb7QdKBR1GasbP-IIiqmE9NzP3H53BVBRNjpjGWG0YKqgeqOCq-Eb-oPY8wzUXIW0iEdR3NHhsoxHVo7g__",
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
