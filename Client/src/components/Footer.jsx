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
  };


function Footer() {

  return (
    <footer style={styles.footer}>
            <h6>Contact Us</h6>
            <p className="text-justify">Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.</p>
        <hr />
    </footer>
  );
}

export default Footer;
