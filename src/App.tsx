import React, { useState } from 'react';
import { gql } from '@apollo/client';
import './App.css';
import { Validate } from './components/login-validator';
import { Redirect } from 'react-router';
import { client } from './graphql-client';
import { StyledInput, StyledH1 } from './components/styled-components';
import { StyledButton } from './components/form';

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
        if (await login(email,password)) {
          setIsLoading(true);
          setIsLogged(true);
        }
        else {
          setIsLoading(false);
          setIsLogged(false);
        }
      } catch (error) {
        alert(error);
        setIsLoading(false);
      }
    }
  }

  console.warn(isLogged)
  const buttonText = isLoading ? 'Carregando...' : 'Entrar';

  return (
    <div className='App'>
      <StyledH1>Bem-vindo(a) à Taqtile!</StyledH1>
      <div>
        <StyledInput text={email} onTextChange={setEmail} field={'E-mail'}/>
        <StyledInput text={password} onTextChange={setPassword} field={'Senha'}/>
        <StyledButton validate={handleErrors} text={buttonText} isLoading={isLoading} />
        { isLogged ? <Redirect to='/users' /> : <Redirect to='/' /> }
      </div>
    </div>
  );
}

export default App;
