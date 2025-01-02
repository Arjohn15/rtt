import axios from "axios";

export default async function utilizeDeleteRequester(id) {
    try {
        const response = await axios.delete(`http://192.168.100.234:44324/api/RescueTeam/${id}`);
        console.log(response.data); // Display the server's response
    } catch (error) {
        console.error("Error deleting item:", error);
    }
}