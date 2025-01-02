import { Marker, OverlayView } from "@react-google-maps/api";
import { useContext } from "react";
import { MarkerContext } from "../../reusable_components/MarkerProvider";
import CloseIcon from '@mui/icons-material/Close';
function MapMarker({ req }) {
    const {
        location,
        needsIDs,
        user_name,
        user_phoneNumber,
        user_additionalDescription,
        others,
        timestamp,
    } = req;
    const { markerID, toggleMarker, selectedMarker, toggleSelectedMarker } = useContext(MarkerContext);

    const handleMarkerClick = (focPos) => {
        toggleSelectedMarker(focPos);
        toggleMarker(`${user_name}-${user_phoneNumber}-${timestamp}`);
    };

    const handleMarkerClose = () => {
        toggleSelectedMarker(null);
        toggleMarker("");
    };

    return (
        <>
            <Marker
                position={location}
                icon={{
                    url: `public/images/map_marks/${needsIDs[0].mark}`,
                    scaledSize: new window.google.maps.Size(50, 50),
                }}
                onClick={() => handleMarkerClick(location)}
            />

            {markerID === `${user_name}-${user_phoneNumber}-${timestamp}` && selectedMarker && (
                <OverlayView
                    position={selectedMarker}
                    mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                >
                    <div className="w-[10rem] absolute bg-white rounded-lg py-[1rem] px-[1rem] translate-x-[-50%] overflow-x-hidden">
                        <button
                            style={{
                                position: "absolute",
                                top: "5px",
                                right: "5px",
                                background: "transparent",
                                border: "none",
                                cursor: "pointer",
                                fontWeight: "bold",
                            }}
                            onClick={handleMarkerClose}
                        >
                            <CloseIcon />
                        </button>
                        <ul className="font-arimo">
                            <li className="py-[5px]">
                                <div className="font-bold py-[5px]">Name: </div>
                                {user_name}
                            </li>
                            <li className="py-[5px]">
                                <span className="font-bold py-[5px]">Phone Number: </span>
                                {user_phoneNumber}
                            </li>
                            <li className="py-[5px]">
                                <span className="font-bold py-[5px]">Needs: </span>
                                {needsIDs.map((need) => need.need).join(", ")}
                            </li>
                            {others !== "" && (
                                <li className="py-[5px]">
                                    <span className="font-bold py-[5px]">Other needs: </span>
                                    {others}
                                </li>
                            )}
                            <li className="py-[5px]">
                                <span className="font-bold py-[5px]">Additional Description: </span>
                                {user_additionalDescription}
                            </li>
                        </ul>
                    </div>
                </OverlayView>
            )}
        </>
    );
}

export default MapMarker;
