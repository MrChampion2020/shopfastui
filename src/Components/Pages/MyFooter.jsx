import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";
import apple from "../../assets/img/pay/app.jpg";
import android from "../../assets/img/pay/play.jpg";
import pay from "../../assets/img/pay/pay.png";
import logo from "../../assets/logo.png";

const MyFooter = () => {
  const footerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '40px 80px',
  };

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '20px',
  };

  const logoStyle = {
    marginBottom: '30px',
  };

  const headingStyle = {
    fontSize: '14px',
    paddingBottom: '20px',
  };

  const linkStyle = {
    fontSize: '13px',
    textDecoration: 'none',
    color: '#222',
    marginBottom: '10px',
  };

  const socialStyle = {
    marginTop: '20px',
  };

  const socialIconStyle = {
    color: '#000',
    paddingRight: '10px',
    cursor: 'pointer',
    fontSize: '20px',
  };

  return (
    <footer style={footerStyle}>
      <div style={columnStyle}>
        <img
          src={logo}
          alt="ShopFast"
          width={90}
          height={50}
          style={logoStyle}
        />
        <h4 style={headingStyle}>Contact</h4>
        <p>
          <strong>Address:</strong> 44 Upper New County, California
        </p>
        <p>
          <strong>Phone:</strong> +01 4834 322 / (+91) 01 5748 9490
        </p>
        <p>
          <strong>Hours:</strong> 09:00 - 18:00, MON - SAT
        </p>
        <div style={socialStyle}>
          <h4 style={headingStyle}>Follow Us</h4>
          <div>
            <FaFacebookF style={socialIconStyle} />
            <FaTwitter style={socialIconStyle} />
            <FaInstagram style={socialIconStyle} />
            <FaPinterestP style={socialIconStyle} />
            <FaYoutube style={socialIconStyle} />
          </div>
        </div>
      </div>
      <div style={columnStyle}>
        <h4 style={headingStyle}>About</h4>
        <a href="#" style={linkStyle}>
          About Us
        </a>
        <a href="#" style={linkStyle}>
          Delivery Information
        </a>
        <a href="#" style={linkStyle}>
          Privacy Policy
        </a>
        <a href="#" style={linkStyle}>
          Terms & Conditions
        </a>
        <a href="#" style={linkStyle}>
          Contact Us
        </a>
      </div>
      <div style={columnStyle}>
        <h4 style={headingStyle}>My Account</h4>
        <a href="#" style={linkStyle}>
          Sign In
        </a>
        <a href="#" style={linkStyle}>
          View Cart
        </a>
        <a href="#" style={linkStyle}>
          My Wishlist
        </a>
        <a href="#" style={linkStyle}>
          Track My Order
        </a>
        <a href="#" style={linkStyle}>
          Help
        </a>
      </div>
      <div style={columnStyle}>
        <h4 style={headingStyle}>Install App</h4>
        <p>From App Store or Google Play</p>
        <div style={{ display: 'flex', marginTop: '10px' }}>
          <img
            src={apple}
            alt="App Store"
            width={120}
            height={40}
            style={{ marginRight: '10px' }}
          />
          <img src={android} alt="Google Play" width={120} height={40} />
        </div>
        <p style={{ marginTop: '20px' }}>Secured Payment Gateways</p>
        <img
          src={pay}
          alt="Payment Methods"
          width={300}
          height={40}
          style={{ marginTop: '10px' }}
        />
      </div>
      <div style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
        <p>©2024 ShopFast</p>
      </div>
    </footer>
  );
};

export default MyFooter;
