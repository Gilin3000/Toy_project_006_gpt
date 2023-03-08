import { Controller, Get, Body, Session } from '@nestjs/common';
import { GptService } from './gpt.service';

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Get()
  async Talk(
    @Body('word') word: string,
    @Session() session: Record<string, any>,
  ) {
    return await this.gptService.talk(word, session.id);
  }
}
