import { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null); // Track open item

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion-container">
      {items.map((item, index) => (
        <div className="accordion-item" key={index}>
          <button
            className="accordion-header"
            onClick={() => toggleAccordion(index)}
          >
            {item.title}{" "}
            {activeIndex === index ? <span>-</span> : <span>+</span>}
          </button>
          {activeIndex === index && (
            <div className="accordion-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
