export function AccordionItem({
  open,
  number,
  title,
  onSelectedItem,
  children,
}) {
  return (
    <li
      className={open ? "item open" : "item"}
      onClick={() => onSelectedItem(number)}
    >
      <span className="number">{"0" + (number + 1)}</span>
      <span className="title">{title}</span>
      <span className="icon">{open ? "-" : "+"}</span>
      <div className="content-box" hidden={!open}>
        {children}
      </div>
    </li>
  );
}
