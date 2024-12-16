import { NavLink } from "react-router-dom";

function DashboardHeader() {
    return (
        <div className="relative shadow-lg">
            <span className="inline-block ml-[2rem]">
                <NavLink to="/">
                    <img src="/images/rescueTeamTaguigLogo.png" alt="Rescue Team Taguig main logo (light)" className="w-[100px]" />
                </NavLink>
            </span>
            <h1 className="font-rowdies absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-red font-bold text-2xl">RTT ADMIN DASHBOARD</h1>
        </div>
    );
}

export default DashboardHeader;