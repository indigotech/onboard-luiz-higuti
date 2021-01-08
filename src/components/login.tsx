import React, { CSSProperties } from 'react';

interface LoginProps {
  text: string;
  onTextChange: (e: string) => void;
}

interface ButtonProps {
  validate: () => void;
}

export class EmailInput extends React.Component<LoginProps> {
  constructor(props: LoginProps) {
    super(props);
  }

  render() {
    return (
      <>
        <label htmlFor="email">Email</label>
        <input
          type='text'
          name='email'
          id='email'
          style={inputStyles}
          onChange={e => {this.props.onTextChange(e.target.value)}}
          value={this.props.text}
        />
      </>
    );
  }
}


export class PasswordInput extends React.Component<LoginProps> {
  constructor(props: LoginProps) {
    super(props);
  }

  render() {
    return (
      <>
        <label htmlFor="password">Senha</label>
        <input
          type='text'
          name='password'
          id='password'
          style={inputStyles}
          onChange={e => {this.props.onTextChange(e.target.value)}}
          value={this.props.text}
        />
      </>
    );
  }
}

export class SubmitButton extends React.Component<ButtonProps> {
  render() {
    return (
      <button style={buttonStyles} onClick={this.props.validate}>Entrar</button>
    );
  }
}

const inputStyles: CSSProperties = {
  marginBottom: '15px',
}

const buttonStyles: CSSProperties = {
  backgroundColor: 'blue',
  color: 'white',
};
