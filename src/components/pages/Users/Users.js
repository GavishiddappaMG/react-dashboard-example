import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Carousel from '../../Shared/Carousel/Carousel';
import CarouselPage from '../../Shared/CarouselPage/CarouselPage';

const carouselContainer = {
  padding: '1rem',
}
const Users = () => {
  const [users, setUsers] = useState([]);

  // Load the data from the server
  useEffect(() => {
      let mounted = true;

      const getUsers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        if (mounted) {
          setUsers(response.data);
        }
      };

      getUsers();

      return () => { mounted = false; }
    }, []);

    return (
      <>
      <h2><FormattedMessage id="Users" /></h2>
      {users.length ? (
        <ul data-testid="user-list">
          {users.map(user => (
            <li key={user.id} className="user" data-testid="user-item">
              <span>{user.name}</span> (<span>{user.username}</span>)
            </li>
          ))}
        </ul>
      ) : (
        <div>Loading users...</div>
      )}
      <div className="carouselContainer">
        {/* <CarouselPage /> */}
        <Carousel />
      </div>
      </>
    );
}

export default Users;
