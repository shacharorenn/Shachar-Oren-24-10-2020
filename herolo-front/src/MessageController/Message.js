import React from 'react';

export const Message = (props) => {
    return(
        <li class="list-group-item">
            <div className="container-msg">
                <div>
                    <h5>{props.from}</h5>
                    <h5>{props.to}</h5>
                    <p>{props.subject}</p>
                    <p>{props.content}</p>
                    <p>{props.date}</p>
                </div>
                <div>
                    <span className="mx-2 text-danger" onClick={props.handleDelete}>
                        <i className="fas fa-trash" />
                    </span>
                </div>
            </div>
        </li>

    )
}