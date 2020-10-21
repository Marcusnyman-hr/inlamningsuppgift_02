import React, {useState, useEffect} from 'react';
import './members.styles.scss';

export default function Members() {
  const [secretMembers, setSecretMembers] = useState([]);

  //fetch users from jsonplaceholder
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setSecretMembers(data));
  })


  return (
    <div className='secret-members'>
      {secretMembers.map((user, index) => {
        return (
          <div className='secret-member' key={index}>
            <img src={`https://randomuser.me/api/portraits/women/2${index}.jpg`} className='secret-member-prof-pic' alt='prof-pix'/>
            <div className='secret-member-info'>
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
            </div>
          </div>
        )
      })}
    </div>
  )
}
