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
    <div className="flex flex-col md:flex-row h-screen justify-center items-center bg-white">
    
      {/* بخش فرم ثبت‌نام */}
      <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col justify-center items-center p-4 text-black">
        <Tabs
          activeKey={currentTab}
          onChange={setCurrentTab}
          className="w-full h-screen"
          tabBarStyle={{ marginBottom: "30px", backgroundColor: "#fff" }} // تب‌ها
          tabBarExtraContent={{ left: null, right: null }} // تنظیمات اضافی تب
        >
          {/* تب وارد کردن شماره همراه */}
          <TabPane tab="واردکردن شماره همراه" key="1" className="pb-6">
            <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg text-center"> {/* حداکثر عرض مناسب برای موبایل */}
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-right">خوش آمدید!</h2>
              <p className="text-xs sm:text-sm mb-4 w-full text-right text-gray-500">
                لطفا شماره همراه خود را وارد کنید تا کد تایید برای شما ارسال شود.
              </p>
              <label className="block text-xs sm:text-sm font-bold text-right mb-2 text-gray-700">
                شماره همراه
              </label>
              <Input
                className="rounded-3xl mb-4 w-full bg-white text-black"
                placeholder="شماره همراه خود را وارد کنید"
              />
              <Button
                type="primary"
                className="w-full h-10 bg-blue-500 text-white rounded-3xl font-bold"
                onClick={nextTab}
              >
                ارسال کد تایید
              </Button>
            </div>
          </TabPane>

          {/* تب تایید کد ارسال شده */}
          <TabPane tab="تایید کد ارسال شده" key="2" className="pb-6">
            <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg text-center">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-right">
                تایید کد ارسال شده
              </h2>
              <p className="text-xs sm:text-sm mb-4 w-full text-right text-gray-500">
                کد تایید ارسال‌شده به شماره همراه خود را وارد کنید.
              </p>
              <label className="block text-xs sm:text-sm font-bold text-right mb-2 text-gray-700">
                کد تایید
              </label>
              <Input
                className="rounded-3xl mb-4 w-full bg-white text-black"
                placeholder="کد تایید خود را وارد کنید"
              />
              <Button
                type="primary"
                className="w-full h-10 bg-blue-500 text-white rounded-3xl font-bold"
                onClick={nextTab}
              >
                تایید
              </Button>
            </div>
          </TabPane>

          {/* تب وارد کردن اطلاعات شخصی */}
          <TabPane tab="واردکردن اطلاعات شخصی" key="3">
            <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg text-center">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-right">
                وارد کردن اطلاعات شخصی
              </h2>
              <p className="text-xs sm:text-sm mb-4 w-full text-right text-gray-500">
                لطفا اطلاعات شخصی خود را وارد کنید.
              </p>
              <label className="block text-xs sm:text-sm font-bold text-right mb-2 text-gray-700">
                ایمیل
              </label>
              <Input
                className="rounded-3xl mb-4 w-full bg-white text-black"
                placeholder="ایمیل خود را وارد کنید"
              />
              <label className="block text-xs sm:text-sm font-bold text-right mb-2 text-gray-700">
                رمز عبور جدید
              </label>
              <Input
                className="rounded-3xl mb-4 w-full bg-white text-black"
                placeholder="رمز عبور جدید خود را وارد کنید"
              />
              <Button
                type="primary"
                className="w-full h-10 bg-blue-500 text-white rounded-3xl font-bold"
              >
                تایید
              </Button>
            </div>
          </TabPane>
        </Tabs>
      </div>

      {/* بخش سمت چپ ثابت */}
      <div className="hidden md:flex w-full lg:w-1/2">
        <LoginPanel />
      </div>
    </div>
  );
};

export { Register };
