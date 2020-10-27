import React,{useState} from 'react';
import axios from 'axios';

export default () => {
    const [isMessageSent, setIsMessageSent] = useState(false);
    const handleFormSubmit = async (event) =>  {
        event.preventDefault();
        let obj = {
            'message': event.target.elements.message.value,
            'sender': event.target.elements.sender.value,
            'receiver': event.target.elements.receiver.value,
            'subject': event.target.elements.subject.value
        };
        const response = await axios.post("http://localhost:3001/messaging/write-message", obj);
        setIsMessageSent(true);
    }
    const sendMoreMessage = () =>{
        debugger
        // event.preventDefault();
        setIsMessageSent(false);
    }

    return (
        <div className="row">
            <div className="col-xl-4 col-lg-4 tm-flex-center-v tm-section-left">
                {isMessageSent ? 
                    <button type="submit" className="btn tm-btn-primary tm-send-btn" onClick={sendMoreMessage}>send more</button>
                :
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
                }
            </div>
            <div className="col-xl-8 col-lg-8 tm-circle-img-container tm-contact-right">
            <img src={require('../img/img-01.jpg')} alt="message" className="rounded-circle tm-circle-img"/>
                
            </div>
            
    </div>
        
    )
}