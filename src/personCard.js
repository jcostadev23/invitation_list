import React from 'react'
import './styles.css';

function PersonCard({friend}){
    return (
        <div className='user-info' >
            <img className='user-avatar' src={friend.avatar} alt="Avatar" />
            <div >
                <p >{friend.name} {friend.last_name} {friend.invited}</p>
                <p >{friend.email}</p>
            </div>
        </div>
    )
}

export default PersonCard;