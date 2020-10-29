  
import axios from 'axios';

class MessageServices {
    constructor(){
        this.url = 'http://localhost:3001/messaging/';
    }
    //get messages from server
    getUserMessages = async (userId) => {
        return await axios.get(`${this.url}get-all-messages/${userId}`);
    }       
    //add new message to server 
    setUserMessage = async (msg) => {
        await axios.post(`${this.url}write-message`, msg);
    } 
    //delete message from server 
    deleteUserMessage = async (data) => {
        await axios.delete(`${this.url}delete-message`, data);
    }  


}
//show only instance and not all the class
export default new MessageServices();
