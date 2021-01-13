<<<<<<< HEAD
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
<<<<<<< HEAD
      const json = await getUsers(page, usersPerPage);
      setUsers(users.concat(json.data.users.nodes));
      if (!json.data.users.pageInfo.hasNextPage) {
        setHasNextPage(false);
      }
      setPage(prevPage => prevPage + usersPerPage);
=======
      const json = JSON.parse(await getUsers(page, usersPerPage));
      setUsers(users.concat(json.data.users.nodes));
      !(json.data.users.pageInfo.hasNextPage) ? setHasNextPage(false) : null;
      console.warn(json.data.users.pageInfo.hasNextPage);
      setPage(page + usersPerPage);
>>>>>>> 3c48919... add button functionalities
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


<<<<<<< HEAD
=======
import React from 'react';

interface UserProps {
	name: string
	email: string,
}

interface UsersListProps {
	list: Array<UserProps>
}

const User:React.FC<UserProps> = (props) => {
	return (
		<li>
			<p>
				{props.name}
			</p>
			<p>
				{props.email}
			</p>

		</li>
	);
};

const UsersList:React.FC<UsersListProps> = (props) => {
  return(
		<ul>
			{ props.list.map(p => <User email={p.email} name={p.name} key={p.name}/>)
			}
		</ul>	
	);
};

export const UsersListPage: React.FC = () => {
	const users = [
		{
			name: 'user1',
			email: 'email1'
		},
		{
			name: 'user2',
			email: 'email2'
		}
	]

	return (
		<div>
			<h1>Users List</h1>
			<UsersList list={users} />
		</div>
	)
}
>>>>>>> 91d5e16... add users list page
=======
>>>>>>> 3c48919... add button functionalities
