import memori from '../src/index';

const client = memori();

describe('speech', () => {
  const speech = client.speech('123456', true)('it', 'FEMALE');

  it('works for tts/speak', async () => {
    expect(speech.speak).toBeDefined();
  });
  it('works for tts/isSpeaking', async () => {
    expect(speech.isSpeaking).toBeDefined();
  });
  it('works for tts/stopSpeaking', async () => {
    expect(speech.stopSpeaking).toBeDefined();
  });

  it('works for stt/recognize', async () => {
    expect(speech.recognize).toBeDefined();
  });
  it('works for stt/isRecognizing', async () => {
    expect(speech.isRecognizing).toBeDefined();
  });
  it('works for stt/stopRecognizing', async () => {
    expect(speech.stopRecognizing).toBeDefined();
  });
});
