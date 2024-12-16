import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function EvacuationInfo({ eC }) {
    const [open, setOpen] = React.useState(false);

    const { placeName, location } = eC;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <button onClick={handleClickOpen}>
                <span className="mr-[0.5rem] lg:text-base">
                    {placeName}
                </span>
                <InfoOutlinedIcon style={{ fontSize: "1rem" }} />
            </button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className="font-arimo text-sm p-[2rem] lg:text-base">
                    <p>
                        <span className="font-bold">Location:</span> {location}</p>
                </div>
            </Dialog>
        </React.Fragment>
    );
}