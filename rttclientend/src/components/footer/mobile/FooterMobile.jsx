import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import { NavLink } from "react-router-dom";

function FooterMobile() {
    return (
        <div className="bg-red text-white pb-[2rem]">
            <span className="flex justify-center">
                <NavLink to="/">
                    <img src="/images/rescueTeamTaguigLogoBlack.png" alt="Rescue Team Taguig main logo (dark)" className="w-[90px] md:w-[120px]" />
                </NavLink>
            </span>
            <span className="block text-center">
                <small className="text-xs md:text-sm">
                    <span>
                        <CopyrightOutlinedIcon style={{ fontSize: "1rem" }} />
                    </span>
                    RescueTeamTaguig, team Gregarsh
                </small>
            </span>
        </div>
    );
}

export default FooterMobile;