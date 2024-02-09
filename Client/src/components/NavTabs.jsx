function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#shop"
          onClick={() => handlePageChange("Shop")}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Shop" ? "nav-link active" : "nav-link"}
        >
          shop
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#cart"
          onClick={() => handlePageChange("Cart")}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Cart" ? "nav-link active" : "nav-link"}
        >
          Cart
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
