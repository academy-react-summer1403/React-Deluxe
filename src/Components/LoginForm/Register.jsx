import React, { useState } from "react";
import { Button, Input, Tabs } from "antd";
import "antd/dist/reset.css";
import { LoginPanel } from "./LoginPanel";

const { TabPane } = Tabs;

const Register = ({ onBack }) => {
  const [currentTab, setCurrentTab] = useState("1");

  const nextTab = () => {
    setCurrentTab((prevTab) => (parseInt(prevTab) + 1).toString());
  };

  return (
    <div className="flex justify-center h-screen ">
      {/* بخش فرم ثبت‌نام */}
      <div className="w-1/2 flex flex-col justify-center items-center p-4">
        <Tabs
          activeKey={currentTab}
          onChange={setCurrentTab}
          className="w-full"
          tabBarStyle={{ marginBottom: "40px" }} // فاصله بین تب‌ها
        >
          {/* تب وارد کردن شماره همراه */}
          <TabPane tab="واردکردن شماره همراه" key="1" className="pb-6"> {/* افزایش فاصله با padding-bottom */}
            <div className="w-full max-w-md text-center">
              <h2 className="text-2xl font-bold mb-2 text-right">خوش آمدید!</h2>
              <p className="text-gray-500 text-xs mb-6 w-80 text-right">
                لطفا شماره همراه خود را وارد کنید تا کد تایید برای شما ارسال
                شود.
              </p>
              <label className="block text-xs font-bold text-right text-gray-700 mb-2">
                شماره همراه
              </label>
              <Input
                className="rounded-3xl mb-4 ml-28 w-80"
                placeholder="شماره همراه خود را وارد کنید"
              />
              <Button
                type="primary"
                className="ml-28 w-80 h-10 bg-blue-500 text-white rounded-3xl font-bold"
                onClick={nextTab}
              >
                ارسال کد تایید
              </Button>

              <div className="mt-4 w-80 font-bold">
                <p className="text-xs">
                  حساب کاربری ندارید؟{" "}
                  <a
                    href="#"
                    className="text-blue-500 hover:underline font-bold text-xs"
                    onClick={() => setShowRegister(true)}
                  >
                    ورود به حساب کاربری
                  </a>
                </p>
              </div>
              <div className="flex justify-center mt-8 w-80">
                <button
                  type="button"
                  className="w-[141px] text-xs border-solid border border-gray-300 text-blue-500 py-2 px-4 rounded-3xl h-8 font-bold"
                >
                  صفحه اصلی
                </button>
              </div>
            </div>
          </TabPane>

          {/* تب تایید کد ارسال شده */}
          <TabPane tab="تایید کد ارسال شده" key="2" className="pb-6"> {/* افزایش فاصله با padding-bottom */}
            <div className="w-full max-w-md text-center">
              <h2 className="text-2xl font-bold mb-2 text-right">
                تایید کد ارسال شده
              </h2>
              <p className="text-gray-500 text-xs mb-6 w-80 text-right">
                کد تایید ارسال‌شده به شماره همراه خود را وارد کنید.
              </p>
              <label className="block text-xs font-bold text-right text-gray-700 mb-2">
                کد تایید
              </label>
              <Input
                className="rounded-3xl mb-4 ml-28 w-80"
                placeholder="کد تایید خود را وارد کنید"
              />
              <Button
                type="primary"
                className="ml-28 w-80 h-10 bg-blue-500 text-white rounded-3xl font-bold"
                onClick={nextTab} // رفتن به تب بعدی
              >
                تایید
              </Button>
              <button
                type="button"
                className="w-[141px] text-xs border-solid border border-gray-300 text-blue-500 py-2 px-4 rounded-3xl h-8 font-bold mt-4 ml-24"
              >
                بازگشت
              </button>
            </div>
          </TabPane>

          {/* تب وارد کردن اطلاعات شخصی */}
          <TabPane tab="واردکردن اطلاعات شخصی" key="3">
            <div className="w-full max-w-md text-center">
              <h2 className="text-2xl font-bold mb-2 text-right">
                وارد کردن اطلاعات شخصی
              </h2>
              <p className="text-gray-500 text-xs mb-6 w-80 text-right">
                لطفا اطلاعات شخصی خود را وارد کنید.
              </p>
              <label className="block text-xs font-bold text-right text-gray-700 mb-2">
                ایمیل
              </label>
              <Input
                className="rounded-3xl mb-4 ml-28 w-80"
                placeholder="ایمیل خود را وارد کنید"
              />
              <label className="block text-xs font-bold text-right text-gray-700 mb-2">
                رمز عبور جدید
              </label>
              <Input
                className="rounded-3xl mb-4 ml-28 w-80"
                placeholder="رمز عبور جدید خود را وارد کنید"
              />
              <Button
                type="primary"
                className="ml-28 w-80 h-10 bg-blue-500 text-white rounded-3xl font-bold"
              >
                تایید
              </Button>
            </div>
          </TabPane>
        </Tabs>
      </div>

      {/* بخش سمت چپ ثابت */}
      <div className="hidden md:flex w-full bg-gray-100  h-full">
        <LoginPanel />
      </div>
    </div>
  );
};

export { Register };
