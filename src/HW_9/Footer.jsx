import "./footer.css";
import image1 from "../assets/left.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_lines">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="footer_squer"></div>
      <div className="footer_img">
        <img src={image1} alt="img" />
      </div>
    </div>
  );
}
export default Footer;
