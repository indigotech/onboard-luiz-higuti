import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { Input, Button } from './components/form';
import { Validate } from './components/login-validator';
import { DivStyled, H1 } from './components/styled-components';
import { client } from './graphql-client';
import { LoginMutation } from './graphql-requests';

async function login(email: string, password: string): Promise<boolean> {
  try {
    const result = await client.mutate({
      mutation: LoginMutation,
      variables: { email, password },
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
    } else {
      setIsLoading(true);
      try {
        if (await login(email, password)) {
          setIsLoading(true);
          setIsLogged(true);
        } else {
          setIsLoading(false);
          setIsLogged(false);
        }
      } catch (error) {
        alert(error);
        setIsLoading(false);
      }
    }
  }
  const buttonText = isLoading ? 'Carregando...' : 'Entrar';

  return (
    <DivStyled>
      <H1>Bem-vindo(a) à Taqtile!</H1>
      <Input text={email} onTextChange={setEmail} label={'E-mail'} />
      <Input text={password} onTextChange={setPassword} label={'Senha'} />
      <Button validate={handleErrors} text={buttonText} isLoading={isLoading} />
      {isLogged ? <Redirect to='/users' /> : <Redirect to='/' />}
    </DivStyled>
  );
}

export default App;
