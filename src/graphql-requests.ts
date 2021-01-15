import { gql } from '@apollo/client';

export const UserDetails = gql`
  query User($id: ID!) {
    user(id: $id) {
      name
      id
      phone
      birthDate
      email
      role
    }
  }
`;

export const AddUserMutation = gql`
  mutation createUser($name: String!, $email: String!, $phone: String!, $birthDate: Date!) {
    createUser(data: { name: $name, email: $email, phone: $phone, birthDate: $birthDate, role: user }) {
      name
      id
      role
    }
  }
`;

export const LoginMutation = gql`
  mutation Login($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      user {
        id
      }
      token
    }
  }
`;

export const Users = gql`
  query Users($offset: Int, $limit: Int) {
    users(pageInfo: { offset: $offset, limit: $limit }) {
      nodes {
        id
        name
        email
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;
