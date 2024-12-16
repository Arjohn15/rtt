import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";
function HeaderMobileDynamic({ onClickSidebar, style }) {
    const onActiveLink = (isActive) => {
        return `block px-[2rem] py-[1rem] hover:text-red duration-300 ${isActive ? "text-red font-bold" : ""}`;
    }
    return (
        <div className={`${style} z-20 shadow-lg`}>
            <div className="relative flex justify-center lg:justify-between lg:items-center lg:px-[4rem] =">
                <span>
                    <NavLink to="/">
                        <img src="/images/rescueTeamTaguigLogo.png" alt="Rescue Team Taguig main logo (light)" className="w-[100px]" />
                    </NavLink>
                </span>

                <span className="absolute left-[1rem] top-[50%] translate-y-[-50%] lg:hidden">
                    <button onClick={onClickSidebar("left", true)}>
                        <MenuIcon />
                    </button>
                </span>

                <div className="hidden lg:block">
                    <ul className="block flex text-sm font-arimo mr-[5rem]">
                        <li><NavLink to="/" className={({ isActive }) => onActiveLink(isActive)}>Home</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => onActiveLink(isActive)}>About</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) => onActiveLink(isActive)}>Contact</NavLink></li>
                </ul>
                </div>
            </div>
        </div>
    );
}

export default HeaderMobileDynamic;