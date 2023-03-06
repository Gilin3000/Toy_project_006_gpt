import { Injectable } from '@nestjs/common';
import { GptService } from 'src/gpt/gpt.service';

@Injectable()
export class FeedService {
  constructor(private readonly gptService: GptService) {}

  async generatePicture(word: string) {
    const result = await this.gptService.generateText(word);
    return result;
  }
}
