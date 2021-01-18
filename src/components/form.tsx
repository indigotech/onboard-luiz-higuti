import React from 'react';
import { ButtonStyled, InputStyled, Label } from './styled-components';

interface inputProps {
  text: string;
  onTextChange: (e: string) => void;
  label: string;
}
export const Input: React.FC<inputProps> = (props) => {
  return (
    <div>
      <Label htmlFor={props.label}>{props.label}</Label>
      <InputStyled
        type='text'
        name={props.label}
        onChange={(e) => {
          props.onTextChange(e.target.value);
        }}
        value={props.text}
      />
    </div>
  );
};

interface ButtonProps {
  validate: () => void;
  text: string;
  isLoading: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonStyled color={props.isLoading ? 'gray' : 'blue'} onClick={props.validate} disabled={props.isLoading}>
      {props.text}
    </ButtonStyled>
  );
};
