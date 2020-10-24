import { Module } from '@nestjs/common';
import { MessagingController } from './messaging.controller';
import { MessagingService } from './messaging.service';
import { DbService } from 'src/db-service/db-service.service';

@Module({
  controllers: [MessagingController],
  providers: [MessagingService, DbService]
})
export class MessagingModule {}
