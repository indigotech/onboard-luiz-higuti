import React, { useState, CSSProperties } from 'react';
import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import './App.css';
import { EmailInput, PasswordInput, SubmitButton } from './components/login';
import { Validate } from './components/login-validator';
import { Redirect } from 'react-router';

const client = new ApolloClient({
  uri: 'https://tq-template-server-sample.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

function login(email: string, password: string): boolean {
  client
    .mutate({
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
    })
    .then((result) => {
      localStorage.setItem('@token', result.data.login.token);
      return true;
    })
    .catch((error) => {
      alert(error.message);
      localStorage.setItem('@token', '');
      console.warn(error)
    });
  return false;
}

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  function handleErrors() {
    const errors = Validate(email, password);
    if (errors.length > 0) {
      alert(errors);
    } 
    else {
      login(email, password) ? setIsLogged(true) : setIsLogged(false) 
    }
  }

  return (
    <div className='App'>
      <h1>Bem-vindo(a) à Taqtile!</h1>
      <form style={formStyles}>
        <EmailInput
          text={email}
          onTextChange={(input) => {
            setEmail(input);
          }}
        />
        <PasswordInput
          text={password}
          onTextChange={(input) => {
            setPassword(input);
          }}
        />
        <SubmitButton validate={handleErrors} />
        { isLogged ? <Redirect to='/new' /> : <></> }
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
