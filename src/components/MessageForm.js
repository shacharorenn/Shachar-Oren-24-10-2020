
// import React,{useEffect,useState} from 'react';
import React from 'react'

export default () => {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("event is:" + event);
    }

    return (
        <div className="row">
            <div className="col-xl-4 col-lg-4 tm-flex-center-v tm-section-left">
                {/* <form className="tm-contact-form" method="POST" action="http://localhost:3001/messaging/write-message" > */}
                <form className="tm-contact-form" onSubmit={handleFormSubmit}>
                    <div className="form-group mb-4">
                        <input type="text" id="sender" name="sender" className="form-control" placeholder="From" required/>
                    </div>
                    <div className="form-group mb-4">
                        <input type="text" id="receiver" name="receiver" className="form-control" placeholder="To" required/>
                    </div>
                    <div className="form-group mb-4">
                        <textarea rows="1" id="subject" name="subject" className="form-control" placeholder="Subject..." required></textarea>
                    </div>
                    <div className="form-group mb-6">
                        <textarea rows="5" id="message" name="message" className="form-control" placeholder="Message..." required></textarea>
                    </div>
                    <div className="form-group mb-0 text-right">
                        <button type="submit" className="btn tm-btn-primary tm-send-btn">Send</button>
                    </div>
                </form>
            </div>
            <div className="col-xl-8 col-lg-8 tm-circle-img-container tm-contact-right">
                <img src="../img/img-01.jpg" alt="message" className="rounded-circle tm-circle-img"/>
            </div>
    </div>
    )
}



//     // const [messagesState, setMessagesState] = useState([]);
//     // useEffect (()=>{
//     //     fetch("https://nztodo.herokuapp.com/api/task/?format=json")//change so get all messages for specific ID
//     //     .then(respone => respone.json())
//     //     .then(messages => setMessagesState(messages))
//     // },[])

