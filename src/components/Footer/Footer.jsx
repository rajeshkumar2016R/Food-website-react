import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="Footer" id="Footer">
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolores optio, cum adipisci consectetur ipsum praesentium sint eum rerum earum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fuga a eaque, sequi aliquam explicabo sapiente quidem eveniet quas est aperiam maiores aspernatur sit mollitia suscipit id ad. Eum, ad?</p>
            <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get In Touch</h2>
            <ul>
                <li>+91 29383-3848-829</li>
                <li>conract@Foodies.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Foodies.com - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
