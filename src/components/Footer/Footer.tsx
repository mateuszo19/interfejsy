import {NavLink} from "react-router-dom";
import links from "../../const/links";

const Footer = () => {

    return (
        <footer className="w-full flex flex-col px-4 py-6 bg-gradient-to-r from-blue-100 to-blue-300  shadow-inner">
            <div className="w-full flex flex-col gap-2 text-center lg:w-[1440px] m-auto">
                <div className="flex justify-around">
                    <div>
                        <NavLink to="/">
                            <img src="logo.jpg" className="h-12 rounded-full shadow" alt="Logo" />
                        </NavLink>
                    </div>
                    <div className="flex flex-row items-center gap-2 items-start">
                        {
                            links.map((link, index) => (
                                    <NavLink
                                        key={'FooterLink' + index}
                                        to={link.url}
                                        className={({ isActive }) => `nav-link cursor-pointer text-black ${isActive ? "active" : ""}`}
                                    >
                                        {link.label}
                                    </NavLink>
                            ))
                        }
                    </div>
                    <div></div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
                    <p className="text-sm text-gray-700 p-0 m-auto">
                        Wykonał <span className="font-semibold">Mateusz Palanis</span>
                    </p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
