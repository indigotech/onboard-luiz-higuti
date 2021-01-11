import React, { CSSProperties } from 'react';
import './App.css';
import { EmailInput, PasswordInput, SubmitButton } from './components/login';

function App() {
  return (
    <div className='App'>
      <h1>Bem-vindo(a) à Taqtile!</h1>
      <form style= {formStyles}>
        <EmailInput />
        <PasswordInput />
        <SubmitButton />
      </form>
    </div>
  );
}

export default App;

const formStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};
