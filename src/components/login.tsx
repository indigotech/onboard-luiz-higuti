import React, { CSSProperties } from 'react';

export class EmailInput extends React.Component {
    render() {
        return (
            <div>
                <form style= {inputStyles}>
                    E-mail
                    <label>
                        <input type="text"name= "email" />
                    </label>
                </form>
            </div>
        );
    }
}


export class PasswordInput extends React.Component {
    render() {
        return (
            <div>
                <form style={inputStyles}>
                    Senha
                    <label>
                        <input type="text"name= "password" />
                    </label>
                </form>
            </div>
        );
    }
}


export class SubmitButton extends React.Component {
    render () {
        return (
            <div>
                <button style={buttonStyles}>
                    Entrar
                </button>
            </div>
        )
    }
}

const inputStyles: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px'
}

const buttonStyles: CSSProperties ={
    backgroundColor: 'blue',
    color: 'white'
}