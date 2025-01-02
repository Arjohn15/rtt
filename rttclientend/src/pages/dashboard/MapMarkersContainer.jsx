import { useState, useEffect } from "react";
import MapMarker from "./MapMarker";
import getRequestsData from "../../functions/getRequestsData";

function MapMarkersContainer() {
    const [reqDatas, setReqDatas] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        let intervalId;

        const fetchData = async () => {
            try {
                const data = await getRequestsData();
                if (JSON.stringify(data) !== JSON.stringify(reqDatas)) {
                    setReqDatas(data);
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
    }, [reqDatas]);

  return (
      <>
          {reqDatas ? reqDatas.map((req, index) => {
              return <MapMarker key={`${req.user_name}+${req.user_phoneNumber}+${index}`} req={req} id={`${req.user_name}+${req.user_phoneNumber}+${index}`} />
          }) : <p>{error}</p>
          }
      </>
  );
}

export default MapMarkersContainer;