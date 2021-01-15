import React from 'react';
import { gql } from '@apollo/client';
import { client } from '../graphql-client';
import { Link } from 'react-router-dom';


interface UserListItemProps {
  name: string;
  email: string;
  id: string;
}

const UserListItem: React.FC<UserListItemProps> = (props) => {
  return (
    <li>
      <Link to={`/user/${props.id}`}>{props.name}</Link>
      <p>{props.email}</p>
    </li>
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
    <ul>
      {props.list.map((p) => (
        <UserListItem email={p.email} name={p.name} key={p.id} id={p.id} />
      ))}
    </ul>
  );
};


export async function getUsers(offset: number, limit: number) {
  try {
    const result = await client.query({
      query: gql`
        query Users {
          users(pageInfo: { offset: ${offset} , limit: ${limit} }) {
            nodes {
              id
              name
              email
            }
            pageInfo {
              hasNextPage
            }
          }
        }
      `,
    });
    return result;
  } catch (error) {
    return error;
  }
}
