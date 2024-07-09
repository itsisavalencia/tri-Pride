import "./Footer.scss";
import logo from "../../assets/logos/tri-Pride_Logo_2023_Stacked_WHITE_RGB.png";
import ig from "../../assets/icons/instagram.png"
import fb from "../../assets/icons/facebook.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__vertical-wrap">
        <div className="footer__horizontal-wrap">
          <img className="footer__logo" src={logo} alt="tri-Pride logo" />
          <div className="footer__sm">
            <img className="footer__sm-icon" src={fb} alt="facebook logo" />
            <img className="footer__sm-icon" src={ig} alt="instagram logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
