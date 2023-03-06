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
      prompt: 'a white siamese cat',
      n: 1,
      size: '1024x1024',
    });
    const image_url = response.data.data[0].url;
    return image_url;
  }

  async generateText() {
    const result = await this.openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant.',
        },
        {
          role: 'user',
          content: 'ChatGPT에 대해 설명해줘.',
        },
      ],
    });
    return result.data.choices[0].message.content;
  }
}
