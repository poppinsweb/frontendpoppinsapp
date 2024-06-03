import { useEffect, useState } from "react";
import axios from "axios";

const useGetIndependence = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const URL = "http://localhost:3000/evaluations/independence";
        const request = await axios.get(URL);
        setData(request.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return data;
};

export { useGetIndependence };
