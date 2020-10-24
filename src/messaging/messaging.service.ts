import { Injectable } from '@nestjs/common';
import {MessageClassDto} from '../common/messageClass'
import { v4 as uuid } from 'uuid';

@Injectable()
export class MessagingService {
    private messagingMap = [];

    public addMessage(message: MessageClassDto) {
        if(!this.messagingMap[message.receiver]){
            this.messagingMap[message.receiver] = [];
        }
        message.id = uuid();
        message.creationDate = new Date();
        this.messagingMap[message.receiver].push(message);
    }
    public getAllMessagesOfUser(user_id: string): MessageClassDto[]{
        if(!this.messagingMap[user_id]){
            return null;
        }
        
        return this.messagingMap[user_id];
    }
}
