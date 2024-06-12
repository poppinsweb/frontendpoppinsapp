import React from "react";
import { useFetchData } from "../../services/hooks/useFetchData";
import { useState, useEffect } from "react";
import "../../styles/users/userChild.css";

const PageChildData = () => {
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const { data, loading, error } = useFetchData("http://localhost:3000/api/children");

  useEffect(() => {
    if (data && data.length > 0) {
      setOptions(data[0].categories);
      // INICIALIZA SELECTEDOPTIONS CON LAS CATEGORIAS
      const initialSelectedOptions = {};
      data[0].categories.forEach(category => {
        initialSelectedOptions[category.category] = ''; // ASIGNA INICIALMENTE UN VALOR VACIO
      });
      setSelectedOptions(initialSelectedOptions);
    }
  }, [data]);

  const handleSelectedChange = (category, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  const validateForm = () => {
    // VERIFICA QUE TODOS LOS CAMPOS ESTEN DILIGENCIADOS
    return Object.values(selectedOptions).every((option) => option !== "");
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Selected options: ', selectedOptions);
    
    // AQUI SE ENVIAN LOS DATOS AL BACKEND
    if (!validateForm()) {
      alert('Por favor diligencie todos los campos');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/childrenres', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ responses: selectedOptions }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit children data responses');
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error submitting user responses:', error);
    }
  };

  return (
    <div className=" user-container">
      <img
        src="src/styles/images/umbrellaFirst.png"
        className="logo2"
        alt="Logo paraguas"
      />
      <h2 className="user-title">Datos del Niño</h2>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            {options.map((category) => (
              <div key={category._id}>
                <h3 className="user-label">{category.category}</h3>
                <select 
                  className="user-select" 
                  name={category.category}
                  value={selectedOptions[category.category] || ''}
                  onChange={(e) => handleSelectedChange(category.category, e.target.value)}
                  >
                  <option value="" disabled>Elija una opción</option>
                  {category.options.map((option) => (
                    <option key={option._id} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            <button type="submit" className="btn btn-admin btn-color">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PageChildData;
