import { useRef, useEffect } from "react";
export default function LocationAccess({ setUserInputs, userInputs, setLocDisp }) {
    const mainContainerRef = useRef();

    const handleClickOutside = (event) => {
        if (mainContainerRef.current && !mainContainerRef.current.contains(event.target)) {
            setLocDisp(false);
        }
    };

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                setUserInputs({ ...userInputs, location: { lat: pos.coords.latitude, lng: pos.coords.longitude } });
                setLocDisp(false);
            },
                (err) => {
                    if (err.code === err.PERMISSION_DENIED) {
                        console.log('User denied location access.');
                        alert("Please allow access to your location to proceed")
                    } else {
                        console.error('Error obtaining location:', err);
                    }
                }
            )
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={`w-full h-[100vh] fixed top-[50%] right-[50%] translate-y-[-50%] translate-x-[50%] bg-[rgba(0,0,0,0.5)] flex items-center justify-center`}>
            <div ref={mainContainerRef} className="w-[80%] bg-white flex flex-col items-center px-[2rem] py-[1rem] rounded-lg lg:w-[50%]">
                <p>Please allow access to your location before proceeding</p>
            </div>
        </div>
    );
}