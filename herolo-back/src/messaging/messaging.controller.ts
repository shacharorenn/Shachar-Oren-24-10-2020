import { Controller, Get, Post, Body, Param, Delete} from '@nestjs/common';
import {MessageClassDto} from '../common/messageClass'
import {MessagingService} from './messaging.service'

@Controller('messaging')
export class MessagingController {
    constructor(private messagingService: MessagingService) {}
    @Post('write-message')
    writeMessage(@Body() body: MessageClassDto): string {
        return this.messagingService.addMessage(body);
    }

    @Get('get-all-messages/:user_id')
    getAllMessages(@Param('user_id') user_id): MessageClassDto[] {
        return this.messagingService.getAllMessagesOfUser(user_id);
    }

    @Delete('delete-message')
    deleteMessage(@Body() body): boolean {
        console.log(body);
        return this.messagingService.deleteMessageOfUser(body.receiver, body.id);
    }
}
