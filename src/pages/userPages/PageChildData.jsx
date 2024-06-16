import React from "react";
import { useState, useEffect } from "react";
import {useFetchData}  from "../../services/hooks/useFetchData";
import {useSubmitForm} from "../../services/hooks/useSubmitForm";
import "../../styles/users/userChild.css";

const PageChildData = () => {
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { data, loading, error } = useFetchData( "http://localhost:3000/api/children");
  const { submitForm, loading: submitting, error: submitError } = useSubmitForm("http://localhost:3000/api/childrenres")

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

    console.log("Form data to submit:", formData);

    const data = await submitForm(formData);
    if (data) {
      console.log(data);
    } else {
      console.error('Error submitting user responses:', submitError);
    }
    console.log("Selected options: ", data);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div className="user-container">
      <img
        src="src/styles/images/umbrellaFirst.png"
        className="logo2"
        alt="Logo paraguas"
      />
      <h2 className="user-title">Datos del Niño</h2>
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
            <button type="submit" className="btn btn-admin btn-color" disabled={submitting}>
              {submitting ? "Enviando..." : "Enviar"}
            </button>
            {submitError && <p>Error submitting data: {submitError}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PageChildData;
