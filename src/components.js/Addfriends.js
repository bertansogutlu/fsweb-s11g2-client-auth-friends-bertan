import React, { useState } from 'react';
import axios from 'axios';

export default function Addfriends() {
    const [friend, setFriend] = useState({
        id: Date.now(),
        name: 'Bertan',
        age: 30,
        email: 'bert@schoolintech.com',
    });

    const submit = (event) => {
        event.preventDefault();
  
        axios.post('http://localhost:9000/api/friends', friend, {
            headers: {
                Authorization: localStorage.getItem("token"),
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <form onSubmit={submit}>
            <div className="Addfriends">
                <h2>ADD FRIEND</h2>
                <label>
                    <h3>FRIEND NAME</h3>
                    <input value={friend.name} onChange={(event) => setFriend({ ...friend, name: event.target.value })}></input>
                </label>
                <label>
                    <h3>FRIEND AGE</h3>
                    <input value={friend.age} onChange={(event) => setFriend({ ...friend, age: event.target.value })}></input>
                </label>
                <label>
                    <h3>FRIEND EMAIL</h3>
                    <input value={friend.email} onChange={(event) => setFriend({ ...friend, email: event.target.value })}></input>
                </label>
                <button>
                    SUBMIT
                </button>
            </div>
        </form>
    )
}