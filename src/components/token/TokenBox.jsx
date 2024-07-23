import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useFetchData } from "../../services/hooks/useFetchData";
import "../../styles/users/token.css";

export const TokenBox = () => {
  const [selectedToken, setSelectedToken] = useState("");
  const [isEvaluationCompleted, setIsEvaluationCompleted] = useState(false);
  const [tokenUsageCount, setTokenUsageCount] = useState(0);
  const { user } = useAuth();
  const {
    data: tokensData,
    loading: tokensLoading,
    error: tokensError,
  } = useFetchData("http://localhost:3000/api/tokens");
  const {
    data: evaluationsData,
    loading: evaluationsLoading,
    error: evaluationsError,
  } = useFetchData("http://localhost:3000/api/completevaluations");

  const navigate = useNavigate();

  useEffect(() => {
    if (selectedToken) {
      // Filtrar el token seleccionado
      const selectedTokenData = tokensData?.tokens.find(
        (token) => token.evaluationToken === selectedToken
      );
      
      if (selectedTokenData) {
        setTokenUsageCount(selectedTokenData.usageCount);
      }

      // Verificar si la evaluación está completa
      const evaluation = evaluationsData?.find((ev) => ev.evaluationtoken === selectedToken
      );
      setIsEvaluationCompleted(!!evaluation?.responses?.length);
    }
  }, [selectedToken, tokensData, evaluationsData]);

  const userEvaluationTokens = tokensData?.tokens.filter(
    (token) => token.userId === user.id
  );

  if (tokensLoading || evaluationsLoading) return <p>Loading...</p>;
  if (tokensError) return <p>Error loading tokens data: {tokensError.message}</p>;
  if (evaluationsError) return <p>Error loading evaluations data: {evaluationsError.message}</p>;

  const handleTokenChange = (event) => {
    const newToken = event.target.value;
    setSelectedToken(newToken);
  };

  const handleNavigatePersonales = () => {
    navigate("/personales", { state: { evaluationtoken: selectedToken } });
  };

  const handleNavigateResult = () => {
    navigate("/resultados", { state: { evaluationtoken: selectedToken } });
  };

  const handleNavigateEvaluation = () => {
    navigate("/encuesta", { state: { evaluationtoken: selectedToken } });
  };

  const isInitialEvaluationDisabled = !selectedToken || tokenUsageCount >= 1;
  const isFinalEvaluationDisabled = !selectedToken || tokenUsageCount < 1;
  const isResultDisabled = !selectedToken || tokenUsageCount < 1;

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
            disabled={isInitialEvaluationDisabled}
          >
            Evaluación Inicial
          </button>
        </div>
        <div className="btn-token-container">
          <button
            className="btn btn-outline btn-token-navigation"
            onClick={handleNavigateEvaluation}
            disabled={isFinalEvaluationDisabled}
          >
            Evaluación Final
          </button>
        </div>
        <div className="btn-token-container">
          <button
            className="btn btn-outline btn-token-navigation"
            disabled={isResultDisabled}
            onClick={handleNavigateResult}
          >
            Ver Resultados / Imprimir
          </button>
        </div>
      </div>
    </>
  );
};
