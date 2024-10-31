// import React, { useState } from "react";

// export const Accordion = ({ options, onSelectionChange }) => {
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
//         <div className="content mt-2 space-y-1">
//           {options.map((option, index) => (
//             <label
//               key={index}
//               className="flex items-center cursor-pointer p-2 bg-white rounded-md shadow-sm hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500"
//             >
//               <input
//                 type="checkbox"
//                 checked={selectedOptions.includes(option)}
//                 onChange={() => handleOptionToggle(option)}
//                 className="mr-2"
//               />
//               {option}
//             </label>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import { Accordion, AccordionItem, Checkbox } from "@nextui-org/react";

export const AccordionTab = ({ options }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  // API call on selection change
  useEffect(() => {
    if (selectedOptions.length > 0) {
      // Replace with your API call function
      fetchData(selectedOptions);
    }
  }, [selectedOptions]);

  // Update selected options
  const handleToggleOption = (option) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(option)
        ? prevSelected.filter((item) => item !== option)
        : [...prevSelected, option]
    );
  };

  // Dummy API call function
  const fetchData = async (options) => {
    console.log("Selected options for API call:", options);
    // Make your API request here
  };

  return (
    <Accordion expanded>
      <AccordionItem
        title={
          selectedOptions.length > 0
            ? `Selected: ${selectedOptions.join(", ")}`
            : "Select Options"
        }
      >
        {options.map((option) => (
          <Checkbox
            key={option}
            checked={selectedOptions.includes(option)}
            onChange={() => handleToggleOption(option)}
            color="primary"
          >
            {option}
          </Checkbox>
        ))}
      </AccordionItem>
    </Accordion>
  );
};
