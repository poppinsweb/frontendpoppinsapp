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

  const handleNavigate = () => {
    navigate("/personales", { state: { token: selectedToken } });
  };

  const userEvaluationTokens = tokensData?.tokens.filter(
    (token) => token.userId === user.id
  );

  if (tokensLoading) return <p>Loading...</p>;
  if (tokensError)
    return <p>Error loading tokens data: {tokensError.message}</p>;

  const handleTokenChange = (event) => {
    setSelectedToken(event.target.value);
    console.log(selectedToken);
  };

  return (
    <>
      <div className="box-tokens-container">
        <h2 className="code-title">Token</h2>
        <div className="radio-token-container">
          {userEvaluationTokens.map((token, index) => (
            <label key={index} className="token-label">
              <input
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
              onClick={handleNavigate}
              disabled={!selectedToken}
            >
              Datos del Niño
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
