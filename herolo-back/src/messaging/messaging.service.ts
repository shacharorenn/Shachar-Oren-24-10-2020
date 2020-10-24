import { Injectable, GoneException, NotFoundException } from '@nestjs/common';
import {MessageClassDto} from '../common/messageClass'
import { v4 as uuid } from 'uuid';
import { DbService } from 'src/db-service/db-service.service';

@Injectable()
export class MessagingService {
    constructor(private dbService: DbService) {}

    public addMessage(message: MessageClassDto): string {
        if(!this.dbService.checkIfUserExists(message.receiver)){
            this.dbService.createNewUser(message.receiver);
        }

        message.id = uuid();
        message.creationDate = new Date();
        this.dbService.pushMessageToUser(message.receiver, message);
        return message.id;
    }

    public getAllMessagesOfUser(userId: string): MessageClassDto[]{
        if(!this.dbService.checkIfUserExists(userId)){
            return null;
        }
        
        return this.dbService.getAllMessagesOfUser(userId);
    }

    public deleteMessageOfUser(userId: string, messageId: string): boolean {
        return this.dbService.deleteMessageOfUser(userId, messageId);
    }
}
