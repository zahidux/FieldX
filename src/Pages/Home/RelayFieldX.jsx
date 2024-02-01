import React from "react";
import aven from "../../assets/Relay/Aven.png";
import amara from "../../assets/Relay/Amara.png";
import circle from "../../assets/Relay/Circle.png";
import kyan from "../../assets/Relay/Kyan.png";
import treva from "../../assets/Relay/Treva.png";

const Relay = () => {
  return (
    <section className="my-16 md:my-36 mx-12 md:mx-32">
      <h2
        data-aos="fade-up"
        className="text-2xl md:text-3xl text-[#0052CC] font-semibold mb-8 md:mb-16 text-center"
      >
        5,000+ high-impact teams rely on Fieldx
      </h2>
      <div className="grid md:flex justify-center mx-auto items-center gap-8 md:gap-20">
        <img data-aos="flip-left" src={aven} alt="aven" />
        <img
          data-aos="flip-right"
          className="my-8 md:my-0"
          src={amara}
          alt="amara"
        />
        <img data-aos="flip-left" src={circle} alt="circle" />
        <img
          data-aos="flip-right"
          className="my-8 md:my-0"
          src={kyan}
          alt="kyan"
        />
        <img data-aos="flip-left" src={treva} alt="treva" />
      </div>
    </section>
  );
};

export default Relay;
