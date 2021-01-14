import React, { CSSProperties, useState } from 'react';
import '../App.css'
import { Input, Button } from '../components/add-user';
import { gql, useMutation } from '@apollo/client';



export const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [role, setRole] = useState('user');
  const addUserMutation = gql`
    mutation createUser {
      createUser(data: { name: "${name}", email: "${email}", phone:"${phone}", birthDate: "${birthDate}", role:${role} }) {
        name
        id
        role
      }
    }
  `;
  const [addUser] = useMutation(addUserMutation);
  


  return (
    <div className='App'>
      <h1>Adicionar usuário</h1>
      <div style={formStyles}>
        <Input text={name} onTextChange= {setName} field={'name'}/>
        <Input text={email} onTextChange= {setEmail} field={'email'}/>
        <Input text={phone} onTextChange= {setPhone} field={'phone'}/>
        <Input text={birthDate} onTextChange= {setBirthDate} field={'birthDate'}/>
        <Input text={role} onTextChange= {setRole} field={'role'}/>
        <Button text='Adicionar' submit={() => {console.warn('submitted')}}/>
      </div>
    </div>
  );
}

const formStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};
