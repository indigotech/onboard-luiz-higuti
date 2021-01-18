import React from 'react';
import '../App';
import { StyledLi, StyledUl } from './styled-components';

interface DetailsItemProps {
  name: string;
  text: string;
}

const DetailsListItem: React.FC<DetailsItemProps> = (props) => {
  return (
    <StyledLi>
      <b style={{ marginRight: '5px' }}>{props.name}: </b>
      {props.text}
    </StyledLi>
  );
};

interface UserDetailsProps {
  id: string;
  name: string;
  phone: string;
  birthDate: string;
  email: string;
  role: string;
}

export const Details: React.FC<UserDetailsProps> = (props) => {
  return (
    <StyledUl>
      <DetailsListItem name='Id' text={props.id} />
      <DetailsListItem name='Nome' text={props.name} />
      <DetailsListItem name='Telefone' text={props.phone} />
      <DetailsListItem name='E-mail' text={props.email} />
      <DetailsListItem name='Role' text={props.role} />
    </StyledUl>
  );
};
