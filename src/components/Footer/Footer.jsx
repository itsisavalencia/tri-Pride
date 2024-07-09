import "./Footer.scss";
import logo from "../../assets/logos/tri-Pride_Logo_2023_Stacked_WHITE_RGB.png";
import ig from "../../assets/icons/instagram.png";
import fb from "../../assets/icons/facebook.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__vertical-wrap">
        <div className="footer__horizontal-wrap">
          <Link to="/home">
            <img className="footer__logo" src={logo} alt="tri-Pride logo" />
          </Link>
          <div className="footer__sm">
            <a href="https://www.facebook.com/triPrideCommunityAssociation/" target="_blank" rel="noopener noreferrer">
              <img className="footer__sm-icon" src={fb} alt="Facebook logo" />
            </a>
            <a href="https://www.instagram.com/tripridekwc/" target="_blank" rel="noopener noreferrer">
              <img className="footer__sm-icon" src={ig} alt="Instagram logo" />
            </a>
            <Link to="/contact" className="footer__contact">CONTACT US</Link>
          </div>
        </div>
        <p className="footer__copyright">Copyright 2024. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
