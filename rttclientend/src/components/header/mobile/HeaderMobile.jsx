import { useState } from "react";
import getStyles from "../../../functions/getStyles";
import MobileSideBar from "../../../reusable_components/MobileSideBar";
import HeaderMobileDynamic from "./HeaderMobileDynamic";
import { useLocation } from "react-router-dom";
import DashboardHeader from "../DashboardHeader";
export default function HeaderMobile({ inView }) {
    const [sidebar, setSidebar] = useState({
        left: false,
    });

    const location = useLocation();

    const { fixedHeaderMobile } = getStyles(inView);

    const handleSidebar = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setSidebar({ ...sidebar, [anchor]: open });
    };


    if (location.pathname === "/dashboard") {
        return <DashboardHeader />
    } else if (location.pathname === "/adminlogin") {
        return;
    }
    else {
        return <>
            <HeaderMobileDynamic onClickSidebar={handleSidebar} />
            <HeaderMobileDynamic onClickSidebar={handleSidebar} style={fixedHeaderMobile} />
            <MobileSideBar sidebar={sidebar} onClickSidebar={handleSidebar} />
        </>
    }

}