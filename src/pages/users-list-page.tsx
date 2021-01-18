import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/form';
import { H1, StyledAddButton, StyledHeader } from '../components/styled-components';
import { getUsers, UsersList } from '../components/users';

const UsersPerPage = 10;

export const UsersListPage: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  async function setUsersList() {
    try {
      const UserJson = await getUsers(page, UsersPerPage);
      setUsers((prevUsers) => prevUsers.concat(UserJson.data.users.nodes));
      if (!UserJson.data.users.pageInfo.hasNextPage) {
        setHasNextPage(false);
      }
      setPage((prevPage) => prevPage + UsersPerPage);
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
        <H1>Users List</H1>
        <Link to='/add-user'>
          <StyledAddButton>+</StyledAddButton>
        </Link>
      </StyledHeader>
      <UsersList list={users} />
      {hasNextPage && <Button validate={handleShowMore} text={buttonText} isLoading={isLoading} /> }
    </>
  );
};
