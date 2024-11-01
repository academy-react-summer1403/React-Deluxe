// import React, { useState } from "react";

// export const PricePicker = () => {
//   const [minValue, setMinValue] = useState(20);
//   const [maxValue, setMaxValue] = useState(80);

//   const handleMinChange = (event) => {
//     const value = Math.min(Number(event.target.value), maxValue - 1);
//     setMinValue(value);
//   };

//   const handleMaxChange = (event) => {
//     const value = Math.max(Number(event.target.value), minValue + 1);
//     setMaxValue(value);
//   };

//   return (
//     <div className="p-4">
//       <h3 className="text-lg font-bold mb-2">Select Price Range</h3>
//       <div className="relative">
//         <input
//           type="range"
//           min="0"
//           max="100"
//           value={minValue}
//           onChange={handleMinChange}
//           className="range range-xs bg-blue-500 absolute"
//         />
//         <input
//           type="range"
//           min="0"
//           max="100"
//           value={maxValue}
//           onChange={handleMaxChange}
//           className="range range-xs bg-green-500 absolute"
//         />
//       </div>
//       <div className="mt-20">
//         Selected Range: ${minValue} - ${maxValue}
//       </div>
//     </div>
//   );
// };

import React, { useState } from "react";
import { ConfigProvider, Slider, theme } from "antd";
// import "antd/dist/antd.css";

export const PricePicker = () => {
  const [priceRange, setPriceRange] = useState([0, 1000000000]); // Initial values for range

  return (
    <ConfigProvider
      theme={{
        components: {
          Slider: {
            // controlSize: "10",
            // handleColor: "#ec4899",
            // handleSize: 20,
            // railSize: 8,
            controlSize: 12, // Overall height of the slider
            dotActiveBorderColor: "#4a90e2",
            dotBorderColor: "#d9d9d9",
            dotSize: 8, // Size of dots on the track
            handleActiveColor: "#1976d2", // Border color when handle is active
            handleActiveOutlineColor: "rgba(25, 118, 210, 0.2)", // Outline color when active
            handleColor: "#2196f3", // Handle color
            handleLineWidth: 3, // Width of handle border
            handleLineWidthHover: 4,
            handleSize: 12,
            handleSizeHover: 14,
            railBg: "#b0bec5", // Background color of rail
            railHoverBg: "#90a4ae",
            railSize: 4, // Thickness of rail
            trackBg: "#42a5f5", // Background color of the selected track
            trackBgDisabled: "#cfd8dc",
            trackHoverBg: "#1e88e5",
          },
        },
      }}
    >
      <div>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2 dark:text-white">
          <span>از {priceRange[0]}</span>
          <span>تا {priceRange[1]}</span>
        </div>
        <div className="">
          <Slider
            range
            reverse
            min={0}
            max={1000000000}
            step={10000}
            defaultValue={priceRange}
            onChange={setPriceRange}

            // tooltip={{ open: true }}
          />
          {/* <div className="mt-4">
          Selected Range: ${priceRange[0]} - ${priceRange[1]}
        </div> */}
        </div>
      </div>
    </ConfigProvider>
  );
};
