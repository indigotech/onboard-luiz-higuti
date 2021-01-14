import React, { CSSProperties, useState } from 'react';
import '../App.css';
import { Input, Button } from '../components/add-user';
import { gql } from '@apollo/client';
import { ValidateUser } from '../components/user-validator';

export const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const role = 'user';

  const addUserMutation = gql`
    mutation createUser {
      createUser(data: { name: "${name}", email: "${email}", phone:"${phone}", birthDate: "${birthDate}", role: ${role} }) {
        name
        id
        role
      }
    }
  `;

  const handleErros = () => {
    const errors = ValidateUser(name, email, phone, birthDate);
    if (errors.length > 0) {
      alert(errors);
    }
  }

  return (
    <div className='App'>
      <h1>Adicionar usuário</h1>
      <div style={formStyles}>
        <Input text={name} onTextChange={setName} field={'name'} />
        <Input text={email} onTextChange={setEmail} field={'email'} />
        <Input text={phone} onTextChange={setPhone} field={'phone'} />
        <Input text={birthDate} onTextChange={setBirthDate} field={'birthDate'} />
        <Button
          text='Adicionar'
          submit={handleErros}
        />
      </div>
    </div>
  );
};

const formStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};
