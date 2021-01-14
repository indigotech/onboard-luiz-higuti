import React from 'react';
import '../App.css';
import { inputStyles, buttonStyles, ButtonProps, disableButtonStyles } from './login';

interface inputProps {
  text: string;
  onTextChange: (e: string) => void;
  field: string;
}

export const Input: React.FC<inputProps> = (props) => {
  return (
    <>
      <label htmlFor={props.field}>{props.field}</label>
      <input
        type='text'
        name={props.field}
        style={inputStyles}
        onChange={(e) => {
          props.onTextChange(e.target.value);
        }}
        value={props.text}
      />
    </>
  );
};

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      style={props.isLoading ? disableButtonStyles : buttonStyles}
      onClick={props.validate}
      disabled={props.isLoading}
    >
      {props.text}
    </button>
  );
};
