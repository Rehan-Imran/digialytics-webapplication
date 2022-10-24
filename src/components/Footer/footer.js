import {Button, Input} from "antd";
import "./footer.scss";
import fbIcon from "../../Images/fb-icon.svg";
import instaIcon from "../../Images/insta-icon.svg";
import linkedInIcon from "../../Images/linked-in-icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row-container">
        <h2 className="white">Digialytics</h2>
        <div className="icon-row">
          <img src={fbIcon} alt="facebook" className="icon" />
          <img src={instaIcon} alt="instagram" className="icon" />
          <img src={linkedInIcon} alt="linked-in" className="icon" />
        </div>
      </div>
      <div className="divider" />
      <div className="links-container">
        <div>
          <h3 className="heading">Home</h3>
          <h4 className="link">Lorem</h4>
          <h4 className="link">Lorem</h4>
          <h4 className="link">Lorem</h4>
          <h4 className="link">Lorem</h4>
        </div>
        <div>
          <h3 className="heading">About Us</h3>
          <h4 className="link">Lorem</h4>
          <h4 className="link">Lorem</h4>
          <h4 className="link">Lorem</h4>
          <h4 className="link">Lorem</h4>
        </div>
        <div>
          <h3 className="heading">Our Domain</h3>
          <h4 className="link">Lorem</h4>
          <h4 className="link">Lorem</h4>
          <h4 className="link">Lorem</h4>
          <h4 className="link">Lorem</h4>
        </div>
        <div>
          <h3 className="heading">Our Solution</h3>
          <h4 className="link">Lorem</h4>
          <h4 className="link">Lorem</h4>
          <h4 className="link">Lorem</h4>
          <h4 className="link">Lorem</h4>
        </div>
      </div>
      <div className="divider" />
      <div className="row-container padding-x">
        <h3 className="white">Sign up for our Newsletter</h3>
        <div className="email-input-container">
          <Input className="input-field" placeholder={"Email ID"} />
          <Button type="primary">Submit</Button>
        </div>
      </div>
      <div className="divider" />
      <div className="bottom-row">
        <span className="white padding-x">Privacy Policy</span>
        <span className="white">Terms & Conditions</span>
      </div>
    </div>
  );
};

export default Footer;
