import React from "react";
import { Link } from "react-router-dom";

const styles = {
  footer: {
    backgroundColor: "#26272b",
    padding: "45px 0 20px",
    fontSize: "15px",
    lineHeight: "24px",
    color: "#737373",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
    textAlign: "center",
  },
  footerList: {
    listStyleType: "none",
  },
};

function Footer() {
  return (
    <footer style={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Contact Us</h6>
            <p className="text-justify">
             For any questions please contact Jenny Star at : jennystarphillips@gmail.com
            </p>
          </div>
          <div className="col-6 col-md-3">
            <ul style={styles.footerList}>
              <Link to="/Login" id="shop-footer">
                My Account & Logout
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <hr />
    </footer>
  );
}

export default Footer;
