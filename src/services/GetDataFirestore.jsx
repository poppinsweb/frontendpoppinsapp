import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { auth, db } from "./firebase";
import { useState } from "react";

const GetDataFirestore = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState();
    // const [userRol, setUserRol] = useState();
    
    // const uid = auth.currentUser.uid;
    // console.log(uid)
    
    const getData = async () => {
        try {
          const q = query(collection(db, "usuarios"));
          const querySnapshot = await getDocs(q);
          const datos = querySnapshot.docs.map((doc) => doc.data());
          setData(datos);
        } catch (error) {
          console.log(error);
          setError(error.code);
        } 
    }
    return { data, error, getData };
}

export default GetDataFirestore
