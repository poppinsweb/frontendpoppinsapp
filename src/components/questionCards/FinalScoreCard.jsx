import { useState, useEffect } from "react";
import { getAllChildren } from "../../services/cardsConnectionAxios";

export default function FinalScoreCard({ finalScore }) {
  const [ dataChildren, setdataChildren ] = useState([])
  
  useEffect(() =>{
    const getAllData = async () => {
      const result = await getAllChildren()
      setdataChildren(result)
    }
    getAllData()
  },[])

  
  return (
    <div className='question-container'>
      <h2>Resultados</h2>
      <p>
        {dataChildren[2]}
      </p>
      
      {/* <ul>
        {dataChildren.map(child => <li key={idinfantes}>
          {child.data[1]}
        </li>)}
      </ul> */}
      {}
      
    </div>
  );
}
