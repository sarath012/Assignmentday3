import React from 'react'
import data from '../Objects/users.json'
import './Newuser.css';

export default function User() {
    const username = data.map((user) =>
    <li>{user.name.firstname} {user.name.lastname}</li>
  );

  return (
    <div className='userlist'>
        
    <ul>{username}</ul>

    </div>
  )
}
