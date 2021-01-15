import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, StyledAddButton, StyledH1, StyledHeader } from '../components/styled-components';
import { getUsers, UsersList } from '../components/users';

const usersPerPage = 10;

export const UsersListPage: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  async function setUsersList() {
    try {
      const json = await getUsers(page, usersPerPage);
      setUsers(users.concat(json.data.users.nodes));
      if (!json.data.users.pageInfo.hasNextPage) {
        setHasNextPage(false);
      }
      setPage((prevPage) => prevPage + usersPerPage);
    } catch (error) {
      alert(error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    setUsersList();
  }, []);

  const handleShowMore = () => {
    setUsersList();
    setIsLoading(true);
  };

  const buttonText = isLoading ? 'carregando...' : 'ver mais';

  return (
    <>
      <StyledHeader>
        <StyledH1>Users List</StyledH1>
        <Link to='/add-user'>
          <StyledAddButton>+</StyledAddButton>
        </Link>
      </StyledHeader>
      <UsersList list={users} />
      {hasNextPage ? (
        <Button onClick={handleShowMore} color={isLoading ? 'gray' : 'blue'} disabled={isLoading}>
          {buttonText}
        </Button>
      ) : (
        <></>
      )}
    </>
  );
};
