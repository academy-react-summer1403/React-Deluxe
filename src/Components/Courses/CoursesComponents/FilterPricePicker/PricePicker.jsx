import React, { useState } from "react";
import { ConfigProvider, Slider, theme } from "antd";
// import "antd/dist/antd.css";
import { formatCost } from "./../../../../core/utils/CostEntoFa+Commas+Split.utils";

export const PricePicker = ({ priceRange, setPriceRange }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Slider: {
            controlSize: 12,
            dotActiveBorderColor: "#4a90e2",
            dotBorderColor: "#d9d9d9",
            dotSize: 8,
            handleActiveColor: "#1976d2",
            handleActiveOutlineColor: "rgba(25, 118, 210, 0.2)",
            handleColor: "#2196f3",
            handleLineWidth: 3,
            handleLineWidthHover: 4,
            handleSize: 12,
            handleSizeHover: 14,
            railBg: "#b0bec5",
            railHoverBg: "#90a4ae",
            railSize: 4,
            trackBg: "#42a5f5",
            trackBgDisabled: "#cfd8dc",
            trackHoverBg: "#1e88e5",
          },
        },
      }}
    >
      <div>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2 dark:text-white">
          <span>از {formatCost(priceRange[0])}</span>
          <span>تا {formatCost(priceRange[1])}</span>
        </div>
        <div className="">
          <Slider
            range
            reverse
            min={0}
            max={1000000000}
            step={10000}
            defaultValue={priceRange}
            onChangeComplete={setPriceRange}

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
