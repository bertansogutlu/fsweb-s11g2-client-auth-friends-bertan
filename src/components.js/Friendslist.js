import React, { useState } from 'react';
import axios from 'axios';

export default function Friendslist() {
    const [friendslist, setFriendslist] = useState([]);
    console.log(friendslist)

    axios.get('http://localhost:9000/api/friends', {
        headers: {
            Authorization: localStorage.getItem("token"),
        }
    })
        .then(function (response) {
            console.log(response);
            setFriendslist(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });

    return (
        <div className='Friendslist'>
            <h2>Friends List</h2>
            <ul>
            {friendslist.map(friend =>
                <li>{`-${friend.name}-${friend.email}`}</li>
            )}
            </ul>
        </div>
    )
}