import { Controller, Get, Body, Session } from '@nestjs/common';
import { FeedService } from './feed.service';

@Controller('api/feed')
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @Get('/test')
  async test(@Session() session: Record<string, any>) {
    console.log(session);
    console.log(session.id);
    return 'test';
  }

  @Get('/talk')
  async simpleTalk(
    @Body('word') word: string,
    @Session() session: Record<string, any>,
  ) {
    console.log(session);
    console.log(session.id);
    return await this.feedService.simpleTalk(word);
  }

  @Get('/picture')
  async generatePicture(@Body('word') word: string) {
    return await this.feedService.generatePicture(word);
  }
}
