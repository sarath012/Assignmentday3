import React,{useEffect,useState} from 'react'
import data from '../Objects/users.json'
import './Newuser.css';

export default function Newuser() {
    const[sampleData,setSampleData] = useState(data);
    const [nameAsc, setNameAsc] = useState(true);
    const [emailAsc, setEmailAsc] = useState(true);

    useEffect(()=>{
        // setSampleData(data)
        handleNameSortAsc()
    },[])
    // console.log(sampleData)

    function handleEmailSortAsc(){
        const sortedEmail= [...sampleData].sort((a,b)=>a.email > b.email ? 1 : -1)
        setSampleData(sortedEmail);
        setEmailAsc(false);
    }

    function handleEmailSortDesc(){
        const sortedEmail= [...sampleData].sort((a,b)=>a.email > b.email ? -1 : 1)
        setSampleData(sortedEmail);
        setEmailAsc(true);
    }
    
    function handleNameSortAsc(){
        const sortedName= [...sampleData].sort((a,b)=>a.name.firstname > b.name.firstname ? 1 : -1)
        setSampleData(sortedName);
        setNameAsc(false);
    }

    function handleNameSortDesc(){
        const sortedName= [...sampleData].sort((a,b)=>a.name.firstname > b.name.firstname ? -1 : 1)
        setSampleData(sortedName);
        setNameAsc(true);
    }
    

    const rows = sampleData.map((user) =>
        <tr key={user.id}>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.name.firstname} {user.name.lastname}</td>
            <td>{user.phone}</td>
        </tr>
    );

  return (
    <div className='usertable'>
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Email
                        {emailAsc ? (
                            <button onClick={handleEmailSortAsc}>sort email ↑</button>
                        ):(
                            <button onClick={handleEmailSortDesc}>sort email ↓</button>
                        )}
                        {/* <button onClick={handleEmailSort}>sort email</button> */}

                    </th>
                    <th>Name  
                        {nameAsc ? (
                            <button onClick={handleNameSortAsc}>sort name ↑</button>
                        ):(
                            <button onClick={handleNameSortDesc}>sort name ↓</button>
                        )}
                        {/* <button onClick={handleNameSortAsc}>sort name</button> */}
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
