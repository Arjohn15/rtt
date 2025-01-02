import { useContext } from "react";
import ColorCodingLabels from "./ColorCodingLabels";
import RequestsList from "./RequestsList";
import { MarkerContext } from "../../reusable_components/MarkerProvider";
import StatusSnackbar from "../../reusable_components/StatusSnackBar";

function MapInfo() {
    const { isSnackbar, snackbarInfo, handleCloseSnackbar } = useContext(MarkerContext);
    return (
        <div>
            <ColorCodingLabels />
            <div className="grid grid-cols-2 gap-x-10 mb-[5rem]">
                <RequestsList listCategory="NEW REQUESTS" listStatus="new" />
                <RequestsList listCategory="IN PROGRESS REQUESTS" listStatus="inProgress" />
                <RequestsList listCategory="COMPLETED REQUESTS" listStatus="completed" />
                <RequestsList listCategory="DECLINED REQUESTS" listStatus="declined" />
            </div>
            <StatusSnackbar isSnackBar={isSnackbar} onCloseSnackbar={handleCloseSnackbar} actionType={snackbarInfo} />
        </div>
    );
}

export default MapInfo;