import React, { CSSProperties } from 'react';
import '../App';

interface DetailsItemProps {
  name: string;
  value: string;
}

const DetailsListItem: React.FC<DetailsItemProps> = (props) => {
  return (
    <li style={detailsItemStyles}>
      <b style={{ marginRight: '5px' }}>{props.name}: </b>
      {props.value}
    </li>
  );
};

interface DetailsProps {
  id: string;
  name: string;
  phone: string;
  birthDate: string;
  email: string;
  role: string;
}

interface DetailsObjectProps {
  details: DetailsProps;
}

export const Details: React.FC<DetailsObjectProps> = (props) => {
  return (
    <ul style={detailsStyles}>
      <DetailsListItem name={'Id'} value={props.details.id} />
      <DetailsListItem name={'Nome'} value={props.details.name} />
      <DetailsListItem name={'Telefone'} value={props.details.phone} />
      <DetailsListItem name={'E-mail'} value={props.details.email} />
      <DetailsListItem name={'Role'} value={props.details.role} />
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
