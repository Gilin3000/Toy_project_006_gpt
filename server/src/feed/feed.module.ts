import { GptModule } from './../gpt/gpt.module';
import { Module } from '@nestjs/common';
import { FeedController } from './feed.controller';
import { FeedService } from './feed.service';

@Module({
  imports: [GptModule],
  controllers: [FeedController],
  providers: [FeedService],
})
export class FeedModule {}
