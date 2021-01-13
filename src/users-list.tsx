import React, { useState, useEffect } from 'react';
import { getUsers, UsersList } from './components/users';

const usersPerPage = 10 ;

export const UsersListPage: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [next, setNext] = useState(0);
  const [usersToShow, setUsersToShow] = useState([]);

  async function setUsersList () {
    const json = JSON.parse(await getUsers());
    setUsers(json.data.users.nodes);
  }

  useEffect(() => {
    setUsersList();
  }, [])

  const showMoreUsers = (start:number, end:number) => {
    const moreUsers = [...usersToShow, ...users.slice(start, end)];
    setUsersToShow(moreUsers);
  }

  const handleShowMore = () => {
    showMoreUsers(next, next + usersPerPage);
    setNext(next + usersPerPage)
  }

  return (
    <div>
      <h1>Users List</h1>
      <UsersList list={usersToShow} />
      <button onClick={handleShowMore}>ver mais</button>
    </div>
  );
};
