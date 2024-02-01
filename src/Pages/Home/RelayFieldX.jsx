import React from "react";
import aven from "../../assets/Relay/Aven.png";
import amara from "../../assets/Relay/Amara.png";
import circle from "../../assets/Relay/Circle.png";
import kyan from "../../assets/Relay/Kyan.png";
import treva from "../../assets/Relay/Treva.png";

const Relay = () => {
  return (
    <section className="my-36 mx-32">
      <h2 className="text-3xl text-[#0052CC] font-semibold mb-16 text-center">
        5,000+ high-impact teams rely on Fieldx
      </h2>
      <div className="flex  justify-center gap-20">
        <img src={aven} alt="aven" />
        <img className="amara" src={amara} alt="amara" />
        <img src={circle} alt="circle" />
        <img className="kyan" src={kyan} alt="kyan" />
        <img src={treva} alt="treva" />
      </div>
    </section>
  );
};

export default Relay;
