import "../../styles/users/result.css";
import { useLatestChild } from "../../context/ChildContext";
import { useEffect, useState } from "react";

export const FinalChildData = () => {
  const [childAge, setChildAge] = useState({ years: 0, months: 0 });
  const { latestChild, updateLatestChild } = useLatestChild();

  // CALCULA LA EDAD EN ANIOS Y MESES
  useEffect(() => {
    const yearsMonthsCalc = (birthDay, todaysDay) => {
      const birthDayObj = new Date(birthDay);
      const todaysDayObj = new Date(todaysDay);

      const milisecsDiff = todaysDayObj - birthDayObj;

      const years = Math.floor(milisecsDiff / (365.25 * 24 * 60 * 60 * 1000));
      const remainingMilisecs = milisecsDiff % (365.25 * 24 * 60 * 60 * 1000);
      const months = Math.floor(
        remainingMilisecs / (30.44 * 24 * 60 * 60 * 1000)
      );
      setChildAge({ years, months });
    };

    if (latestChild?.fecha_nacimiento && latestChild?.fecha_actual) {
      yearsMonthsCalc(latestChild.fecha_nacimiento, latestChild.fecha_actual);
    }
  }, [latestChild]);
  return (
    <div>
      <div className="header-container">
        <p>
          <strong>Nombre: </strong>
          {latestChild?.nombres} {latestChild?.apellidos}
        </p>
        <p>
          <strong>Edad: </strong>
          {childAge.years} años {childAge.months} meses
        </p>
        <p>
          <strong>Sexo: </strong>
          {latestChild?.sexo}
        </p>
        <p>
          <strong>Grado: </strong>
          {latestChild?.grado}
        </p>
        <p>
          <strong>Código: </strong>
          {latestChild?.codigo_identificador}
        </p>
      </div>
    </div>
  );
};
