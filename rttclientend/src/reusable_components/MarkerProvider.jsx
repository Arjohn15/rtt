// Create a Context
import { useState, createContext } from 'react';

const MarkerContext = createContext();

const MarkerProvider = ({ children }) => {
    const [markerID, setMarkerID] = useState('');
    const [selectedMarker, setSelectedMarker] = useState({
        lat: 14.5176,
        lng: 121.0509,
    });
    const [isSnackbar, setIsSnackbar] = useState(false);
    const [snackbarInfo, setSnackbarInfo] = useState("");

    const toggleMarker = (id) => {
        setMarkerID(id);
    };

    const toggleSelectedMarker = (focPos) => {
        setSelectedMarker(focPos)
    }

    const toggleSnackbar = (actionType) => {
        setSnackbarInfo(actionType);    
    }

    const handleOpenSnackbar = () => {
        setIsSnackbar(true);
    }
    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setIsSnackbar(false);
    };

   
    return (
        <MarkerContext.Provider value={{ markerID, toggleMarker, selectedMarker, toggleSelectedMarker, isSnackbar, snackbarInfo, toggleSnackbar, handleCloseSnackbar, handleOpenSnackbar }}>
            {children}
        </MarkerContext.Provider>
    );
};

export { MarkerContext, MarkerProvider };
