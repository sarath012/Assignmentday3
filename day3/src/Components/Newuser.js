import React from 'react'
import data from '../Objects/users.json'
import './Newuser.css';

export default function Newuser() {

    const rows = data.map((user) =>
        <tr>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.name.firstname} {user.name.lastname}</td>
            <td>{user.phone}</td>
        </tr>
      
  );
//   console.log(rows)

  return (
    <div className='usertable'>
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Phone number</th>
                </tr>   
            </thead>
            <tbody>
                {rows}
            </tbody>
            
        </table>
    </div>
  )
}
