import React, { useState } from "react";
import "../css/style.css";
import faqData from "../data/faqData";

const Faq = () => {
  const [openFaqId, setOpenFaqId] = useState(null);

  return (
    <div className="container">
      <h1 className="provider-h1 text-center my-3" id="faq">
        FAQ
      </h1>
      {faqData.map((faq, index) => (
        <div className="faq-container my-3" key={index}>
          <label
            onClick={() => setOpenFaqId(openFaqId === index ? null : index)}
            className="toggle-label-faq"
          >
            <i
              className={`arrow-icon fas ${
                openFaqId === index ? "fa-arrow-up" : "fa-arrow-down"
              }`}
            ></i>
            {faq.question}
          </label>
          <div
            className={`expanding-content toggle-label-faq ${
              openFaqId === index ? "open" : ""
            }`}
          >
            <div>{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
