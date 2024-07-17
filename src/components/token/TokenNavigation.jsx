// import { useNavigate } from "react-router-dom";
// import "../../styles/users/token.css";
// import { useFetchData } from "../../services/hooks/useFetchData";

// export const TokenNavigation = () => {
//   const { data: tokensData, loading: tokensLoading, error: tokensError } = useFetchData("http://localhost:3000/api/tokens");
  
//   const navigate = useNavigate();

//   const handleNavigate = () => {
//     navigate("/resultados", { state: { evaluationtoken: selectedToken } });
//   };
//   return (
//     <div className="navitoken-main-container">
//       <div className="btn-token-container">
//         <a href="/independencia">
//           <button className="btn btn-outline btn-token-navigation" disabled={false}>
//             Encuesta Inicial
//           </button>
//         </a>
//       </div>
//       <div className="btn-token-container">
//         <a href="/independencia">
//           <button className="btn btn-outline btn-token-navigation" disabled={false}> 
//             Encuesta Final
//           </button>
//           {/* HAY QUE CREAR CONDICIONAL PARA ACTIVAR BOTON SEGUN PRIMERA O SEGUNDA ENCUESTA */}
//         </a>
//       </div>
//       <div className="btn-token-container">
        
//           <button className="btn btn-outline btn-token-navigation" disabled={false} onClick={handleNavigate}>
//             Ver Resultados / Imprimir
//             {/* OJO QUE LA ENCUESTA DEBE ESTAR COMPLETA PARA ESCOGER ESTA OPCION */}
//           </button>
        
//       </div>
//     </div>
//   );
// };
