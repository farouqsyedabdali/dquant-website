import React from "react";
import data from "../assets/data-driven.png"; // Adjust the path as necessary

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-300">
      <div className="hero-content flex flex-row text-left">
        <div className="mr-8 flex-shrink-0 flex items-center">
          <img src={data} alt="Logo" className="w-150 h-170 object-contain" />
        </div>
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            Precision-Driven, Long-Only Investments.
          </h1>
          <p className="py-6">
            dQuant Capital Management employs a disciplined, quantitative
            investment strategy focused on long-only exposure to a diversified
            mix of broad market and leveraged exchange-traded funds (ETFs).
          </p>
          <p className="py-6">
            The strategy aims to transform market panics into possibilities,
            increasing exposure during downturns to potentially capitalize on
            recoveries. The approach avoids short-selling, excessive leverage,
            and speculation, emphasizing data-driven decisions and sustainable,
            long-term growth. If you are interested, please contact us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
