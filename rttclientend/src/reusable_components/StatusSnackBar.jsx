import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
export default function StatusSnackBar({ isSnackBar, onCloseSnackbar, actionType }) {
    let status;

    if (actionType === "inProgress") {
        status = '"In Progress"';
    } else if (actionType === "new") {
        status = '"New"';
    } else if (actionType === "completed") {
        status = '"Completed"';
    } else if (actionType === "declined") {
        status = '"Declined"';
    } else {
        status = 'default';
    }

    return (
        <div>
            <Snackbar open={isSnackBar} autoHideDuration={3000} onClose={onCloseSnackbar}>
                {actionType !== "delete" ? 

                    <Alert
                        onClose={onCloseSnackbar}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                    >
                        {`Status successfully changed to ${status}.`}
                    </Alert> :
                    <Alert
                        onClose={onCloseSnackbar}
                        variant="filled"
                        severity="success"
                        sx={{ width: '100%'}}
                    >
                        {`Request successfully deleted.`}
                    </Alert>
                }
            </Snackbar>
        </div>
    );
}
