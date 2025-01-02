import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useContext, useState } from "react";
import { MarkerContext } from '../../reusable_components/MarkerProvider';
import getUpdateStatus from '../../functions/getUpdateStatus';
import DeleteReqDialog from '../../reusable_components/DeleteReqDialog';
export default function AdminActions({ user_name, user_phoneNumber, timestamp, location, listStatus}) {
    const { toggleMarker, toggleSelectedMarker, handleOpenSnackbar, toggleSnackbar } = useContext(MarkerContext);
    const [actionType, setActionType] = useState("");
    const [isDeleteDialog, setIsDeleteDialog] = useState(false);

    const handleChangeAction = (e) => {

        const prePayload = { timestamp: timestamp };
        if (e.target.value === "inMap") {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
            toggleMarker(`${user_name}-${user_phoneNumber}-${timestamp}`);
            toggleSelectedMarker(location);
            setActionType("");
        } else if (e.target.value === "inProgress") {
            handleOpenSnackbar(true);
            getUpdateStatus(prePayload, "inProgress");
            toggleSnackbar('inProgress');
        } else if (e.target.value === "new") {
            handleOpenSnackbar(true);
            getUpdateStatus(prePayload, "new");
            toggleSnackbar('new');
        } else if (e.target.value === "completed") {
            handleOpenSnackbar(true);
            getUpdateStatus(prePayload, "completed");
            toggleSnackbar('completed');
        } else if (e.target.value === "declined") {
            handleOpenSnackbar(true);
            getUpdateStatus(prePayload, "declined");
            toggleSnackbar('declined');
        } else if (e.target.value === "delete") {
            setIsDeleteDialog(true);
        }else {
            toggleMarker("");
        }

    }
    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel htmlFor="grouped-select" sx={{ fontSize: "0.75rem" }}>Action</InputLabel>
                <Select onChange={handleChangeAction} value={actionType} id="grouped-select" label="Grouping">
                    <ListSubheader sx={{ fontSize: "0.75rem", fontWeight: "bold", opacity: "0.6" }} >VIEW</ListSubheader>
                    <MenuItem value="none" sx={{ fontSize: "0.75rem" }}><p className="text-xs">None</p></MenuItem>
                    <MenuItem value={"inMap"} sx={{ fontSize: "0.75rem" }}><p className="text-xs">In map</p></MenuItem>
                    <ListSubheader sx={{ fontSize: "0.75rem", opacity: "0.6" }} >CHANGE STATUS</ListSubheader>
                    <MenuItem value={"new"} sx={{ fontSize: "0.75rem" }} disabled={listStatus === "new"}><p className="text-xs">New</p></MenuItem>
                    <MenuItem value={"inProgress"} sx={{ fontSize: "0.75rem" }} disabled={listStatus === "inProgress"}><p className="text-xs">In progress</p></MenuItem>
                    <MenuItem value={"completed"} sx={{ fontSize: "0.75rem" }} disabled={listStatus === "completed"}><p className="text-xs">Completed</p></MenuItem>
                    <MenuItem value={"declined"} sx={{ fontSize: "0.75rem" }} disabled={listStatus === "declined"}><p className="text-xs">Decline</p></MenuItem>
                    {listStatus === "declined" || listStatus === "completed" ?
                        <MenuItem value={"delete"} sx={{ fontSize: "0.75rem" }}><p className="text-xs text-red font-bold">Delete</p></MenuItem> : null
                    }

                </Select>
            </FormControl>

            <DeleteReqDialog isDeleteDialog={isDeleteDialog} setIsDeleteDialog={setIsDeleteDialog} timestamp={timestamp} />
        </div>
    );
}
