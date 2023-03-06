import { GptService } from './gpt.service';
import { Controller, Get } from '@nestjs/common';

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Get('/picture')
  async generatePicture() {
    return await this.gptService.generatePicture();
  }

  @Get('/text')
  async generateText() {
    return await this.gptService.generateText();
  }
}
