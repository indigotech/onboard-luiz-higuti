import React, { useEffect, useState } from 'react';
import { ApolloClient, gql, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

interface UserProps {
  name: string;
  email: string;
}

interface UsersListProps {
  list: Array<UserProps>;
}

const User: React.FC<UserProps> = (props) => {
  return (
    <li>
      <p>{props.name}</p>
      <p>{props.email}</p>
    </li>
  );
};

const UsersList: React.FC<UsersListProps> = (props) => {
  return (
    <ul>
      {props.list.map((p) => (
        <User email={p.email} name={p.name} key={p.name} />
      ))}
    </ul>
  );
};

const httpLink = createHttpLink({
  uri: 'https://tq-template-server-sample.herokuapp.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('@token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ?  `${token}` : ' ',
    }
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link : authLink.concat(httpLink),
});

function getUsers() :Promise<string>  {
  return client.query({
    query: gql`
      query Users {
        users {
          nodes {
            id
            name
            email
          }
        }
      }
    `,
  })
    .then(result => {
      return JSON.stringify(result);
    })
    .catch(error => {
      return JSON.stringify(error);
    });
}

export const UsersListPage: React.FC = () => {
  const [users, setUsers] = useState([]);

  async function setUsersList () {
    const json = JSON.parse(await getUsers())
    setUsers(json.data.users.nodes)
    console.warn(json)
  }

  useEffect(() => {
    setUsersList()
  }, [])

  return (
    <div>
      <h1>Users List</h1>
      <UsersList list={users} />
    </div>
  );
};
