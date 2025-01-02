export default function getTimestamp(timestampString) {
    // Timestamp in milliseconds
    const timestamp = JSON.parse(timestampString);

    // Create a new Date object
    const date = new Date(timestamp);

    // Convert to a human-readable format
    const formattedDate = date.toLocaleString();

    return formattedDate  // Example output: "12/31/2023, 11:00:00 PM"
}