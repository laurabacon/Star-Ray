import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";
import shopBag from "../assets/shoppingbag.png";

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <div className="d-flex align-items-center justify-content-between">
      <div>
        <img
          alt=""
          src={logo}
          width="130"
          height="110"
          className="d-inline-block align-top"
        />
      </div>
    <ul className="justify-content-end me-3 nav nav-underline">
      <li className="me-3 nav-item">
        <Link
          to="/"
          className={currentPage === "/" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </li>
      <li className="me-3 nav-item">
        <Link
          to="/Shop"
          className={currentPage === "/Shop" ? "nav-link active" : "nav-link"}
        >
          Shop
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Cart"
          className={currentPage === "/Cart" ? "nav-link active" : "nav-link"}
        >
          <img
          alt=""
          src={shopBag}
          width="30"
          height="30"
        />
        </Link>
      </li>
    </ul>
    </div>
  );
}

export default NavTabs;
