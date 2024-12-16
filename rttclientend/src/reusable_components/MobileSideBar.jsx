import Drawer from '@mui/material/Drawer';
import { NavLink } from "react-router-dom";
export default function MobileSideBar({ sidebar, onClickSidebar }) {

    const onActiveLink = (isActive) => {
        return `py-[1rem] w-full block ${isActive ? "text-red font-bold" : ""}`;
    }
    const list = () => (
        <div className="px-[1rem] font-arimo text-sm w-60 h-full border-red border-t-4 border-r-2">
            <span className="text-xs block py-[1rem] font-bold border-[rgba(233,75,74,0.5)] border-b-[1px]">RescueTeamTaguig</span>
            <ul className="mt-[1rem]">
                <li><NavLink to="/" onClick={onClickSidebar("left", false)} className={({ isActive }) => onActiveLink(isActive)}>Home</NavLink></li>
                <li><NavLink to="/about" onClick={onClickSidebar("left", false)} className={({ isActive }) => onActiveLink(isActive)}>About</NavLink></li>
                <li><NavLink to="/contact" onClick={onClickSidebar("left", false)} className={({ isActive }) => onActiveLink(isActive)}>Contact</NavLink></li>
            </ul>
        </div>
    );
    return (
        <div className="lg:hidden">
            {['left'].map((anchor) => (
                <Drawer
                    key={anchor}
                    anchor={anchor}
                    open={sidebar[anchor]}
                    onClose={onClickSidebar(anchor, false)}>
                    {list(anchor)}
                </Drawer>
            ))}
        </div>
    );
}