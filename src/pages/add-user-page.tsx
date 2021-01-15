import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { Input, StyledButton } from '../components/form';
import { CenteredDiv, StyledH1 } from '../components/styled-components';
import { ValidateUser } from '../components/user-validator';
import { AddUserMutation } from '../graphql-client';

export const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [userAdded, setUserAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [addUser] = useMutation(AddUserMutation);

  const handleErros = async () => {
    const errors = ValidateUser(name, email, phone, birthDate);
    if (errors.length > 0) {
      alert(errors);
    } else {
      setIsLoading(true);
      try {
        await addUser({ variables: { name: name, email: email, phone: phone, birthDate: birthDate } });
        setUserAdded(true);
        alert('Usuário adicionado');
      } catch (error) {
        alert(error);
        setIsLoading(false);
      }
    }
  };

  const buttonText = isLoading ? 'Adicionando...' : 'Adicionar';

  return (
    <CenteredDiv>
      <StyledH1>Adicionar usuário</StyledH1>
      <Input text={name} onTextChange={setName} field={'Nome'} />
      <Input text={email} onTextChange={setEmail} field={'E-mail'} />
      <Input text={phone} onTextChange={setPhone} field={'Telefone'} />
      <Input text={birthDate} onTextChange={setBirthDate} field={'Data de Nascimento'} />
      <StyledButton text={buttonText} validate={handleErros} isLoading={isLoading} />
      {userAdded ? <Redirect to='/users' /> : <Redirect to='/add-user' />}
    </CenteredDiv>
  );
};
