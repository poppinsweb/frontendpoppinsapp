import { AdminFilterSelectors } from "./AdminFilterSelectors";

export const RenderDataChild = () => {
  const {
    selectedGender,
    selectedYears,
    selectedMonths,
    selectedSocialClass,
    SelectedEdCenterType,
    selectedDegree,
  } = AdminFilterSelectors;
  return (
    <>
      <div className="render-data">
        <h3>Sexo: {selectedGender}</h3>
        <h3>Años: {selectedYears}</h3>
        <h3>Meses: {selectedMonths}</h3>
        <h3>Estrato: {selectedSocialClass}</h3>
        <h3>Centro Educativo: {SelectedEdCenterType}</h3>
        <h3>Nivel: {selectedDegree}</h3>
      </div>
    </>
  );
};
