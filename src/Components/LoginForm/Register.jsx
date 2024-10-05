import React, { useState } from "react";
import { Button, Input, Tabs } from "antd";
import "antd/dist/reset.css";
import { LoginPanel } from "./LoginPanel"; // فرض بر اینکه LoginPanel موجود است

const { TabPane } = Tabs;

const Register = ({ onBack }) => {
  const [currentTab, setCurrentTab] = useState("1");

  const nextTab = () => {
    setCurrentTab((prevTab) => (parseInt(prevTab) + 1).toString());
  };

  return (
    <div className="flex justify-center h-screen">
      {/* بخش فرم ثبت‌نام */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10">
        <Tabs activeKey={currentTab} onChange={setCurrentTab} className="w-full">
          {/* تب وارد کردن شماره همراه */}
          <TabPane tab="واردکردن شماره همراه" key="1">
            <div className="w-full max-w-md text-center">
              <h2 className="text-2xl font-bold mb-2 text-right">خوش آمدید!</h2>
              <p className="text-gray-500 text-xs mb-6 w-80 text-right">
                لطفا شماره همراه خود را وارد کنید تا کد تایید برای شما ارسال شود.
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
                className=" ml-28 w-80 h-10 bg-blue-500 text-white rounded-3xl font-bold"
                onClick={nextTab} // رفتن به تب بعدی
              >
                ارسال کد تایید
              </Button>
              <p className="text-xs mt-4 text-blue-500">
                حساب کاربری دارید؟ <a href="#" onClick={onBack}>ورود به حساب کاربری</a>
              </p>
              <p className="text-xs mt-2">
                <a href="#">صفحه اصلی</a>
              </p>
            </div>
          </TabPane>

          {/* تب تایید کد ارسال شده */}
          <TabPane tab="تایید کد ارسال شده" key="2">
            <div className="w-full max-w-md text-center">
              <h2 className="text-2xl font-bold mb-2 text-right">تایید کد ارسال شده</h2>
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
                className=" ml-28 w-80 h-10 bg-blue-500 text-white rounded-3xl font-bold"
                onClick={nextTab} // رفتن به تب بعدی
              >
                تایید
              </Button>
              <p className="text-xs mt-2">
                <a href="#">ارسال مجدد کد</a>
              </p>
            </div>
          </TabPane>

          {/* تب وارد کردن اطلاعات شخصی */}
          <TabPane tab="واردکردن اطلاعات شخصی" key="3">
            <div className="w-full max-w-md text-center">
              <h2 className="text-2xl font-bold mb-2 text-right">اطلاعات شخصی</h2>
              <p className="text-gray-500 text-xs mb-6 w-80 text-right">
                لطفا اطلاعات شخصی خود را وارد کنید.
              </p>
              <label className="block text-xs font-bold text-right text-gray-700 mb-2">
                نام و نام خانوادگی
              </label>
              <Input
                className="rounded-3xl mb-4 ml-28 w-80"
                placeholder="نام و نام خانوادگی"
              />
              <label className="block text-xs font-bold text-right text-gray-700 mb-2">
                ایمیل
              </label>
              <Input
                className="rounded-3xl mb-4 ml-28 w-80"
                placeholder="ایمیل خود را وارد کنید"
              />
              <Button
                type="primary"
                className=" ml-28 w-80 h-10 bg-blue-500 text-white rounded-3xl font-bold"
              >
                ثبت‌نام
              </Button>
            </div>
          </TabPane>
        </Tabs>
      </div>

      {/* بخش سمت چپ ثابت */}
      <LoginPanel />
    </div>
  );
};

export { Register };
