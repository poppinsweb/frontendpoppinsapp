import { useEffect, useState } from "react";
import axios from "axios";

const useGetEvaluations = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async() => {
      try {
        const URL = "http://localhost:3000/evaluations";
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

export { useGetEvaluations };
