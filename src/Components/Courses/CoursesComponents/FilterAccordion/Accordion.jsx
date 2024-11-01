// import React, { useState } from "react";

// export const AccordionTab = ({ options, onSelectionChange }) => {
//   const [isOpen, setIsOpen] = useState(false); // Controls the accordion open/close
//   const [selectedOptions, setSelectedOptions] = useState([]); // Tracks selected options

//   // Toggles option selection and updates the parent component
//   const handleOptionToggle = (option) => {
//     setSelectedOptions((prev) => {
//       const newSelected = prev.includes(option)
//         ? prev.filter((item) => item !== option)
//         : [...prev, option];

//       onSelectionChange(newSelected); // External callback for API calls
//       return newSelected;
//     });
//   };

//   // Toggles the accordion open/close
//   const toggleAccordion = () => setIsOpen(!isOpen);

//   return (
//     <div className="accordion border rounded-md w-full bg-gray-100 dark:bg-gray-700">
//       {/* Accordion header displaying selected options */}
//       <div
//         className="header cursor-pointer py-2 px-4 rounded-md border border-gray-300 bg-slate-200 text-gray-500"
//         onClick={toggleAccordion}
//       >
//         {selectedOptions.length > 0
//           ? `Selected: ${selectedOptions.join(", ")}`
//           : "Select Options"}
//       </div>

//       {/* Accordion content with selectable options */}
//       {isOpen && (
//         <div className="transition-all duration-300">
//           <div className="content mt-2 space-y-1 transition-all duration-500">
//             {options.map((option, index) => (
//               <label
//                 key={index}
//                 className="flex items-center cursor-pointer p-2 bg-white rounded-md shadow-sm hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500"
//               >
//                 <input
//                   type="checkbox"
//                   checked={selectedOptions.includes(option)}
//                   onChange={() => handleOptionToggle(option)}
//                   className="mr-2"
//                 />
//                 {option}
//               </label>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

import React, { useState, useRef, useEffect } from "react";

export const AccordionTab = ({ options, onSelectionChange, labelTitle }) => {
  const [isOpen, setIsOpen] = useState(false); // Controls the accordion open/close
  const [selectedOptions, setSelectedOptions] = useState([]); // Tracks selected options
  const contentRef = useRef(null); // Ref to measure content height

  // Toggles option selection and updates the parent component
  const handleOptionToggle = (option) => {
    setSelectedOptions((prev) => {
      const newSelected = prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option];

      onSelectionChange(newSelected); // External callback for API calls
      return newSelected;
    });
  };
  // Toggles the accordion open/close
  const toggleAccordion = () => setIsOpen(!isOpen);

  // Set content height based on isOpen state
  const contentHeight = isOpen ? contentRef.current.scrollHeight : 0;

  // console.log(options);

  return (
    <div className="accordion border border-gray-300 px-2 rounded-md w-full bg-slate-200 dark:bg-gray-700">
      {/* Accordion header displaying selected options */}
      <div
        className="header cursor-pointer bg-slate-200 p-2 rounded-md text-gray-500 text-right"
        onClick={toggleAccordion}
      >
        {selectedOptions.length > 0
          ? `${selectedOptions.join(" , ")}`
          : labelTitle + " مورد نظر را انتخاب کنید"}
      </div>

      {/* Accordion content with animated height */}
      <div
        ref={contentRef}
        className="content overflow-hidden transition-all duration-300 max-h-[8.3rem] overflow-y-auto"
        style={{ height: `${contentHeight}px` }}
      >
        <div className="mt-2 space-y-1 flex flex-col gap-1">
          {options.map((option, index) => (
            <label
              key={index}
              className="flex gap-2 items-center cursor-pointer p-2 m-0 bg-white rounded-md shadow-sm hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500"
            >
              <input
                type="checkbox"
                checked={selectedOptions.includes(
                  labelTitle === "دسته"
                    ? option.techName
                    : labelTitle === "سطح"
                    ? option.levelName
                    : labelTitle === "اساتید"
                    ? option.fullName
                    : option
                )}
                onChange={() =>
                  handleOptionToggle(
                    labelTitle === "دسته"
                      ? option.techName
                      : labelTitle === "سطح"
                      ? option.levelName
                      : labelTitle === "اساتید"
                      ? option.fullName
                      : option
                  )
                }
                className="mr-2"
              />
              {labelTitle === "دسته"
                ? option.techName
                : labelTitle === "سطح"
                ? option.levelName
                : labelTitle === "اساتید"
                ? option.fullName
                : option}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

// import React, { useState, useEffect } from "react";
// import { Accordion, AccordionItem, Checkbox } from "@nextui-org/react";

// export const AccordionTab = ({ options }) => {
//   const [selectedOptions, setSelectedOptions] = useState([]);

//   // API call on selection change
//   useEffect(() => {
//     if (selectedOptions.length > 0) {
//       // Replace with your API call function
//       fetchData(selectedOptions);
//     }
//   }, [selectedOptions]);

//   // Update selected options
//   const handleToggleOption = (option) => {
//     setSelectedOptions((prevSelected) =>
//       prevSelected.includes(option)
//         ? prevSelected.filter((item) => item !== option)
//         : [...prevSelected, option]
//     );
//   };

//   // Dummy API call function
//   const fetchData = async (options) => {
//     console.log("Selected options for API call:", options);
//     // Make your API request here
//   };

//   return (
//     <Accordion expanded>
//       <AccordionItem
//         title={
//           selectedOptions.length > 0
//             ? `Selected: ${selectedOptions.join(", ")}`
//             : "Select Options"
//         }
//       >
//         {options.map((option) => (
//           <Checkbox
//             key={option}
//             checked={selectedOptions.includes(option)}
//             onChange={() => handleToggleOption(option)}
//             color="primary"
//           >
//             {option}
//           </Checkbox>
//         ))}
//       </AccordionItem>
//     </Accordion>
//   );
// };
