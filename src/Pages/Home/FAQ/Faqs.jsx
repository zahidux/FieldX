import MyAccordion from "./MyAccordion";
import "./FAQ.css";

const Faqs = () => {
  return (
    <section className="faq text-center ">
      <div className="bg-[#0052CC]/85">
        <div className="pt-16 md:pt-28 text-white">
          <p className="text-[20px] font-medium">Common Question </p>
          <h3 className="text-3xl md:text-5xl font-extrabold mt-3 md:mt-5 mb-10 md:mb-20">
            Frequently asked questions
          </h3>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 pb-10 md:pb-0">
          <MyAccordion />
          <MyAccordion />
        </div>
      </div>
    </section>
  );
};

export default Faqs;
