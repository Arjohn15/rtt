import { useState } from "react";
import getStyles from "../../../functions/getStyles";
import MobileSideBar from "../../../reusable_components/MobileSideBar";
import HeaderMobileDynamic from "./HeaderMobileDynamic";

export default function HeaderMobile({ inView }) {
    const [isSidebar, setIsSidebar] = useState(false); 
    const { fixedHeaderMobile } = getStyles(inView);

    const handleSidebar = (isOpen) => {
        setIsSidebar(isOpen)
    }

    return (
        <>
            <HeaderMobileDynamic onClickSidebar={handleSidebar} />
            <HeaderMobileDynamic onClickSidebar={handleSidebar} style={fixedHeaderMobile} />
            <MobileSideBar isSidebar={isSidebar} onClickSidebar={handleSidebar} setIsSidebar={setIsSidebar} />
        </>
       
    );
}