import logo from "../images/logo.png";
import "../style/Header.scss";
import { useHistory } from "react-router-dom";

function Header() {
    const history = useHistory();
    return (
        <div className="header">
            <a onClick={() => history.push("/")}>
                <img src={logo} className="logo"></img>
            </a>
            <div className="menu">
                <span onClick={() => history.push("/")}>Home</span>
                <span>About Us</span>
                <span>FAQs</span>
                <span>Enquiry</span>
                <span>More</span>
                <span>Search</span>
                {/* <span className="start">Start Now</span> */}
            </div>
        </div>

    )
}

export default Header
