import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function DashboardHeader() {
    const navigate = useNavigate();

    const handleClickLogout = () => {
        navigate("/adminlogin");
        sessionStorage.clear();
    }
    return (
        <div className="flex items-center justify-between shadow-lg">
            <span className="inline-block ml-[2rem]">
                <NavLink to="/">
                    <img src="/images/rescueTeamTaguigLogo.png" alt="Rescue Team Taguig main logo (light)" className="w-[100px]" />
                </NavLink>
            </span>
            <h1 className="font-rowdies text-red font-bold text-2xl">RTT ADMIN DASHBOARD</h1>
            <button onClick={handleClickLogout} className="p-[2rem] font-arimo hover:text-red duration-300">Log out</button>
        </div>
    );
}

export default DashboardHeader;