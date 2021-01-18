import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { Input, Button } from '../components/form';
import { DivStyled, H1 } from '../components/styled-components';
import { ValidateUser } from '../components/user-validator';
import { AddUserMutation } from '../graphql-requests';

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
    <DivStyled>
      <H1>Adicionar usuário</H1>
      <Input text={name} onTextChange={setName} label={'Nome'} />
      <Input text={email} onTextChange={setEmail} label={'E-mail'} />
      <Input text={phone} onTextChange={setPhone} label={'Telefone'} />
      <Input text={birthDate} onTextChange={setBirthDate} label={'Data de Nascimento'} />
      <Button text={buttonText} validate={handleErros} isLoading={isLoading} />
      {userAdded ? <Redirect to='/users' /> : <Redirect to='/add-user' />}
    </DivStyled>
  );
};
