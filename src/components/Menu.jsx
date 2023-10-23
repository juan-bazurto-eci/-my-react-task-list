import "./Menu.css";
import { Link } from "react-router-dom";

export function Menu() {
  return (
    <nav className="menu-container">
      <ul className="menu-list">
        <li className="menu-item">
          <Link to="/" className="menu-link" activeClassName="menu-link-active">
            Home
          </Link>
        </li>
        <li className="menu-item">
          <Link
            to="/Tasks"
            className="menu-link"
            activeClassName="menu-link-active"
          >
            Tareas
          </Link>
        </li>
        <li className="menu-item">
          <Link
            to="/AboutUs"
            className="menu-link"
            activeClassName="menu-link-active"
          >
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
