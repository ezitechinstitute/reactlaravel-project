import './DropItem.css';
import { Link } from 'react-router-dom';

function DropItem({ to, icon, label, desc }) {
  return (
    <li className="dropdown-card-item">
      <Link to={to} className="dropdown-card">

        {/* Hover Background */}
        <div className="dropdown-card__background" />

        {/* Icon */}
        {icon && (
          <div className="dropdown-card__icon">
            {icon}
          </div>
        )}

        {/* Content */}
        <div className="dropdown-card__content">

          {/* Title */}
          <h4 className="dropdown-card__title">
            {label}
          </h4>

          {/* Description */}
          {desc && (
            <p className="dropdown-card__description">
              {desc}
            </p>
          )}

        </div>

      </Link>
    </li>
  );
}
export default DropItem;