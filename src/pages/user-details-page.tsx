import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router';
import { H1, StyledHeader } from '../components/styled-components';
import { Details } from '../components/user-details';
import { UserDetailsQuery } from '../graphql-requests';

export const UserDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery(UserDetailsQuery, { variables: { id: id } });

  if (loading) {
    return <H1>Carregando...</H1>;
  }

  if (error) {
    return <H1>Error! {error.message}</H1>;
  }

  return (
    <>
      <StyledHeader>
        <H1>{data.user.name}</H1>
      </StyledHeader>
      <Details
        name={data.user.name}
        id={data.user.id}
        phone={data.user.phone}
        birthDate={data.user.birthDate}
        email={data.user.email}
        role={data.user.role}
      />
    </>
  );
};
