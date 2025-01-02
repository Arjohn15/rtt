import axios from "axios";

export default async function getUpdateStatus(data, actionType) {
    try {
        // payload for the PUT request
        const payload = {
            status: actionType,
            timestamp: data.timestamp,
        };

        // Make the PUT request
        const response = await axios.put('http://192.168.100.234:44324/api/RescueTeam', payload);

        // Handle the success response
        console.log(response.data);
    } catch (error) {
        // Handle errors
        console.error("Error updating status:", error);
    }
}