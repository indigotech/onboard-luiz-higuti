import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router';
import { StyledH1, StyledHeader } from '../components/styled-components';
import { Details } from '../components/user-details';
import { UserDetails } from '../graphql-requests';

export const UserDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery(UserDetails, { variables: { id: id } });

  if (loading) {
    return <StyledH1>Carregando...</StyledH1>;
  }

  if (error) {
    return <StyledH1>Error! {error.message}</StyledH1>;
  }

  return (
    <>
      <StyledHeader>
        <StyledH1>{data.user.name}</StyledH1>
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
