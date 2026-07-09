import './DropdownSection.css';
import DropItem from "./DropItem";

function DropdownSection({
  title,
  items,
}) {
  return (
    <div className="dropdown__section">

      {title && (
        <h4 className="dropdown__section-title">
          {title}
        </h4>
      )}

      <ul className="dropdown__list">
        {items.map((item) => (
          <DropItem
            key={item.label}
            {...item}
          />
        ))}
      </ul>

    </div>
  );
}

export default DropdownSection;