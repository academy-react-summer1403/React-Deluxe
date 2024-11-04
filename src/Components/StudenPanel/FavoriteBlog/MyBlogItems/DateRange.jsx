import React, { useState } from "react";
// import DatePicker from "react-multi-date-picker";
// import RangePicker from "react-multi-date-picker/plugins/range_picker";
// import { CalendarOutlined } from "@ant-design/icons";

const DateRangePicker = () => {
  //   const [value, setValue] = useState([null, null]);

  //   return (
  //     <div className="flex items-center">
  //       <DatePicker
  //         value={value}
  //         onChange={setValue}
  //         plugins={[<RangePicker position="bottom" />]}
  //         placeholder="Select start date - end date"
  //         className="rmdp-input bg-white text-left p-2 w-full rounded-md"
  //       />
  //       <div className="ml-2">
  //         <CalendarOutlined className="text-gray-500" />
  //       </div>
  //     </div>
  //   );

  return (
    <input
      type="date"
      placeholder="29 اردیبهشت 1403 - 5 خرداد 1403"
      className=" py-2 px-3 text-xs w-52 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-100 rounded-lg outline-none border-none"
    />
  );
};

export { DateRangePicker };
