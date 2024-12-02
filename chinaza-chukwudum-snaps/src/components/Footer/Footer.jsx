import "./Footer.scss";
import Facebookicon from "../../assets/images/Facebook.svg";
import Twittericon from "../../assets/images/X_twitter.svg";
import Instagramicon from "../../assets/images/Instagram.svg";
import Pinteresticon from "../../assets/images/Pinterest.svg";

function Footer() {
  return (
    <footer className="Footer">
      <h1>Snaps</h1>
      <ul className="Footer__list">
        <li>For Photographers</li>
        <li>Hire Talent</li>
        <li> Inspiration</li>
        <br></br>

        <li>About</li>
        <li>Careers</li>
        <li>Support</li>
      </ul>
      <div className="Footer__icons">
        <img src={Facebookicon} />

        <img src={Twittericon} />

        <img src={Instagramicon} />

        <img src={Pinteresticon} />
      </div>
    </footer>
  );
}

export default Footer;
