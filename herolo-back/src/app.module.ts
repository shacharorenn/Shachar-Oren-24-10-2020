import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagingModule } from './messaging/messaging.module';
import { DbService } from './db-service/db-service.service';

@Module({
  imports: [MessagingModule],
  controllers: [AppController],
  providers: [AppService, DbService],
})
export class AppModule {}
