export default function getTime() {

    const date = new Date();
    const timeOptions = { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true, timeZone: "Asia/Manila" }
    const timeString = date.toLocaleTimeString("en-US", timeOptions);
    const formattedTime = `${timeString} (PH Time)`;

    return formattedTime;
}


