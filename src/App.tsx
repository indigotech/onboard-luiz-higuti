import React from 'react';
import './App.css';
import { EmailInput, PasswordInput, SubmitButton } from './components/login'

function App() {
  return (
    <div className="App">
      <h1>
        Bem-vindo(a) à Taqtile!
      </h1>
      <EmailInput />
      <PasswordInput />
      <SubmitButton />
    </div>
  );
}

export default App;
