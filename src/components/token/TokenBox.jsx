import React, { useState } from "react";
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
  const [selectedToken, setSelectedToken] = useState("");

  const handleNavigatePersonales = () => {
    navigate("/personales", { state: { evaluationtoken: selectedToken } });
  };

  const handleNavigateResult = () => {
    navigate("/resultados", { state: { evaluationtoken: selectedToken } });
  };

  const handleNavigateEvaluation = () => {
    navigate("/encuesta", { state: { evaluationtoken: selectedToken } });
  };

  const userEvaluationTokens = tokensData?.tokens.filter(
    (token) => token.userId === user.id
  );

  if (tokensLoading) return <p>Loading...</p>;
  if (tokensError)
    return <p>Error loading tokens data: {tokensError.message}</p>;

  const handleTokenChange = (event) => {
    const newToken = event.target.value;
    setSelectedToken(newToken);
    console.log(newToken);
  };

  return (
    <>
      <div className="box-tokens-container">
        <h2 className="code-title">Token</h2>
        <div className="radio-token-container">
          {userEvaluationTokens.map((token, index) => (
            <label key={index} className="token-label">
              <input
                className="radio-token"
                type="radio"
                name="token"
                value={token.evaluationToken}
                checked={selectedToken === token.evaluationToken}
                onChange={handleTokenChange}
              />
              {token.evaluationToken}
            </label>
          ))}
          <div className="btn-token">
            <button
              className="btn btn-color"
              onClick={handleNavigatePersonales}
              disabled={!selectedToken}
            >
              Datos del Niño
            </button>
          </div>
        </div>
      </div>
      <div className="navitoken-main-container">
        <div className="btn-token-container">
          <button
            className="btn btn-outline btn-token-navigation"
            onClick={handleNavigateEvaluation}
            disabled={!selectedToken}
          >
            Encuesta Inicial
          </button>
        </div>
        <div className="btn-token-container">
          <button
            className="btn btn-outline btn-token-navigation"
            onClick={handleNavigateEvaluation}
            disabled={!selectedToken}
          >
            Encuesta Final
          </button>
          {/* HAY QUE CREAR CONDICIONAL PARA ACTIVAR BOTON SEGUN PRIMERA O SEGUNDA ENCUESTA */}
        </div>
        <div className="btn-token-container">
          <button
            className="btn btn-outline btn-token-navigation"
            disabled={!selectedToken}
            onClick={handleNavigateResult}
          >
            Ver Resultados / Imprimir
            {/* OJO QUE LA ENCUESTA DEBE ESTAR COMPLETA PARA ESCOGER ESTA OPCION */}
          </button>
        </div>
      </div>
    </>
  );
};
