import "./Footer.css"
import logo from "../../icons_assets/footer logo.jpg"

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <img src={logo} id="logo-foot" alt="Little lemon logo" />
            </div>
            <div>
                <h3>Navigation</h3>
                <ul id="navigation">
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Resversations</li>
                    <li>Order online</li>
                    <li>Login</li>
                </ul>
            </div>
            <div>
                <h3>Contact us</h3>
                <ul id="contact">
                    <i className="fa-solid fa-location-dot"></i>
                    <li>45 main street, chicago</li>
                    <i className="fa-solid fa-phone"></i>
                    <li>01125658987</li>
                    <i className="fa-solid fa-at"></i>
                    <li>Contact@littlelemon.com</li>
                </ul>
            </div>
            <div>
                <h3>Social media</h3>
                <div id="social">
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-facebook"></i>
                </div>
            </div>
        </footer>

    );
};

export default Footer;