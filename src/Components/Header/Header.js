import "./Header.css"
import { NavLink } from "react-router-dom";
import logo from "../../icons_assets/Logo .svg"
import { Component } from "react";

class Header extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <header>
                <nav>
                    <div>
                        <img src={logo} className="logo" alt="Little lemon logo" />
                    </div>
                    <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                        <li><NavLink to="/" >Home</NavLink></li>
                        <li><NavLink to="/" >About</NavLink></li>
                        <li><NavLink to="/">Menu</NavLink></li>
                        <li><NavLink to="/booking">Resversations</NavLink></li>
                        <li><NavLink to="/">Order online</NavLink></li>
                        <li><NavLink to="/">Login</NavLink></li>
                    </ul>
                    <div id="mobile" onClick={this.handleClick}>
                        <i id="bar" className={this.state.clicked ?
                            "fas fa-times" : "fas fa-bars"}
                        ></i>
                    </div>
                </nav>
            </header >

        );
    }
}
export default Header;

