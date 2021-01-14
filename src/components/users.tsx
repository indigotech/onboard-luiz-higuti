import React from 'react';
import { ApolloClient, gql, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

interface UserListItemProps {
  name: string;
  email: string;
}

const UserListItem: React.FC<UserListItemProps> = (props) => {
  return (
    <li>
      <p>{props.name}</p>
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
        <UserListItem email={p.email} name={p.name} key={p.id} />
      ))}
    </ul>
  );
};

const httpLink = createHttpLink({
  uri: 'https://tq-template-server-sample.herokuapp.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('@token');
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : ' ',
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

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
            },
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
