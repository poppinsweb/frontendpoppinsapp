import React from "react";

export const Payment = () => {
  const handleCheckout = () => {
    window.location.href = "/login";
  };
  return (
    <>
      <div>
        PAGO Y GENERACION DE TOKENS SI EL PAGO ES EXITOSO, GENERA TOKENS Y VA A REGISTRO PARA
        ASIGNAR LOS TOKENS GENERADOS
      </div>
      <button className="btn btn-outline-primary" onClick={handleCheckout}>
        Finalizar
      </button>
    </>
  );
};
