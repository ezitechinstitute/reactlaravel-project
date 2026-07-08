import Dropdown from "./Dropdown/Dropdown";
import { Arrow, NavGlow } from "./Icons.jsx";

function NavItem({ item, activeMenu, onEnter, onLeave }) {
  const isActive = activeMenu === item.key;

  return (
    <li
      className={`nav__item nav__item--has-dropdown ${isActive ? "nav__item--active" : ""}`}
      onMouseEnter={() => onEnter(item.key)}
      onMouseLeave={onLeave}
    >
      <NavGlow />
      <button
        className="nav__link"
        aria-expanded={isActive}
        aria-controls={`${item.key}-menu`}
      >
        <span className="nav__link-text">{item.label}</span>
        <span className="nav__link-arrow">
          <Arrow />
        </span>
      </button>
      <div className="nav__dropdown-bridge" />
      <Dropdown id={`${item.key}-menu`} active={isActive} sections={item.sections} />
    </li>
  );
}

export default NavItem;
