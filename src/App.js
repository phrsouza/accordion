import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return <Accordion />;
}

function Accordion() {
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

function AccordionItem({ open, number, title, description, onSelectedItem }) {
  return (
    <li
      className={open ? "item open" : "item"}
      onClick={() => onSelectedItem(number)}
    >
      <span className="number">{"0" + (number + 1)}</span>
      <span className="title">{title}</span>
      <span className="title">+</span>
      <div className="content-box" hidden={!open}>
        {description}
      </div>
    </li>
  );
}
