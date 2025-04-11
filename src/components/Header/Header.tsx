import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className="w-full flex items-center px-4 gap-4 shadow">
            <NavLink to="/">
                <img src="logo.jpg" className="h-12" alt="Logo" />
            </NavLink>
            <div className="flex px-4 pt-4 gap-4">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <NavLink
                            to="/planes"
                            className={({ isActive }) => `nav-link text-black ${isActive ? "active" : ""}`}
                        >
                            Samoloty
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/history"
                            className={({ isActive }) => `nav-link text-black ${isActive ? "active" : ""}`}
                        >
                            Historia
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/flight-conditions"
                            className={({ isActive }) => `nav-link text-black ${isActive ? "active" : ""}`}
                        >
                            Warunki lotu
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/clients"
                            className={({ isActive }) => `nav-link text-black ${isActive ? "active" : ""}`}
                        >
                            Klienci
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
