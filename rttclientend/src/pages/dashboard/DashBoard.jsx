import { MarkerProvider } from "../../reusable_components/MarkerProvider";
import Map from "./Map";
import MapInfo from "./MapInfo";
function DashBoard() {
    const isAuth = sessionStorage.getItem("authToken");

    if (isAuth === "allowThisDude157911") {
        return (
            <MarkerProvider>
                <div className="m-[1rem] w-[80%] justify-self-center">
                    <Map />
                    <MapInfo />
                </div>
            </MarkerProvider>
        );
    } else {
        window.location.href = '/adminlogin';
    }
}

export default DashBoard;