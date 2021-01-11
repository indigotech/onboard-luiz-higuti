import React, { CSSProperties, Fragment } from 'react';

export class EmailInput extends React.Component {
  render() {
    return (
      <Fragment >
        <label htmlFor="email">Email</label>
        <input type='text' name='email' id="email" style={inputStyles}/>
      </Fragment>

    );
  }
}

export class PasswordInput extends React.Component {
  render() {
    return (
      <Fragment>
        <label htmlFor="password">Password</label>
        <input type='text' name='email' id="password" style={inputStyles}/>
      </Fragment>
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
