import React, { useState, CSSProperties } from 'react';
import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import './App.css';
import { EmailInput, PasswordInput, SubmitButton } from './components/login';
import { Validate } from './components/login-validator';

const client = new ApolloClient({
  uri: 'https://tq-template-server-sample.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

function login(email: string, password: string) {
  client.mutate({
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
  .then(result => {console.warn(result)})
  .catch(error => {console.warn(error)})

}

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleErrors() {
    const errors = Validate(email, password);
    if (errors.length > 0) {
      alert(errors);
    }
    else {
      login(email, password);
    }
  }

  return (
    <div className='App'>
      <h1>Bem-vindo(a) à Taqtile!</h1>
      <form style= {formStyles}>
        <EmailInput text={email} onTextChange={ (input) => {setEmail(input)} } />
        <PasswordInput text={password} onTextChange= { (input) => {setPassword(input)} } />
        <SubmitButton validate={ handleErrors } />
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
