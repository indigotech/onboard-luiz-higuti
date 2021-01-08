import React, { CSSProperties } from 'react';
import './App.css';
import { EmailInput, PasswordInput, SubmitButton } from './components/login';

function App() {
  return (
    <div className='App'>
      <h1>Bem-vindo(a) à Taqtile!</h1>
      <form style= {inputStyles}>
        Email
        <EmailInput />
        Password
        <PasswordInput />
        <SubmitButton />
      </form>
    </div>
  );
}

export default App;

const inputStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '20px',
};
