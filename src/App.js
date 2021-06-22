import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import userData from './Data/data.json';
import Display from './component/users/Display';
function App() {
  const [users, setUser] = useState([]);
  useEffect(()=>{
     fetch(`https://randomuser.me/api/?results=15`)
      .then(res => res.json())
      .then(data => setUser(data.results))
  },[])
  const handleClick = (fullName) =>{
    console.log(fullName);
  }
  return (
    <div>
      {
        users.map(user => <Display Data={user} handleClick={handleClick}></Display>)
      }
    </div>
  );
}

export default App;
