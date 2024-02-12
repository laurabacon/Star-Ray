import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === "/" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Shop"
          className={currentPage === "/Shop" ? "nav-link active" : "nav-link"}
        >
          shop
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Cart"
          className={currentPage === "/Cart" ? "nav-link active" : "nav-link"}
        >
          cart
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
