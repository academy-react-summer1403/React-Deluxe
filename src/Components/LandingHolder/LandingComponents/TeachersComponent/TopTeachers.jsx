import { useState, useEffect } from "react";
import { GetTopTeachersByPg } from "../../../../core/services/api/TopTeachers.api";
import { digitsEnToFa } from "@persian-tools/persian-tools";

// const teachersData = [
//   {
//     name: "محمدحسین بحرالعلومی",
//     rating: "۴.۸",
//     icon: "https://s3-alpha-sig.figma.com/img/8674/d026/c723eadbfcb7cda5e0af0f9458215ee5?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PJ83yR2gCBKsnLf6iJsHTVmNkInyNpmnsdqoxLkC7CDhj96jhz9O3eoPkUmg4lc5dpKPx3VcloalpJViKRWDfvoxVoRX31qvDwJKr~uLpF5hW82fS25BTNIlbHVGxpOF8rZd-Yy5NAKqwtvd0UQnkD4AmBlAsTIU5U1CSScEcbjoSreD-vM-ss-StaO8CHhVuXJjzTvDOmtBqHAmyRIeBE6B3kpluydN4ILC8HDCn-AAbRPIWiQvxOcw2nKGlgwOlJdas5wZE9bxnXrB4K6CDfGWpiwW-2Bsb6rfKTkxkrYtUiwdAfDwJAYMMNzPlZ2pGEcJjPMOEL1TQfrB3GEf3A__",
//     top: "xl:bottom-10",
//     order: "xl:order-2",
//   },
//   {
//     name: "محمدحسین خلیل پور",
//     rating: "۴.۷",
//     icon: "https://s3-alpha-sig.figma.com/img/428b/a15a/ee52e2ab930df632af3378eee6f693c8?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H9V6EWhzOyE2jQvmCFIewyJ01PXCU-Wnb-tDxHpuHFc-q8fvqsLtwf0x0-I7H41MvI1k9z47Mp7Bl421xeFcd0uI9m3TvffUOGCmz6KmgMoTvw0J3t4~rHpcHEZtjAzlFkBBRQ2VU6IRJcvhUPG-J9kt6zHks6pODVS8Ilt83BCSd3h-Z~f3fvyvcOucMbcmUyc1B~wjRHZKV9HEBj4ZJUJPILk-h1T6qDfM35amSSnBiSOdWRCKQgXMU~GpbwXuDziOQR2jHgDfJHtecy4Ku8GE5ed9i-PI1D26Xu8NgCbNQyTSW2yBXjYBfwxX0b5ZDK~s7WM2HywKiZ6fYlM5VQ__",
//     order: "xl:order-1",
//   },
//   {
//     name: "محسن اسفندیاری",
//     rating: "۴.۲",
//     icon: "https://s3-alpha-sig.figma.com/img/0e15/42e6/45575eb17750a8e42a65ed6e04ea46dc?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MUqlISwIdV0D2Y~s1Cma29OBmSDyEW61DsUnErBb3ASpPP4b1018b9P81Y8CzN7v8jqN8chOK7lsq8FnNelvfRLxZSCyoaghtRAyDY6x2WlBZlKz4~pW1~ZFtUZceEKu1LYSlEG3UWnHmhP7nOCo07GmrHVEL5tj1Cspc-ixPxU1WHWj1bODGWlL61lZsxT2gdAU~~vDYUMhUPetLC~XIDEwGE0YEWK3y45py~GKOflhn6xpkRrsMEwRZfAOoATXpFOY3UWsxBYSvoxtyhbVsHkx-Hi7dwqyov0liqYVCHHCh01y9~e3XW6vk3ZrvnYrxm4OM2xC7A7EoyG2f-d4rg__",
//     order: "order-3",
//   },
// ];

const TopTeachers = () => {
  const [TopTeachers, setTopTeachers] = useState([]);

  const getTopTeachers = async () => {
    try {
      const result = await GetTopTeachersByPg();

      setTopTeachers(result);

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTopTeachers();
  }, []);

  return (
    <section
      data-aos="fade-in"
      className="py-16 bg-gray-950 dark:bg-slate-800 mb-1 rounded-3xl  h-auto place-items-center "
    >
      <div className="container mx-auto text-center">
        <div className="flex flex-col xl:flex-row justify-between ">
          <div
            data-aos="slide-left"
            className="flex flex-col items-start text-justify  xl:w-2/5 mx-10"
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              اساتید برتر هفته آکادمی
            </h2>
            <p className="text-white mb-6">
              در هفته جاری، اکادمی برنامه‌نویسی ما مفتخر است که از اساتید برتر
              خود تقدیر کند. این اساتید با دانش عمیق و تجربه گسترده خود در
              زمینه‌های مختلف برنامه‌نویسی، نه تنها به ارتقاء مهارت‌های
              دانشجویان کمک کرده‌اند، بلکه با برگزاری کارگاه‌ها و جلسات مشاوره،
              فضایی پویا و انگیزشی را برای یادگیری فراهم آورده‌اند.
            </p>
            <button className="bg-blue-500 text-white px-5 py-1.5 rounded-full my-8">
              {" "}
              صفحه اساتید
            </button>
          </div>
          <div
            data-aos="slide-right"
            className="bg-gray-900 dark:bg-slate-600 rounded-2xl flex items-center justify-center  py-10 mx-10 h-80 flex-1 xl:w-3/5"
          >
            <div className="flex flex-col md:flex-row ">
              {TopTeachers.slice(0, 3).map((teacher, index) => (
                <div
                  key={index}
                  className={`text-center flex flex-col items-center pb-10  min-w-[250px] max-w-[350px] relative ${teacher.order}  ${teacher.top}`}
                >
                  <div className=" rounded-full overflow-hidden size-20">
                    <img
                      src={teacher.pictureAddress}
                      alt=""
                      className="h-24 mx-auto mb-4 rounded-full"
                    />
                  </div>
                  <h3 className="text-l text-white  font-semibold mb-2 pt-8">
                    {teacher.fullName}
                  </h3>
                  <p className="dark:text-slate-300  text-gray-500">
                    رتبه: {digitsEnToFa(teacher.courseCounts)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { TopTeachers };
