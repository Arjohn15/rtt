import { useState } from "react";
import getTime from "../functions/getTime";
import getDate from "../functions/getDate";



function DateAndTime() {
    const [dateAndTime, setdateAndTime] = useState("");
    setInterval(() => {
        const currentDate = getDate();
        const currentTime = getTime();
        setdateAndTime(`${currentDate} ${currentTime}`);
    }, 1000)

    return (
        <>
            {dateAndTime}
        </>
  );
}

export default DateAndTime;