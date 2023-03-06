import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class GptService {
  configuration = new Configuration({
    apiKey: process.env.GPT_KEY,
  });
  openai = new OpenAIApi(this.configuration);

  async generatePicture() {
    const response = await this.openai.createImage({
      prompt: 'unicorn, rainbow, and a horse',
      n: 1,
      size: '1024x1024',
    });
    const image_url = response.data.data[0].url;
    return image_url;
  }
}
