import React, { CSSProperties } from 'react';

export class EmailInput extends React.Component {
  render() {
    return (
      <label>
        <input type='text' name='email' />
      </label>
    );
  }
}

export class PasswordInput extends React.Component {
  render() {
    return (
      <label>
        <input type='text' name='password' />
      </label>
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
