import { Controller, Get, Body } from '@nestjs/common';
import { FeedService } from './feed.service';

@Controller('api/feed')
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @Get('/picture')
  async generatePicture(@Body('word') word: string) {
    return await this.feedService.generatePicture(word);
  }
}
