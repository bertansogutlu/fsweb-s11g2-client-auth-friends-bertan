import React from 'react';

export default function Header() {
    const titleText = `Lorem ipsum dolor sit amet`;
    return (
        <div className="Header">
            <h1>Friends Database</h1>
            <div>
                <button>LOGIN.</button>
                <button>FRIENLIST.</button>
                <button>ADDFRIEND.</button>
                <button>LOGOUT.</button>
            </div>
        </div>
    )
}
