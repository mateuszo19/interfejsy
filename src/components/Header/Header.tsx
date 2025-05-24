import {Button} from "react-bootstrap";
import {HeaderLinkInterface} from "../../interfaces/link.interface";

interface HeaderProps {
    links: HeaderLinkInterface[];
}

const Header = ({links}: HeaderProps) => {
    return (
        <>
            <div className="pt-32"/>
            <nav className="shadow-md  w-full top-0 left-0 fixed bg-[#0F172A] ">
                <div className="flex justify-between items-center py-6 px-6 md:px-20 max-w-[1440px] m-auto">
                    <div className="flex items-center justify-center gap-2">
                        <img src="/logo.jpg" alt="Samolot" className="h-10 w-10 rounded-full" />
                        <h1 className="text-2xl md:text-4xl font-bold text-white">Avio REVO</h1>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        {links.filter(link => !link.highlighted).map(link => (
                            <a key={link.url} className='font-semibold text-white text-decoration-none' href={link.url}>{link.title}</a>
                        ))}
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        {links.filter(link => link.highlighted).map(link => (
                            <a key={link.url} className='font-semibold text-[#0F172A] text-decoration-none rounded-[50px] bg-white p-3 ' href={link.url}>{link.title}</a>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
