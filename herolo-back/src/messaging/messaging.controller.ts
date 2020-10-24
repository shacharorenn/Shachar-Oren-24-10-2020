import { Controller, Get, Post, Body, Param, Delete} from '@nestjs/common';
import {MessageClassDto} from '../common/messageClass'
import {MessagingService} from './messaging.service'

@Controller('messaging')
export class MessagingController {
    constructor(private messagingService: MessagingService) {}
    @Post('write-message')
    writeMessage(@Body() message: MessageClassDto): void {
        this.messagingService.addMessage(message);
        //message.id = '11';
        // console.log(message);
        //MessagingService.addMessage(message);
        return;
    }

    @Get('get-all-messages/:user_id')
    getAllMessages(@Param('user_id') user_id): MessageClassDto[] {
        return this.messagingService.getAllMessagesOfUser(user_id);
    }

    @Delete('delete-message')
    findAll(): string {
        console.log("here!!!");
        return 'This action returns all cats';
    }
}
