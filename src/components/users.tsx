import React from 'react';
import { Link } from 'react-router-dom';
import { client } from '../graphql-client';
import { Users } from '../graphql-requests';
import { StyledLi, StyledUl } from './styled-components';

interface UserListItemProps {
  name: string;
  email: string;
  id: string;
}

const UserListItem: React.FC<UserListItemProps> = (props) => {
  return (
    <StyledLi>
      <Link to={`/user/${props.id}`}>{props.name}</Link>
      <p>{props.email}</p>
    </StyledLi>
  );
};

interface User {
  name: string;
  email: string;
  id: string;
}

interface UsersListProps {
  list: Array<User>;
}

export const UsersList: React.FC<UsersListProps> = (props) => {
  return (
    <StyledUl>
      {props.list.map((p) => (
        <UserListItem email={p.email} name={p.name} key={p.id} id={p.id} />
      ))}
    </StyledUl>
  );
};

export async function getUsers(offset: number, limit: number) {
  try {
    const result = await client.query({
      query: Users,
      variables: { offset, limit },
    });
    return result;
  } catch (error) {
    return error;
  }
}
