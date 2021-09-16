import logo from "../images/footer-logo.png";
import arrowRight from "../icons/arrow-right-black.svg";
import "../style/Footer.scss";

const Footer = ({ onClick }) => {
  return (
    <div className="footer">
        <div>
      <div className="wrapper">
        <div className="subscription">
        <img src={logo} className="logo"></img>
          <p>
            Subscribe to our free newsletter to receive matching recommendations
            and latest news and stories.
          </p>
          <div className="subscriptionBox">
            <input type="email" placeholder="Your email address…" />
            <button><span><img src={arrowRight}/></span></button>
          </div>
        </div>
        <div className="links">
          <div className="pages">
            <h3>Pages</h3>
            <a href="#">Page 1</a>
            <a href="#">Page 2</a>
            <a href="#">Page 3</a>
            <a href="#">Page 4</a>
            <a href="#">Page 5</a>
            <a href="#">Page 6</a>
          </div>
          <div className="posts">
            <h3>Posts</h3>
            <div>
              <a href="#">Post 1</a>
              <a href="#">Post 2</a>
              <a href="#">Post 3</a>
              <a href="#">Post 4</a>
              <a href="#">Post 5</a>
              <a href="#">Post 6</a>
            </div>
          </div>
        </div>
        <div className="contact">
          <p className="label">Call us</p>
          <p className="info">+(65) 8821 7368</p>
          <p className="label">Email us</p>
          <p className="info">liangcx126@gmail.com</p>
        </div>
        </div>
        <div className="bottomLine">
        <div className="miniNav">
          <a href="#">Privacy Policy</a>
          <a href="#">FAQs</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="copyright">
        © 2021 PerfMatch. All rights reserved.
        </div>
      </div>
      </div></div>
  );
};

export default Footer;
