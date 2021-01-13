import React, { useState, CSSProperties, useEffect } from 'react';
import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import './App.css';
import { EmailInput, PasswordInput, SubmitButton } from './components/login';
import { Validate } from './components/login-validator';
import { Redirect } from 'react-router';

const client = new ApolloClient({
  uri: 'https://tq-template-server-sample.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

function login(email: string, password: string): Promise<boolean>{
    return client
    .mutate({
      mutation: gql `
      mutation Login {
        login (data: {email: "${email}", password: "${password}"}) {
          user {
            id
          }
          token
        }
      }
    `
    })
    .then((result) => {
      localStorage.setItem('@token', result.data.login.token);
      console.warn('logged');
      return true;
    })
    .catch((error) => {
      console.warn(error);
      alert(error.message);
      return false;
    });    
}

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [buttonText, setButtonText] = useState('Entrar');
  const [isLoading, setIsLoading] = useState(false);

  async function handleErrors() {
    const errors = Validate(email, password);
    setIsLoading(true);
    if (errors.length > 0) {
      alert(errors);
    } 
    else {
      await login(email, password) ? setIsLogged(true) : setIsLogged(false)
    }
    setIsLoading(false);
  }

  useEffect(() => {
    isLoading? setButtonText('Entrando...') : setButtonText('Entrar');
  }, [isLoading]);

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
