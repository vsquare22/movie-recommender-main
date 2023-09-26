// NavBar Component
import { Link } from "react-router-dom";
import "./styles/NavBarStyles.css";
import Logo from "./images/logo2.png";

const NavBar = ({ isHome }) => {
    const gitRepoLink =
        "https://github.com/Nagendraindus/";
    return (
        <div className="container header">
            <Link to="/ ">
                <img src={Logo} className="logo" alt="" />
            </Link>
            {/* if the user on home page then github button otherwise it should be home button*/}
            {isHome ? (
                <a href="/" className="header-btn1 bouncy">
                    <i className="fas fa-home"></i> Home
                </a>
            ) : (
                <a
                    href={gitRepoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="header-btn1"
                >
                    <i className="fa-brands fa-github"></i> social
                </a>
            )}
        </div>
    );
};

export default NavBar;
