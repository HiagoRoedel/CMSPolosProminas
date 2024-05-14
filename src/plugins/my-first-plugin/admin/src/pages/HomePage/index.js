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
      <h1 style={{textAlign: 'center', alignItems: 'center', color: 'white'}}>Formulário</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit" style={{textAlign: 'center', alignItems: 'center', color: 'white'}}>Obter Polos</button>
        
      </form>
    </div>
  );
};

export default NewFormUnica;
