import { useState, useEffect } from "react";
// import { getAllChildren } from "../../services/cardsConnectionAxios";

export default function FinalScoreCard() {
  const [ dataChildren, setDataChildren ] = useState([])
  
  useEffect(() =>{
    const getAllData = async () => {
      const result = await getAllChildren()
      console.log(result.data)
      setDataChildren(result.data)
    }
    getAllData()
  },[])
  
  return (
    <div className='question-container'>
      <h2>Resultados</h2>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>LASTNAME</th>
          </tr>
        </thead>
        <tbody>
          {
            dataChildren.map( ({idinfantes, name, lastName}) => {
              return(
                <tr key={idinfantes}>
                  <td>{idinfantes}</td> 
                  <td>{name}</td> 
                  <td>{lastName}</td> 
                </tr>
              )
            } )
          }
        </tbody>
      </table>
    </div>
  );
}
