import styled from 'styled-components';
import { Input } from './form';

export const StyledInput = styled(Input)`
  border: 1px;
  color: gray;
`;

export const StyledLabel = styled.label`
  font-size: 12px;
  font-weight: regular;
  color: gray;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  font-size: 16px;
  font-weigth: regular;
  background: ${(props) => props.color || 'blue'};
  color: white;
  weight: 44px;
  border-radius: 10px;
  margin: 12px;
`;

export const StyledH1 = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: black;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const CenteredDiv = styled.div`
  text-align: center;
`;
