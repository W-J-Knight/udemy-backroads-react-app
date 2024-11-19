import { socialLinks } from "../data";
import logo from "../images/logo.svg";
import Pagelinks from "./PageLinks";
import SocialLink from "./SocialLink";

const Navabar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
          <Pagelinks/>
        {/* <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="nav-link">
                  {" "}
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul> */}

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return (
              <SocialLink  key={link.id} {...link} itemClass='nav-icon'/>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navabar;
