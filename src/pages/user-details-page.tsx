import { useQuery } from '@apollo/client';
import React, { CSSProperties } from 'react';
import { Details } from '../components/user-details';
import { headerStyles } from '../users-list';
import { UserDetails } from '../graphql-client';
import { useParams } from 'react-router';

export const UserDetailsPage = () => {
  const { id } = useParams<{id: string}>()
  const { loading, error, data } = useQuery(UserDetails, { variables: { id: id } });

  if (loading) {
    return <h1 style={queryStatusStyle}>Carregando...</h1>;
  }

  if (error) {
    return <h1 style={queryStatusStyle}>Error! {error.message}</h1>;
  }

  return (
    <div>
      <h1 style={headerStyles}>{data.user.name}</h1>
      <Details details={data.user} />
    </div>
  );
};

const queryStatusStyle: CSSProperties = {
  textAlign: 'center',
};
