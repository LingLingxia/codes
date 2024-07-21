import React from 'react';
import { Link, Route, Switch ,Redirect } from 'react-router-dom'
const routerHtml = ()=>{
    return (
        <ul>
        <li>
          <Link to="/redux-test">redux-test</Link>
        </li>
        <li>
          <Link to="/todo-item">todo item</Link>
        </li>
        <li>
           <Link to="/text-area">controled-component</Link>
        </li>
        <li>
          <Link to="/status-promotion"> status-promotion </Link>
        </li>
        <li>
          <Link to="/strange-clock"> strange-clock </Link>
        </li>
        <li>
          <Link to="/comment-box"> comment-box </Link>
        </li>
        <li>
           <Link to="/strange-button"> strange-button </Link>
        </li>
        <li>
           <Link to="/game"> game</Link>
        </li>
        <li>
             <Link to="/exception"> exception catcher</Link>
        </li>

        <li>
             <Link to="/react-delect-demo">  react-delect-demo</Link>
        </li>

        <li>
             <Link to="/game/demo">  switch demo</Link>
        </li>

      </ul>
    )
}

export default routerHtml;