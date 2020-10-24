import { Injectable } from '@nestjs/common';
import {MessageClassDto} from '../common/messageClass'
import { BreakException } from 'src/common/Break.exception';

@Injectable()
export class DbService {
    private messagingMap  = [];

    checkIfUserExists(userId: string): boolean {
        return this.messagingMap[userId] ? true : false;
    }

    createNewUser(userId: string): void {
        this.messagingMap[userId] = [];
    }

    pushMessageToUser(userId: string, message: MessageClassDto){
        this.messagingMap[userId].push(message);
    }

    getAllMessagesOfUser(userId: string): MessageClassDto[]{
        return this.messagingMap[userId];
    }

    deleteMessageOfUser(userId: string, messageId: string): boolean {
        let isDeleted: boolean = false;
        try{
        this.messagingMap[userId].forEach(function(item, index, object) {
                if (item.id === messageId) {
                    object.splice(index, 1);
                    isDeleted = true;
                    throw new BreakException();
                }
            });
        }
        finally{
            return isDeleted;
        }

    }
}
