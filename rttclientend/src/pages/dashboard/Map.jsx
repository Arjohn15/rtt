import { GoogleMap, Marker, useJsApiLoader, InfoWindow } from "@react-google-maps/api";
import { useState } from "react";

function Map() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyAlgWHolOJGfQ1H0_8g2y_7Sk2HZQIZxVs",
    });

    const containerStyle = {
        width: "100%",
        height: "500px",
        justifySelf: "center",
    }

    const center = {
        lat: 14.5176,
        lng: 121.0509,
    };

    const [selectedMarker, setSelectedMarker] = useState(null);

    const handleMarkerClick = () => {
        setSelectedMarker(center); 
    };

    const handleInfoWindowClose = () => {
        setSelectedMarker(null);
    };
    return isLoaded ? (
        <div className="col-span-2">
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13} options={{ mapTypeId: "hybrid" }}>
                <Marker
                    position={center}
                    icon={{
                        url: `public/images/map_marks/red_mark.png`, 
                        scaledSize: new window.google.maps.Size(50, 50), 
                    }}
                    onClick={handleMarkerClick}
                />

                {selectedMarker && (
                    <InfoWindow position={selectedMarker} onCloseClick={handleInfoWindowClose}>
                        <div>
                            <h4>Taguig City</h4>
                            <p>
                                Taguig City is located in Metro Manila, Philippines. It is known for BGC and many business hubs.
                            </p>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </div>
    ) : (
        <div>Loading...</div>
    )
}

export default Map;