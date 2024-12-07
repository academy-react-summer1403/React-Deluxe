import { useState, useRef, useEffect } from "react";

export const AccordionTabs = ({ options, onSelectionChange, labelTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const contentRef = useRef(null);

  // Toggles option selection and updates
  const handleOptionToggle = (option) => {
    setSelectedOptions((prev) => {
      const newSelected = prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option];

      onSelectionChange(newSelected);
      return newSelected;
    });
  };
  // Toggles accordion open/close
  const toggleAccordion = () => setIsOpen(!isOpen);

  const contentHeight = isOpen ? contentRef.current.scrollHeight : 0;

  // console.log(options);

  return (
    <div className="accordion border border-gray-300 px-2 rounded-md w-full bg-slate-200 dark:bg-gray-700">
      {/* Accordion header */}
      <div
        className="header cursor-pointer bg-slate-200 p-2 rounded-md text-gray-500 text-right"
        onClick={toggleAccordion}
      >
        {selectedOptions.length > 0
          ? `${selectedOptions.join(" , ")}`
          : labelTitle + " مورد نظر را انتخاب کنید"}
      </div>

      {/* Accordion content  */}
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
                  labelTitle === "دسته" ? option.techName : option
                )}
                onChange={() =>
                  handleOptionToggle(
                    labelTitle === "دسته" ? option.techName : option
                  )
                }
                className="mr-2"
              />
              {labelTitle === "دسته" ? option.techName : option}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
