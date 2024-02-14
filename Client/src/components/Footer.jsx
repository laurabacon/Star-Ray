import React from 'react';

const styles = {
    footer: {
      backgroundColor: '#26272b',
      padding: '45px 0 20px',
      fontSize: '15px',
      lineHeight: '24px',
      color: '#737373',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
      textAlign: 'center',
    },
    footerList: {
      listStyleType: 'none'
    }
  };


function Footer() {

  return (
    <footer style={styles.footer}>

    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h6>Contact Us</h6>
          <p className="text-justify">Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book.</p>
        </div>
        <div className="col-sm-12 col-md-6">
          <h6>My Account</h6>
          <ul style={styles.footerList}>
            {/* <li><a onClick={handleLogout} >Log Me Out</a></li> */}
          </ul>
        </div>
      </div>
      <hr />
    </div>

  </footer>
  )};

export default Footer;
