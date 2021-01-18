import styled from 'styled-components';

export const InputStyled = styled.input`
  border: 1px gray #777777;
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: regular;
  color: gray;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
`;

export const ButtonStyled = styled.button`
  font-size: 16px;
  font-weigth: regular;
  background: ${(props) => props.color || 'blue'};
  color: white;
  weight: 44px;
  border-radius: 10px;
  margin: 12px;
`;

export const H1 = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: black;
  margin: 20px;
`;

export const DivStyled = styled.div`
  text-align: center;
  padding: 20px;
`;

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledAddButton = styled.button`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 30px;
  color: white;
  background: black;
`;

export const StyledLi = styled.li`
  margin: 12px;
`;

export const StyledUl = styled.ul`
  list-style-position: inside;
  align-dtems: flex-start;
  display: flex;
  flex-direction: column;
`;
