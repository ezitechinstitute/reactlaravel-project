import './Dropdown.css';
import DropdownSection from "./DropdownSection";

function Dropdown({
  id,
  active,
  sections,
  className = "",
}) {
  return (
    <div
      id={id}
      data-lenis-prevent
      className={`dropdown ${active ? "dropdown--active" : ""} ${className}`}
      style={{ "--dropdown-cols": sections.length }}
    >
      <div className="dropdown__container">
        {sections.map((section, index) => (
          <DropdownSection
            key={section.title || index}
            {...section}
          />
        ))}
      </div>
    </div>
  );
}

export default Dropdown;