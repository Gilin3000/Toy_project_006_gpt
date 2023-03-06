import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GptModule } from './gpt/gpt.module';
import { FeedModule } from './feed/feed.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), GptModule, FeedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
