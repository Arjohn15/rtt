import axios from "axios";

export default async function getRequestsData(sortType) {
    try {
        const requests = await axios.get("http://192.168.100.234:44324/api/RescueTeam");
        // SORT NEEDS OF EACH REQUESTER
        const sortedRequestsNeeds = requests.data.map(request => {
            const parsedLocation = JSON.parse(`${request.location}`);

            return {
                ...request, location: parsedLocation, needsIDs: request.needsIDs.split(",").map(need => {
                    if (need === "medicalAssistance-7") {
                        return { need: "Medical Assistance", mark: "red_mark.png", prioNumber: 12 }
                    } else if (need === "rescue-1") {
                        return {need: "Rescuer", mark: "orange_mark.png", prioNumber: 11 }
                    } else if (need === "foods-5") {
                        return { need: "Foods", mark: "blue_mark.png", prioNumber: 10 }
                    } else if (need === "tools-10") {
                        return { need: "Tools / Equipments", mark: "black_mark.png", prioNumber: 9 }
                    } else if (need === "shelter-6") {
                        return { need: "Shelter", mark: "brown_mark.png", prioNumber: 8 }
                    } else if (need === "sanitation-9") {
                        return { need: "Sanitation", mark: "yellow_mark.png", prioNumber: 7 }
                    } else if (need === "electricityPower-4") {
                        return { need: "Electric Power / Supply", mark: "purple_mark.png", prioNumber: 6 }
                    } else if (need === "boat-2") {
                        return { need: "Transportation", mark: "gray_mark.png", prioNumber: 5 }
                    } else if (need === "clothes-3") {
                        return { need: "Clothes", mark: "cyan_mark.png", prioNumber: 4 }
                    } else {
                        return { need: "Others", mark: "pink_mark.png", prioNumber: 3 }
                    }
                }).sort((a, b) => b.prioNumber - a.prioNumber)
            }
        })
        const addTotalPrioNum = sortedRequestsNeeds.map(req => {
            return { ...req, totalPrioNum: req.needsIDs.reduce((acc, item) => acc + item.prioNumber, 0) };
        });
        const sortedMostPrio = addTotalPrioNum.sort((a, b) => b.totalPrioNum - a.totalPrioNum);

        const reqDatasCopy = [...sortedMostPrio];

        let sortedData;
        switch (sortType) {
            case "newest":
                sortedData = reqDatasCopy.sort((a, b) => JSON.parse(b.timestamp) - JSON.parse(a.timestamp));
                break;
            case "oldest":
                sortedData = reqDatasCopy.sort((a, b) => JSON.parse(a.timestamp) - JSON.parse(b.timestamp));
                break;
            case "mostPrio":
                sortedData = reqDatasCopy.sort((a, b) => b.totalPrioNum - a.totalPrioNum);
                break;
            case "leastPrio":
                sortedData = reqDatasCopy.sort((a, b) => a.totalPrioNum - b.totalPrioNum);
                break;
            case "az":
                sortedData = reqDatasCopy.sort((a, b) => a.user_name.localeCompare(b.user_name));
                break;
            case "za":
                sortedData = reqDatasCopy.sort((a, b) => b.user_name.localeCompare(a.user_name));
                break;
            default:
                sortedData = reqDatasCopy; // In case no matching value
                break;
        }

        return sortedData; 
    } catch (error) {
        console.error("Error fetching requests data:", error.message);
        throw error; // Rethrow the error for external handling
    }
}
