import React from 'react';
import { useImperativeHandle } from 'react';
import { useHistory } from 'react-router-dom';

export default function Header() {
    const titleText = `Lorem ipsum dolor sit amet`;
    const history = useHistory();
    return (
        <div className="Header">
            <h1>Friends Database</h1>
            <div>
                <button onClick={() => history.push('/login')}>LOGIN.</button>
                <button onClick={() => history.push('/friendsList')}>FRIENLIST.</button>
                <button onClick={() => history.push('/addfriends')}>ADDFRIEND.</button>
                <button onClick={() => history.push('/logout')}>LOGOUT.</button>
            </div>
        </div>
    )
}
