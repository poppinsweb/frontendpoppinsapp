import React, { useState } from "react";
import { useFetchData } from "../../services/hooks/useFetchData";

export const AdminToken = () => {
  const {
    data: usersTokens,
    loading: tokensLoading,
    error: tokensError,
  } = useFetchData("http://localhost:3000/api/tokens");
  const [error, setError] = useState(null);

  const handleCreate = async (email, userId) => {
    try {
      const response = await fetch("http://localhost:3000/api/create-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, userId, childId: "childId_placeholder" }), // Actualizar este valor según sea necesario
      });

      if (!response.ok) {
        throw new Error("Error creating token");
      }

      const result = await response.json();
      console.log("Token created:", result.token);
    } catch (err) {
      console.error("Error:", err);
      setError(err.message);
    }
  };

  const handleDelete = async (tokenId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/delete-token/${tokenId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Error eliminando evaluationtoken");
      }

      const result = await response.json();
      console.log("Evaluation token eliminado:", result.message);
      // Opcional: actualizar la UI para reflejar la eliminación del token
    } catch (err) {
      console.error("Error:", err);
      setError(err.message);
    }
  };

  if (tokensLoading) return <p>Loading...</p>;
  if (tokensError) return <p>Error loading tokens data: {tokensError.message}</p>;
  if (error) return <p>Error: {error}</p>;

  // Ordenar los tokens por email alfabéticamente
  const sortedTokens = usersTokens.tokens.sort((a, b) => a.email.localeCompare(b.email));

  return (
    <>
      <div>
        <h2>TOKENS</h2>
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>Email</th>
              <th>Token</th>
              <th>Crear Token</th>
              <th>Eliminar Token</th>
            </tr>
          </thead>
          <tbody>
            {sortedTokens.map((token) => (
              <tr key={token._id}>
                <td>{token.email}</td>
                <td>{token.evaluationToken}</td>
                <td>
                  <button
                    className="btn btn-outline-success"
                    onClick={() => handleCreate(token.email, token.userId)}
                  >
                    Crear
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => handleDelete(token._id)}
                  >
                    Borrar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
