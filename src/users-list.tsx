import React, { useState, useEffect } from 'react';
import { getUsers, UsersList } from './components/users';
import { buttonStyles } from './components/login';

const usersPerPage = 10 ;

export const UsersListPage: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  
  async function setUsersList () {
    try{
      const json = await getUsers(page, usersPerPage);
      setUsers(users.concat(json.data.users.nodes));
      if (!json.data.users.pageInfo.hasNextPage) {
        setHasNextPage(false);
      }
      setPage(prevPage => prevPage + usersPerPage);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    setUsersList();
  }, [])

  const handleShowMore = () => {
    setUsersList()
  }
  return (
    <div>
      <h1>Users List</h1>
      <UsersList list={users} />
      {hasNextPage ? 
        <button onClick={handleShowMore} style={buttonStyles}>ver mais</button> : <></>
      }
    </div>
  );
};


