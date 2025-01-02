import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectListCategory({category, onSelectCategory}) {

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel htmlFor="grouped-select" sx={{ fontSize: "0.75rem" }}>Sort</InputLabel>
                <Select onChange={onSelectCategory} value={category} id="grouped-select" label="Grouping">
                    <MenuItem value={"new"} sx={{ fontSize: "0.75rem" }}><p className="text-xs">New Requests</p></MenuItem>
                    <MenuItem value={"inProgress"} sx={{ fontSize: "0.75rem" }} ><p className="text-xs">In Progress Requests</p></MenuItem>
                    <MenuItem value={"completed"} sx={{ fontSize: "0.75rem" }}><p className="text-xs">Completed Requests</p></MenuItem>
                    <MenuItem value={"declined"} sx={{ fontSize: "0.75rem" }}><p className="text-xs">Declined Requests</p></MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
