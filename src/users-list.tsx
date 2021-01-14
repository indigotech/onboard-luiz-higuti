import React, { useState, useEffect, CSSProperties } from 'react';
import { getUsers, UsersList } from './components/users';
import { buttonStyles } from './components/login';
import { Link } from 'react-router-dom';

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
    <div style={{ padding: '20px' }}>
      <div style={headerStyles}>
        <h1 style={{ padding: '20px'}} >Users List</h1>
        <Link to='/add-user'>
        <button style={addButtonStyles} >+</button>
        </Link>
      </div>
      <UsersList list={users} />
      {hasNextPage ? (
        <button onClick={handleShowMore} style={buttonStyles}>
          ver mais
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

const addButtonStyles: CSSProperties = { 
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  fontSize: '30px',
  color: 'white',
  backgroundColor: 'black',
};

const headerStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  padding: '20px',
  alignItems: 'center', 
}
