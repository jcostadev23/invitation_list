import React, { useEffect, useState } from 'react';
import PersonCard from './personCard';
import { getFriends, onChange } from './ListFriends.logic';

export default function ListFriends (){
  const [listFriends, setListFriends] = useState(JSON.parse(localStorage.getItem('listOfFriends')) || []);

  useEffect(() => {
    if(listFriends.length === 0){
      getFriends()
        .then(friends =>{
          setListFriends(friends)
      })
    }
  }, [listFriends]);

  function handleOnDrag(e , friend){
    e.dataTransfer.setData("friend", JSON.stringify(friend));
  }

  function handleOnDrop(e, invited){
    e.preventDefault();

    const friend = JSON.parse(e.dataTransfer.getData("friend"))
    setListFriends(preventList =>
      preventList.filter(person=> person.id !== friend.id));
      const updatedInvitation = {...friend, invited};
     
    setListFriends(prevList => [...prevList, updatedInvitation]);
    localStorage.setItem('listOfFriends', JSON.stringify([...listFriends, updatedInvitation]));
  }

  function handleDragOver(e){
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }

  const invited = listFriends.filter((friend)=> friend.invited);
  const notinvited = listFriends.filter((friend)=> !friend.invited);

  return (
    <div>
      <h1 className='header'>Not Invited</h1>
        <div className='user-list' onDrop={(e)=> handleOnDrop(e, false)} onDragOver={handleDragOver}>
          {notinvited.map((friend, index)=>(
            <div className='user-list' key={index}
              draggable
              onDragStart={(e)=> handleOnDrag(e, friend)}>
              <PersonCard friend={friend}/>
              <button className='button' 
                onClick={()=> onChange(friend.id, true, listFriends, setListFriends)}>
                Invite</button>
            </div>
          ))}   
        </div>

      <h1 className='header'>Invited Friends</h1>
        <div className='user-list' onDrop={(e)=> handleOnDrop(e, true)} onDragOver={handleDragOver}>
          {invited.map((friend, index) => (
            <div className='user-card' key={index}
              draggable
              onDragStart={(e)=> handleOnDrag(e, friend)}>
              <PersonCard friend={friend} />
              <button className='button'
                onClick={() => onChange(friend.id, false, listFriends, setListFriends)}>
                Desinvited
              </button>
            </div>
            ))}
        </div>
      <button className='button' onClick={()=> localStorage.clear()}>Clear Storage</button> 
    </div>
  )
};

