import { useRef, useEffect } from "react";
export default function OthersLabel({ setOpenOthers, onChangeOthers, othersValue }) {
    const mainContainerRef = useRef();

    const handleClickOutside = (event) => {
        if (mainContainerRef.current && !mainContainerRef.current.contains(event.target)) {
            setOpenOthers(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={`w-full h-[100vh] fixed top-[50%] right-[50%] translate-y-[-50%] translate-x-[50%] bg-[rgba(0,0,0,0.5)] flex items-center justify-center`}>
            <div ref={mainContainerRef} className="w-[80%] bg-white flex flex-col items-center px-[2rem] py-[1rem] rounded-lg lg:w-[50%]">
                <h3 className="font-rowdies pb-[1rem]">Others</h3>
                <textarea onChange={onChangeOthers} value={othersValue} name="others" id="others" cols="30" rows="8" placeholder="Tell us your other needs..." className="border-2 p-[5px] md:w-[80%] lg:w-[60%]"></textarea>
                <button onClick={() => setOpenOthers(false)} className="text-xs border-2 border-[rgba(233,75,74,0.5)] rounded-md px-[2rem] py-[0.5rem] mt-[1rem] font-arimo font-bold md:text-sm">Save</button>
            </div>
        </div>
    );
}