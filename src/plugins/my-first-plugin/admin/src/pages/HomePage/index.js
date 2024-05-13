import React, { useState } from 'react';

const NewFormUnica = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    fetch("http://localhost:1337/api/polos", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Meu Formulário</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Obter Polos</button>
        
      </form>
    </div>
  );
};

export default NewFormUnica;
