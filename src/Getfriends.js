import React, { useEffect, useState } from 'react';
import PersonCard from './personCard';

export default function ListFriends (){
  const [listFriends, setListFriends] = useState(JSON.parse(localStorage.getItem('listOfFriends')) || []);
 
  useEffect(() => {
    if(listFriends.length === 0){
    async function getFriends (){
      try {
        const getusers = await fetch('https://reqres.in/api/users');
        const users = await getusers.json();
        const newList = users.data.map((friend)=>(
          {id: friend.id,
          name: friend.first_name,
          last_name: friend.last_name,
          email: friend.email,
          avatar: friend.avatar,
          invited: false,
        }))
        localStorage.setItem('listOfFriends', JSON.stringify(newList))
      } catch (error) {
        console.log('Error fetching friends:', error);
      }
    };
    getFriends();
  }
  }, []);

  const onChange = (id, invited)=>{
    const posiçao = listFriends.findIndex((friend)=> friend.id===id)
    listFriends[posiçao].invited = (!invited)
    setListFriends([...listFriends])
    localStorage.setItem('listOfFriends', JSON.stringify(listFriends))
  }

  const invited = listFriends.filter((friend)=> friend.invited);
  const notinvited = listFriends.filter((friend)=> !friend.invited);
 
  return (
    <div>
      <h1 className='header'>Invited Friends</h1>
      <div className='user-list'>
        {invited.map((friend) => (
          <div className='user-card' key={friend.id}>
          <PersonCard friend={friend} />
            <button className='button' onClick={()=> onChange(friend.id, friend.invited)}>Desinvited</button>
          </div>
        ))}
        </div>
       
      <h1 className='header'>Not Invited</h1>
      <div className='user-list'>
        {notinvited.map((friend) => (
          <div className='user-card' key={friend.id}>
          <PersonCard friend={friend}/>
            <button className='button' onClick={()=> onChange(friend.id, friend.invited)}>Invite</button>
          </div>
        ))}
      </div>
      <button className='button' onClick={()=> localStorage.clear()}>Clear Storage</button> 
    </div>
  );
};

