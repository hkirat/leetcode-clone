import { useState } from "react";
import { OptionType } from "../interfaces";

const Dropdown = ({
  options,
  handleOptionClick,
  selectedOption,
}: {
  options: OptionType[];
  handleOptionClick: (option: OptionType) => void;
  selectedOption: string | null;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left z-50">
      <div>
        <button
          type="button"
          className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-800 transition ease-in-out duration-150"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
          {selectedOption || options[0].option}
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option: OptionType) => (
              <p
                key={option.id}
                className="block px-4 py-2 text-sm text-white hover:bg-gray-700 cursor-pointer"
                role="menuitem"
                onClick={() => handleOptionClick(option)}
              >
                {option.option}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
