import {
  GoogleGenAI,
  type GenerateContentConfig,
} from '@google/genai';
import { CURATOR_RESPONSE_SCHEMA, getCuratorSystemInstruction } from './constants';
import { CuratorResponse } from '../../domain/curator';

const safeParseJsonString = (val: string) => {
  try {
    const obj = JSON.parse(val)
    return {
      parsed: obj,
      isJsonString: true
    }
  } catch(e) {
    return {
      parsed: null,
      isJsonString: false
    }
  }
}

export async function getModelResponse(userInput: string, previousChallenges: string[]): Promise<CuratorResponse | null> {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });
  const config: GenerateContentConfig = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
    responseMimeType: 'application/json',
    responseSchema: CURATOR_RESPONSE_SCHEMA,
    systemInstruction: [
        {
          text: getCuratorSystemInstruction(previousChallenges),
        }
    ],
  };
  const model = 'gemini-2.5-flash';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: userInput,
        },
      ],
    },
  ];

  const response = await ai.models.generateContent({
    model,
    config,
    contents,
  });

  if (!response.text) {
    return null
  }

  const parsed = safeParseJsonString(response.text)
  return parsed.parsed
}

