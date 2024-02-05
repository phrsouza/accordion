import { useState } from "react";
import { AccordionItem } from "./AccordionItem";
import { faqs } from "../App";

export function Accordion() {
  const [selectedItem, setSelectedItem] = useState(null);

  function handleSelectedItem(index) {
    index === selectedItem ? setSelectedItem(null) : setSelectedItem(index);
  }

  return (
    <ul className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem
          open={index === selectedItem ? true : false}
          number={index}
          title={faq.title}
          description={faq.text}
          onSelectedItem={handleSelectedItem}
          key={index}
        />
      ))}
    </ul>
  );
}
