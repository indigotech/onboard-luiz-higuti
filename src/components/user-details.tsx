import React, { CSSProperties } from 'react';
import '../App';

interface DetailsItemProps {
  name: string;
  text: string;
}

const DetailsListItem: React.FC<DetailsItemProps> = (props) => {
  return (
    <li style={detailsItemStyles}>
      <b style={{ marginRight: '5px' }}>{props.name}: </b>
      {props.text}
    </li>
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
    <ul style={detailsStyles}>
      <DetailsListItem name='Id' text={props.id} />
      <DetailsListItem name='Nome' text={props.name} />
      <DetailsListItem name='Telefone' text={props.phone} />
      <DetailsListItem name='E-mail' text={props.email} />
      <DetailsListItem name='Role' text={props.role} />
    </ul>
  );
};

const detailsItemStyles: CSSProperties = {
  margin: '15px',
};

const detailsStyles: CSSProperties = {
  listStylePosition: 'inside',
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
};
