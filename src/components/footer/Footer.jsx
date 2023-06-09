import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { applicationContext } from "../../context";
import "../footer/footer.scss";
import FacebookIcon from "../../assets/footer/facebook-large.svg";
import InstagramIcon from "../../assets/footer/instagram-large.svg";
import LinkedinIcon from "../../assets/footer/linked-in-large.svg";
import OaklyIcon from "../../assets/footer/oakly-logo-full-color 9.svg";
import TarabaLogo from "../../assets/footer/taraba-logo-latin-full-color-white 1.svg";
import TarabaLogoDM from "../../assets/footer/taraba-logo-latin-full-color-white 1-darkmode.svg";
import PortalLogo from "../../assets/footer/portal-logo-lat-solid-white 1.svg";
import EduLogo from "../../assets/footer/trb-edu-logo-solid-white.svg";
import TechLogo from "../../assets/footer/trb-tech-logo-solid-white (1) 1.svg";
import YouTubeIcon from "../../assets/footer/you-tube-large.svg";

function Footer() {
  const { activDarkMode, dark } =
    useContext(applicationContext);
  return (
    <div className={`footer-wrapper ${activDarkMode ? dark : ""}`}>
      <div className="footer-sub-wrapper">
        <div className="footer-sub-sub-wrapper">
          <div>
            <img src={TarabaLogo} alt="logo" className="tarabaLogo lightmode" />
            <img src={TarabaLogoDM} alt="logo" className="tarabaLogo darkmode" />
            <div className="social-networks">
              <Link>
                <img src={LinkedinIcon} alt="linkedin" />
              </Link>
              <Link>
                <img src={InstagramIcon} alt="instagram" />
              </Link>
              <Link>
                <img src={YouTubeIcon} alt="youtube" />
              </Link>
              <Link>
                <img src={FacebookIcon} alt="facebook" />
              </Link>
            </div>
          </div>
          <p className="copyright">
            Copyright © 2021 Taraba. All rights reserved.
          </p>{" "}
        </div>
        <div className="footer-sub-sub-wrapper">
          <h6>Quick links</h6>
          <div className="quick-links">
          <Link to={'/'} state={{ section: 'generate' }}>Generate QR codes</Link>
          <Link to={'/'} state={{ section: 'pricing' }}>Pricing</Link>
          </div>
          <div>
            <Link>Terms and Conditions</Link>
            <span> </span>
            <Link>Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className="footer-wrapper-grey">
        <p>Our family</p>
        <div className="family-links">
          <Link>
            <img src={TechLogo} alt="tech" />
          </Link>
          <Link>
            <img src={EduLogo} alt="edu" />
          </Link>
          <Link>
            <img src={PortalLogo} alt="portal" />
          </Link>
          <Link>
            <img src={OaklyIcon} alt="oakly" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
