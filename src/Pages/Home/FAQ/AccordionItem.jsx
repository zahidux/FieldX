// react-icons
import { AiFillCaretDown } from "react-icons/ai";

const AccordionItem = ({ title, content, active, onClick }) => {
  return (
    <div
      className={`bg-white rounded-lg mb-4 overflow-hidden transition-all duration-300 py-3  ${
        active ? "shadow-custom" : ""
      }`}
    >
      <div
        onClick={onClick}
        className="flex justify-between items-center px-8 py-4 cursor-pointer"
      >
        <h1 className="text-lg text-dark-text font-semibold leading-7">
          {title}
        </h1>
        <AiFillCaretDown
          className={`relative text-primary ${
            active ? "rotate-0" : "rotate-180"
          } duration-300`}
        />
      </div>
      {active && (
        <p className="text-gray-text text-[15px] text-start leading-7 px-8 pb-8 pt-3">
          {content}
        </p>
      )}
    </div>
  );
};

export default AccordionItem;
