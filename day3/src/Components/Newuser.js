import React from 'react'
import data from '../Objects/users.json'
import './Newuser.css';

export default function Newuser() {

    const rows = data.map((user) =>
        <tr key={user.id}>
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
                    <th>Email  
                        <button>sort email</button>
                    </th>
                    <th>Name  
                        <button>sort name</button>
                    </th>
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
