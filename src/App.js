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
  return (
    <ul className="accordion">
      {faqs.map((faq) => (
        <AccordionItem faq={faq} />
      ))}
    </ul>
  );
}

function AccordionItem({ number, title, description }) {
  return (
    <li className="item">
      <span className="number">01</span>
      <span className="title">Fooo</span>
      <icon className="title">+</icon>
      <div className="content-box">foo</div>
    </li>
  );
}
