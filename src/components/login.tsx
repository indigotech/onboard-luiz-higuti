import React, { CSSProperties } from 'react';

export class EmailInput extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="email">Email</label>
        <input type='text' name='email' id="email" style={inputStyles}/>
      </>

    );
  }
}

export class PasswordInput extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="password">Password</label>
        <input type='text' name='email' id="password" style={inputStyles}/>
      </>
    );
  }
}

export class SubmitButton extends React.Component {
  render() {
    return <button style={buttonStyles}>Entrar</button>;
  }
}

const buttonStyles: CSSProperties = {
  backgroundColor: 'blue',
  color: 'white',
};

const inputStyles: CSSProperties = {
  marginBottom: '15px',
}
