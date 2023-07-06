const { Configuration, OpenAIApi } = require('openai')
const connectOpenAI = async (message) => {
  // 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
  // const client = new openai.OpenAIClient('api_key', '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');

  const configuration = new Configuration({
    apiKey: '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'
  })
  const openai = new OpenAIApi(configuration)
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: message,
    temperature: 0.9,
    max_tokens: 250,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.6,
    stop: [' Human:', ' AI:']
  })
  return response.data
}

module.exports = connectOpenAI
