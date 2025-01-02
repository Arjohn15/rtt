import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function RequestsListSort({ sortType, onChangeSortType }) {

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel htmlFor="grouped-select" sx={{ fontSize: "0.75rem" }}>Sort</InputLabel>
                <Select onChange={(e) => onChangeSortType(e)} value={sortType} id="grouped-select" label="Grouping">
                    <MenuItem value={"newest"} sx={{ fontSize: "0.75rem" }}><p className="text-xs">Newest</p></MenuItem>
                    <MenuItem value={"oldest"} sx={{ fontSize: "0.75rem" }} ><p className="text-xs">Oldest</p></MenuItem>
                    <MenuItem value={"mostPrio"} sx={{ fontSize: "0.75rem" }}><p className="text-xs">Most priority</p></MenuItem>
                    <MenuItem value={"leastPrio"} sx={{ fontSize: "0.75rem" }}><p className="text-xs">Least priority</p></MenuItem>
                    <MenuItem value={"az"} sx={{ fontSize: "0.75rem" }}><p className="text-xs">A-Z</p></MenuItem>
                    <MenuItem value={"za"} sx={{ fontSize: "0.75rem" }}><p className="text-xs">Z-A</p></MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
