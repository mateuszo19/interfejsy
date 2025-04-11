import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="w-full flex items-center px-4 gap-4 shadow">
            <Link to="/">
                <img src="logo192.png" className='h-12' alt='Logo'/>
            </Link>
            <div className="flex p-4 gap-4">
                <Link to="/planes">
                    <button type="button" className="btn btn-outline-success">Samoloty</button>
                </Link>
                <Link to="/history">
                    <button type="button" className="btn btn-outline-success">Historia</button>
                </Link>
                <Link to="/flight-conditions">
                    <button type="button" className="btn btn-outline-success">Warunki lotu</button>
                </Link>
                <Link to="/clients">
                    <button type="button" className="btn btn-outline-success">Klienci</button>
                </Link>
            </div>
        </nav>
    )
};

export default Header;