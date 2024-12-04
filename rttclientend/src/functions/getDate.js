
export default function getDate() {
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
    return formattedDate;
}