import { gql, useMutation } from '@apollo/client';
import React, { CSSProperties, useState } from 'react';
import { Redirect } from 'react-router';
import '../App.css';
import { Button, Input } from '../components/add-user';
import { ValidateUser } from '../components/user-validator';

export const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [userAdded, setUserAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const role = "user";

  const addUserMutation = gql`
    mutation createUser {
      createUser(data: { name: "${name}", email: "${email}", phone:"${phone}", birthDate: "${birthDate}", role: ${role} }) {
        name
        id
        role
      }
    }
  `;

  const [addUser] = useMutation(addUserMutation);

  const handleErros = async () => {
    const errors = ValidateUser(name, email, phone, birthDate);
    if (errors.length > 0) {
      alert(errors);
    }
    else {
      setIsLoading(true);
      try{
        await addUser();
        setUserAdded(true);
        alert('Usuário adicionado');
      } catch (error) {
        alert(error);
        setIsLoading(false);
      }
    }
  }

  const buttonText = isLoading ? 'Adicionando...' : 'Adicionar' ;

  return (
    <div className='App'>
      <h1>Adicionar usuário</h1>
      <div style={formStyles}>
        <Input text={name} onTextChange={setName} field={'Nome'} />
        <Input text={email} onTextChange={setEmail} field={'E-mail'} />
        <Input text={phone} onTextChange={setPhone} field={'Telefone'} />
        <Input text={birthDate} onTextChange={setBirthDate} field={'Data de Nascimento'} />
        <Button
          text={buttonText}
          validate={handleErros}
          isLoading={isLoading}
        />
        {userAdded ? <Redirect to='/users' /> : <Redirect to='/add-user'/>}
      </div>
    </div>
  );
};

const formStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};
