import React from "react";

export const Payment = () => {
  const handleCheckout = () => {
    window.location.href = "/login";
  };
  return (
    <>
      <div>
        PAGO Y GENERACION DE TOKENS SI COMPRA SOLO LA ENCUESTA Y EL PAGO ES EXITOSO, LUEGO GENERA TOKENS Y VA AL USERTOKEN DIRECTAMENTE LOGUEADO Y ASIGNAR LOS TOKENS GENERADOS. Y/O PAGINA PARA LLENAR DATOS DE ENVIO SI COMPRA OTRA COSA DIFERENTE. 
      </div>
      <button className="btn btn-outline-primary" onClick={handleCheckout}>
        Finalizar
      </button>
    </>
  );
};
