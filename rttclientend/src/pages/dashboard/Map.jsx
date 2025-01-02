import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useContext} from "react";
import MapMarkersContainer from "./MapMarkersContainer";
import { MarkerContext } from "../../reusable_components/MarkerProvider";

function Map() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyAlgWHolOJGfQ1H0_8g2y_7Sk2HZQIZxVs",
    });

    const { selectedMarker} = useContext(MarkerContext);

    const containerStyle = {
        width: "100%",
        height: "500px",
        justifySelf: "center",
    }


    return isLoaded ? (
        <div className="m-[1rem]">
            <GoogleMap mapContainerStyle={containerStyle} center={selectedMarker} zoom={13} options={{ mapTypeId: "hybrid" }}>
                <MapMarkersContainer  />
            </GoogleMap>
        </div>
    ) : (
        <div>Loading...</div>
    )
}

export default Map;