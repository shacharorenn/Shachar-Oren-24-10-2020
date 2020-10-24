// for each message create messages
import React,{useEffect,useState} from 'react';
import Message from './Message'


export default function AllMessages(){
    const [messagesState, setMessagesState] = useState([]);

    //when press the button, get all user message 
    
    const getAllMessages = () =>{
        let url = "http://localhost:3001/messaging/get-all-messages/"+ document.querySelector("#userInput");
        fetch('/api/data')
        .then(response => response.json())
        .then(result => setMessagesState({ data: result }))
    }

    return(
        <div className="tm-bg-circle-white tm-flex-center-v">
            <header className="text-center">
                <h1 className="tm-site-title">Insert name</h1>
                <input id="userInput" type="text"></input>
                <p className="tm-site-subtitle">Insert the name and get all messages</p>
            </header>
            {messagesState.map (message => (
                <ul class="list-group">
                    <Message from = {message.from} to = {message.to} content = {message.content} date = {message.date}/>
                </ul>
            ))}
            {/* <p>This HTML page features alternating circular spots in a clean and attractive way. You may use this template for any purpose. Photos are from Unsplash website.</p> */}
            <p className="text-center mt-4 mb-0">
                <a data-scroll href="#tm-section-2" className="btn tm-btn-secondary">show messages</a>
            </p>
        </div>
    )
}