import { Injectable, Session } from '@nestjs/common';
import { Configuration, OpenAIApi, ChatCompletionRequestMessage } from 'openai';

@Injectable()
export class GptService {
  configuration = new Configuration({
    apiKey: process.env.GPT_KEY,
  });
  openai = new OpenAIApi(this.configuration);

  async talk(text: string, session_id: string) {
    if (Session[session_id] == undefined) {
      Session[session_id] = Array<ChatCompletionRequestMessage>();
      Session[session_id].push({
        role: 'system',
        content: 'You are a helpful assistant.',
      });
    }
    Session[session_id].push({
      role: 'user',
      content: text,
    });
    const result_descript = await this.openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: Session[session_id],
    });
    Session[session_id].push({
      role: 'system',
      content: result_descript.data.choices[0].message.content,
    });
    return result_descript.data.choices[0].message.content;
  }

  // async generatePicture(text: string) {
  //   const response = await this.openai.createImage({
  //     prompt: text,
  //     n: 2,
  //     size: '1024x1024',
  //   });
  //   const image_url = response.data.data[0].url;
  //   return image_url;
  // }

  // async generateText(text: string) {
  //   this.prompt.push({
  //     role: 'system',
  //     content:
  //       'You are a helpful assistant for organizing prompt for generating images',
  //   });
  //   this.prompt.push({
  //     role: 'user',
  //     content: `Imagine ${text} and describe it in detail.`,
  //   });
  //   const result_descript = await this.openai.createChatCompletion({
  //     model: 'gpt-3.5-turbo',
  //     messages: this.prompt,
  //   });

  //   this.prompt.push({
  //     role: 'system',
  //     content: result_descript.data.choices[0].message.content,
  //   });
  //   this.prompt.push({
  //     role: 'user',
  //     content:
  //       'Condense the description to focus on nouns and adjectives separated by ,',
  //   });
  //   const result_nouns = await this.openai.createChatCompletion({
  //     model: 'gpt-3.5-turbo',
  //     messages: this.prompt,
  //   });

  //   return await this.generatePicture(
  //     result_nouns.data.choices[0].message.content,
  //   );

  //   // return result_nouns.data.choices[0].message.content;
  // }
}
