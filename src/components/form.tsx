import React from 'react';
import { Button, StyledInput, StyledLabel } from './styled-components';

interface inputProps {
  text: string;
  onTextChange: (e: string) => void;
  field: string;
}

export const Input: React.FC<inputProps> = (props, { className }) => {
  return (
    <div className={className}>
      <StyledLabel htmlFor={props.field}>{props.field}</StyledLabel>
      <StyledInput
        type='text'
        name={props.field}
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

export const StyledButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      color={props.isLoading ? "gray" : "blue"}
      onClick={props.validate}
      disabled={props.isLoading}
    >
      {props.text}
    </Button>
  );
};
