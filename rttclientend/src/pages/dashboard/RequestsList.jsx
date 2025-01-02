import { useState, useEffect, useRef } from "react";
import getRequestsData from "../../functions/getRequestsData";
import getTimestamp from "../../functions/getTimestamp";
import AdminAction from "./AdminActions";
import RequestsListSort from "./RequestsListSort";
function RequestsList({ listCategory, listStatus }) {
    const [reqDatas, setReqDatas] = useState([]);
    const [error, setError] = useState(null);
    const prevReqDatasRef = useRef([]);
    const [sortType, setSortType] = useState("mostPrio");

    const handleChangeSortType = (e) => {
        setSortType(e.target.value)
    } 
    useEffect(() => {
        let intervalId;

        const fetchData = async () => {
            try {
                const data = await getRequestsData(sortType);
                if (JSON.stringify(data) !== JSON.stringify(prevReqDatasRef.current)) {
                    setReqDatas(data);
                    prevReqDatasRef.current = data;
                }
            } catch (err) {
                setError(err.message || "Failed to fetch requests.");
            }
        };
        fetchData();
        intervalId = setInterval(fetchData, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [sortType]);

    if (reqDatas) {

        return (
            <div className="font-arimo mt-[3rem]">
                <div>
                    <div className="flex justify-between pr-[2rem]">
                        <h2 className="font-rowdies text-red py-[1rem]">{listCategory}</h2>
                        <RequestsListSort sortType={sortType} onChangeSortType={handleChangeSortType} />
                    </div>
                    <div className="h-[20rem] overflow-y-scroll border-2 rounded-lg">
                        <table className="w-full text-xs text-center">
                            <thead className="sticky top-0 bg-white z-10 shadow-lg">
                                <tr>
                                    <th className="py-[1rem]">NAME</th>
                                    <th>PHONE N0.</th>
                                    <th>DATE</th>
                                    <th>STATUS</th>
                                    <th>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reqDatas.map(req => {
                                    const timestamp = getTimestamp(req.timestamp);
                                    if (req.status === listStatus) {
                                    return <tr key={`${req.user_name}-${req.timestamp}`} className="relative border-b-2">
                                        <td className="max-w-28 text-ellipsis overflow-hidden px-[1rem]">
                                            {req.user_name}
                                        </td>
                                        <td>{req.user_phoneNumber}</td>
                                        <td>{timestamp}</td>
                                        <td>{req.status === "new" ? "New" : req.status === "inProgress" ? "In Progress" : req.status === "completed" ? "Completed" : req.status === "declined" ? "Declined" : null}</td>
                                        <td className="w-[120px] flex justify-self-center"> <AdminAction user_name={req.user_name} user_phoneNumber={req.user_phoneNumber} location={req.location} timestamp={req.timestamp} listStatus={listStatus} /></td>
                                        <td className="absolute top-[5px] left-[5px]">
                                            <ul className="flex">
                                                {req.needsIDs.map((need) => {

                                                    return <li key={need.need}>
                                                        <img src={`images/map_marks/${need.mark}`} alt={need.need} width={15} />
                                                    </li>
                                                })}
                                            </ul>
                                        </td>
                                    </tr>
                                    }
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )

    } else {
        return <p>{error}</p>
    }
}

export default RequestsList;