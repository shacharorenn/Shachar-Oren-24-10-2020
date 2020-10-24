//message in message list

import React from 'react';


export default function Message(props){
    return(
        <div>
             <li class="list-group-item">
                <h5>{props.from}</h5>
                <h5>{props.to}</h5>
                <p>{props.content}</p>
                <p>{props.date}</p>
             </li>
        </div>
    )
}