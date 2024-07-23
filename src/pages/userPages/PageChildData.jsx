import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFetchData } from "../../services/hooks/useFetchData";
import { useSubmitForm } from "../../services/hooks/useSubmitForm";
import "../../styles/users/userChild.css";
import { useChild } from "../../context/ChildProvider";

const PageChildData = () => {
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data, loading, error } = useFetchData(
    "http://localhost:3000/api/children"
  );
  const {
    submitForm,
    loading: submitting,
    error: submitError,
  } = useSubmitForm("http://localhost:3000/api/childrenres");
  const {
    data: childData,
    loading: childLoading,
    error: childError,
  } = useChild();

  const location = useLocation();
  const navigate = useNavigate();

  const { evaluationtoken } = location.state || {};
  console.log("en pagechild", evaluationtoken);

  useEffect(() => {
    if (data && data.length > 0) {
      setOptions(data[0].categories);
    }
  }, [data]);

  const handleSelectedChange = (category, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  const validateForm = () => {
    return (
      firstName !== "" &&
      lastName !== "" &&
      Object.values(selectedOptions).every(
        (option) => option !== "" && option !== 0
      )
    );
  };

  const checkIfUserExists = async (firstName, lastName) => {
    const response = await fetch(
      `http://localhost:3000/api/childrenres?firstName=${firstName}&lastName=${lastName}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${evaluationtoken}`,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data.length > 0; // Devuelve true si el usuario existe, false si no.
    } else {
      throw new Error("Error checking user existence");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert("Por favor diligencie todos los campos");
      return;
    }

    const formData = {
      firstName,
      lastName,
      responses: selectedOptions,
    };

    try {
      setIsSubmitting(true);
      const userExists = await checkIfUserExists(firstName, lastName);

      if (userExists) {
        if (
          !window.confirm(
            "El usuario ya existe. ¿Desea sobrescribir los datos?"
          )
        ) {
          setIsSubmitting(false);
          return;
        }
      }

      const data = await submitForm(formData, evaluationtoken);

      if (data) {
        console.log("Enviado...", data);
        alert("Enviado");
        // Limpiar el formulario
        setFirstName("");
        setLastName("");
        setSelectedOptions({});
        navigate("/encuesta");
      } else {
        console.error("Error submitting user responses:", submitError);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // if (loading || childLoading) return <p>Loading...</p>;
  // if (error || childError) return <p>Error loading data: {error.message}</p>;

  return (
    <div className="user-container">
      <img
        src="src/styles/images/umbrellaFirst.png"
        className="logo2"
        alt="Logo paraguas"
      />
      <h2 className="user-title">Datos del Niño</h2>
      <div>Token Seleccionado: {evaluationtoken}</div>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="user-label" htmlFor="firstName">
                <h3>Nombres</h3>
              </label>
            </div>
            <input
              type="text"
              className="user-input"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <div>
              <label className="user-label" htmlFor="lastName">
                <h3>Apellidos</h3>
              </label>
            </div>
            <input
              type="text"
              className="user-input"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />

            {options.map((category) => (
              <div key={category._id}>
                <h3 className="user-label">{category.category}</h3>
                <select
                  className="user-select"
                  name={category.category}
                  value={selectedOptions[category.category] || ""}
                  onChange={(e) =>
                    handleSelectedChange(category.category, e.target.value)
                  }
                >
                  <option value="" disabled>
                    Elija una opción
                  </option>
                  {category.options.map((option) => (
                    <option key={option._id} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            <button
              type="submit"
              className="btn btn-admin btn-color"
              disabled={isSubmitting || submitting}
            >
              {isSubmitting || submitting ? "Enviando..." : "Enviar"}
            </button>
            {submitError && <p>Error submitting data: {submitError.message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PageChildData;
