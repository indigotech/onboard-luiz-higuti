import React, { useState, CSSProperties } from 'react';
import { gql } from '@apollo/client';
import './App.css';
import { EmailInput, PasswordInput, SubmitButton } from './components/login';
import { Validate } from './components/login-validator';
import { Redirect } from 'react-router';
import { client } from './graphql-client';

async function login(email: string, password: string): Promise<boolean> {
  try {
    const result = await client.mutate({
      mutation: gql`
      mutation Login {
        login (data: {email: "${email}", password: "${password}"}) {
          user {
            id
          }
          token
        }
      }
    `,
    });
    localStorage.setItem('@token', result.data.login.token);
    return true;
  } catch (error) {
    alert(error.message);
    return false;
  }
}

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleErrors() {
    const errors = Validate(email, password);
    if (errors.length > 0) {
      alert(errors);
    } 
    else {
      setIsLoading(true);
      try {
        await login(email, password);
        setIsLogged(true);
      } catch (error) {
        alert(error);
        setIsLoading(false);
      }
    }
  }

  const buttonText = isLoading ? 'Carregando...' : 'Entrar';

  return (
    <div className='App'>
      <h1>Bem-vindo(a) à Taqtile!</h1>
      <div style={formStyles}>
        <EmailInput text={email} onTextChange={setEmail} />
        <PasswordInput text={password} onTextChange={setPassword} />
        <SubmitButton validate={handleErrors} text={buttonText} isLoading={isLoading} />
        { isLogged ? <Redirect to='/users' /> : <Redirect to='/' /> }
      </div>
    </div>
  );
}

export default App;

const formStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};
