import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useFetchData } from "../../services/hooks/useFetchData";
import "../../styles/users/token.css";

export const TokenBox = () => {
  const { user } = useAuth();
  const {
    data: tokensData,
    loading: tokensLoading,
    error: tokensError,
  } = useFetchData("http://localhost:3000/api/tokens");

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/personales");
  };

  const userEvaluationTokens = tokensData?.tokens.filter(
    (token) => token.userId === user.id
  );

  if (tokensLoading) return <p>Loading...</p>;
  if (tokensError) return <p>Error loading tokens data: {error}</p>;
  return (
    <>
      {user.rol === "admin" ? (
        <div className="box-tokens-container-admin">
          <h2 className="code-title">Token</h2>
          <div>Encuesta: {user.usuario_token}</div>
          <button className="btn btn-color">Crear Token</button>
        </div>
      ) : (
        <div className="box-tokens-container">
          <h2 className="code-title">Token</h2>
          <div className="radio-token-container">
            <label key={user.id} className="token-lable">
              {user.evaluationtoken}
              {userEvaluationTokens.map((token, index) => (
                <div key={index}>{token.evaluationToken}</div>
              ))}
            </label>

            <button className="btn btn-color" onClick={handleNavigate}>
              Datos del Niño
            </button>
          </div>
        </div>
      )}
    </>
  );
};
