import React,{useState, useRef} from 'react';
import {Message} from './Message';
import MessageServices from '../services/MessageServices'

export const AllMessages = () => { 
    const [messagesState, setMessages] = useState([]);
    const inputRef = useRef();
    const getAllMessages = async (event) =>{
        if(event){
            event.preventDefault();
        }
        const userId = inputRef.current.value;
        debugger;
        const userMessages = await MessageServices.getUserMessages(userId);
        if(userMessages.data){
            if(userMessages.data.length===0){
                //user exist but have no messages
                const notMessageForUser = {
                    error: "user has no message"
                }
                setMessages(notMessageForUser);
            }else{
                setMessages(userMessages.data);
            }
            
        }else{
            const userNotFound = {
                error: "user not found"
            }
            setMessages(userNotFound);
        }
    }

    const handleDelete = async (id,receiver) => {
        let msg = {
            'id': id,
            'receiver': receiver,
        };
        MessageServices.deleteUserMessage({ data: msg });
        getAllMessages();
    };

    return(
        <form onSubmit={getAllMessages}>
        <div className="message-style">
            <div className="tm-bg-circle-white tm-flex-center-v">
                <header className="text-center">
                    <h1 className="tm-site-title">Insert name</h1>
                    <input ref={inputRef} type="text" id="userInput" name="userInput"/>
                    <p className="tm-site-subtitle">Insert the name and get all messages</p>
                </header>
                <p className="text-center mt-4 mb-0">
                    <button type="submit" className="btn tm-btn-secondary">Show Messages</button>
                </p>
            </div>
            <div className="message-item all-messages">
            {messagesState.error ? <h1>{messagesState.error} </h1>: 
                messagesState.map(message => (
                    <ul class="list-group">
                        <Message handleDelete={() => handleDelete(message.id,message.receiver)} from = {message.sender} to = {message.receiver} subject = {message.subject} content = {message.message} date = {message.creationDate}/>
                    </ul>
                ))
            }
            </div>
        </div>
        </form>
    )
}