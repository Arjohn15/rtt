import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { MarkerContext } from './MarkerProvider';
import utilizeDeleteRequester from '../functions/utilizeDeleteRequester';

export default function DeleteReqDialog({ isDeleteDialog, setIsDeleteDialog, timestamp}) {
    const { toggleSnackbar, handleOpenSnackbar} = React.useContext(MarkerContext);

    const handleClose = () => {
        setIsDeleteDialog(false);
    };

    const handleDeleteReq = () => {
        setIsDeleteDialog(false);
        utilizeDeleteRequester(timestamp);
        handleOpenSnackbar(true);
        toggleSnackbar('delete');
    }

    return (
        <React.Fragment>
            <Dialog
                open={isDeleteDialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Do you want to delete this request?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose} sx={{ color: "black" }}>No</Button>
                    <Button onClick={handleDeleteReq} autoFocus color="error">
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
