import { NavLink } from "react-router-dom";
import links from "../const/links";

const Header = () => {
    return (
        <nav className="w-full flex items-center px-4 gap-4 shadow">
            <NavLink to="/">
                <img src="logo.jpg" className="h-12" alt="Logo" />
            </NavLink>
            <div className="flex px-4 pt-4 gap-4">
                <ul className="nav nav-tabs">
                    {
                        links.map((link, index) => (
                            <li className="nav-item" key={'headerLink' + index}>
                                <NavLink
                                    to={link.url}
                                    className={({ isActive }) => `nav-link text-black ${isActive ? "active" : ""}`}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Header;
