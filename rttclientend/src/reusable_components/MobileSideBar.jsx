import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useEffect, useRef} from 'react';
import getStyles from '../functions/getStyles';

function MobileSideBar({ isSidebar, onClickSidebar }) {
    const containerRef = useRef();

    const { listStyle } = getStyles();
    let darkBgStyle = "";
    let navigationStyle = "";

    if (isSidebar) {
        navigationStyle = "translate-x-[0%]";
        darkBgStyle += "bg-[rgba(0,0,0,0.5)] ";
        darkBgStyle += "block";

    } else {
        navigationStyle = "translate-x-[-100%]";
        darkBgStyle += "bg-[rgba(0,0,0,0)] ";
        darkBgStyle += "hidden";

    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                onClickSidebar(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () =>  document.removeEventListener("mousedown", handleClickOutside);
    }, [])

    return (
        <>
            <div ref={containerRef} className={`${navigationStyle} duration-500 w-[60vw] h-[100vh] bg-white z-20 fixed top-0 font-arimo text-sm`}>
            <button onClick={() => { onClickSidebar(false); }} className="absolute right-[0.5rem] top-[0.5rem]">
                <CloseOutlinedIcon className="text-red" />
            </button>
            <ul className="w-full pt-[3rem]">
                <li><a href="" className={listStyle}>Home</a></li>
                <li><a href="" className={listStyle}>Contact</a></li>
                <li><a href="" className={listStyle}>About</a></li>
            </ul>
        </div>
            <div className={`${darkBgStyle} w-[100vw] h-[100vh] fixed top-0 z-10`}>
            </div>
        </>


    );
}

export default MobileSideBar;