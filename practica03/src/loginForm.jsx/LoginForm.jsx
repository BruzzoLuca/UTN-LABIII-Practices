import React, { useState } from 'react';

const LoginForm = () => {
  
  const [username, setUsername] = useState('');

  const handleChange = (e) => {
    const inputUsername = e.target.value;  
    setUsername(inputUsername);

    if (inputUsername.toLowerCase().includes('o')) { // Paso todo lo que se va ingresando a lowercase y chequea si se ingresa una O
      alert('Por favor, ¡Nombres de usuario sin la letra o!');
    }
  };
  
  const handleRegister = () => {
    if (username.toLowerCase().includes('o') || username === '') {  // Si tiene O o esta vacio larga alerta
      alert('Usuario inválido para registrarse');
      return;
    }
    else
    alert('¡Usuario registrado correctamente!');
  };

  return (
    
    <div className="loginContainer">
      
      <input 
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={handleChange}
      />
      
      <button onClick={handleRegister}>Registrarse</button>
      <p>{username}</p>
    </div>
  
);
};

export default LoginForm;