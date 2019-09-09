/* const element = document.createElement('h1')
element.innerText = 'hello you'
const container = document.getElementById('root')
container.appendChild(element) */

import React from 'react';
import ReactDOM from 'react-dom';

const user = {
    firstName: 'Miguel',
    lastName: 'Angel',
    avatar: '',
}
function getName(user){
    return `${user.firstName} ${user.lastName}`
}
function getGreeting(user) {
    if(user){
        return <h1>Helo {getName(user)}</h1>
    }
    return <h1>Hello Strange</h1>
}

const name = 'Miguel'
const element = <div>{getGreeting(user)}</div>
const container = document.getElementById('root')
ReactDOM.render(element, container)