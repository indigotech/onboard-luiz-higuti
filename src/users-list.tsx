import React from 'react';

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

export const UsersListPage: React.FC = () => {
  const users = [
    {
      name: 'user1',
      email: 'email1',
    },
    {
      name: 'user2',
      email: 'email2',
    },
  ];

  return (
    <div>
      <h1>Users List</h1>
      <UsersList list={users} />
    </div>
  );
};
