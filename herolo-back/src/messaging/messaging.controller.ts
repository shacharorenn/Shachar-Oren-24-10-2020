import { Controller, Get, Post, Body, Param, Delete} from '@nestjs/common';
import {MessageClassDto} from '../common/messageClass'
import {MessagingService} from './messaging.service'

@Controller('messaging')
export class MessagingController {
    constructor(private messagingService: MessagingService) {}
    @Post('write-message')
    writeMessage(@Body() message: MessageClassDto): string {
        return this.messagingService.addMessage(message);
    }

    @Get('get-all-messages/:user_id')
    getAllMessages(@Param('user_id') user_id): MessageClassDto[] {
        return this.messagingService.getAllMessagesOfUser(user_id);
    }

    @Delete('delete-message')
    deletMessage(@Body() body): boolean {
        return this.messagingService.deleteMessageOfUser(body.userId, body.messageId);
    }
}
