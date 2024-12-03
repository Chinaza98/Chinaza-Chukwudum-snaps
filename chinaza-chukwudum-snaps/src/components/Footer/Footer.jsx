import "./Footer.scss";
import Facebookicon from "../../assets/images/Facebook.svg";
import Twittericon from "../../assets/images/X_twitter.svg";
import Instagramicon from "../../assets/images/Instagram.svg";
import Pinteresticon from "../../assets/images/Pinterest.svg";

function Footer() {
  return (
    <footer className="footer">
      <h1 className="footer__logo">Snaps</h1>
      <ul className="footer__list">
        <div className="footer__list1">
          <li className="footer__list-items">For Photographers</li>

          <li className="footer__list-items">Hire Talent</li>
          <li className="footer__list-items"> Inspiration</li>
        </div>

        <br></br>

        <div className="footer__list2">
          <li className="footer__list-items">About</li>
          <li className="footer__list-items">Careers</li>
          <li className="footer__list-items">Support</li>
        </div>
      </ul>
      <div className="footer__icon">
        <img src={Facebookicon} className="footer__icon-items" />

        <img src={Twittericon} className="footer__icon-items" />

        <img src={Instagramicon} className="footer__icon-items" />

        <img src={Pinteresticon} className="footer__icon-items" />
      </div>
    </footer>
  );
}

export default Footer;
