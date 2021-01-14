import React from 'react';
import '../App.css'
import { inputStyles, buttonStyles } from './login';

interface inputProps {
  text: string;
  onTextChange: (e:string) => void;
  field: string;
}

export const Input : React.FC<inputProps> =  (props) => {
  return (
    <>
      <label htmlFor={props.field}>{props.field}</label>
      <input
        type='text'
        name={props.field}
        id={props.field+'Input'}
        style={inputStyles}
        onChange={e => { props.onTextChange(e.target.value) }}
        value={props.text}
      />
    </>
  );
}

interface buttonProps {
  submit: () => void;
  text: string;
}

export const Button: React.FC<buttonProps> = (props) => {
  return (
    <button style={buttonStyles} onClick={props.submit}>{props.text}</button>
  );
} 
