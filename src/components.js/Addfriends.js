import React from 'react';

export default function Addfriends() {
    const titleText = `Lorem ipsum dolor sit amet`;
    return (
        <div className="Addfriends">
            <h2>ADD FRIEND</h2>
            <label>
                <h3>Username</h3>
                <input></input>
            </label>
            <label>
                <h3>Password</h3>
                <input></input>
            </label>
            <button>
                SUBMIT
            </button>
        </div>
    )
}