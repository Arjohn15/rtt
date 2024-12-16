import Map from "./Map";
import MapInfo from "./MapInfo";

function DashBoard() {
    return (
        <div className="grid grid-cols-3 m-[1rem]cd rtt">
            <Map />
            <MapInfo/>
        </div>
    );
}

export default DashBoard;