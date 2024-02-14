import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";
import shopBag from "../assets/shoppingbag.png";

const styles = {
  paddingLeft: {
    paddingLeft: "20px",
    backgroundColor: "#CFB4A4",
  },
  background: {
    backgroundColor: "#CFB4A4",
  }
};

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <div style={styles.background} className="d-flex align-items-center justify-content-between" >
      <div style={styles.paddingLeft}>
        <img
          alt=""
          src={logo}
          width="130"
          height="110"
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
