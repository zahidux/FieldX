import { useState } from "react";
import AccordionItem from "./AccordionItem";

const MyAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const items = [
    {
      title: "What kind of data can I see in FieldX?",
      content:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.",
    },
    {
      title: "Does Bizzy read my customers' data?",
      content:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.",
    },
    {
      title: "What's your refund and cancellation policy?",
      content:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate.",
    },
  ];

  return (
    <section className="md:pb-28">
      <div className="max-w-[1500px] mx-auto grid gap-8 ">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            active={activeIndex === index}
            onClick={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default MyAccordion;
