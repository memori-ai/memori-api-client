import * as speechSdk from 'microsoft-cognitiveservices-speech-sdk';

const getTTSVoice = (lang: string, voiceType: 'MALE' | 'FEMALE'): string => {
  let voice = '';
  let voiceLang = lang.toUpperCase();
  switch (voiceLang) {
    case 'IT':
      voice = `${
        voiceType === 'MALE' ? 'it-IT-DiegoNeural' : 'it-IT-ElsaNeural'
      }`;
      break;
    case 'DE':
      voice = `${
        voiceType === 'MALE' ? 'de-DE-ConradNeural' : 'de-DE-KatjaNeural'
      }`;
      break;
    case 'EN':
      voice = `${
        voiceType === 'MALE' ? 'en-GB-RyanNeural' : 'en-GB-SoniaNeural'
      }`;
      break;
    case 'ES':
      voice = `${
        voiceType === 'MALE' ? 'es-ES-AlvaroNeural' : 'es-ES-ElviraNeural'
      }`;
      break;
    case 'FR':
      voice = `${
        voiceType === 'MALE' ? 'fr-FR-HenriNeural' : 'fr-FR-DeniseNeural'
      }`;
      break;
    case 'PT':
      voice = `${
        voiceType === 'MALE' ? 'pt-PT-DuarteNeural' : 'pt-PT-RaquelNeural'
      }`;
      break;
    default:
      voice = `${
        voiceType === 'MALE' ? 'it-IT-DiegoNeural' : 'it-IT-IsabellaNeural'
      }`;
      break;
  }
  return voice;
};

const getCultureCodeByLanguage = (lang: string): string => {
  let voice = '';
  let voiceLang = lang.toUpperCase();
  switch (voiceLang) {
    case 'IT':
      voice = 'it-IT';
      break;
    case 'DE':
      voice = 'de-DE';
      break;
    case 'EN':
      voice = 'en-US';
      break;
    case 'ES':
      voice = 'es-ES';
      break;
    case 'FR':
      voice = 'fr-FR';
      break;
    case 'PT':
      voice = 'pt-PT';
      break;
    default:
      voice = 'it-IT';
      break;
  }
  return voice;
};

/**
 * EXPERIMENTAL
 */
const speech = (AZURE_COGNITIVE_SERVICES_TTS_KEY: string, DEBUG = false) => (
  lang: string,
  voiceType: 'FEMALE' | 'MALE'
) => {
  let speechConfig: speechSdk.SpeechConfig = speechSdk.SpeechConfig.fromSubscription(
    AZURE_COGNITIVE_SERVICES_TTS_KEY,
    'eastus'
  );
  let speechSynthesizer: speechSdk.SpeechSynthesizer | null;
  let audioDestination: speechSdk.SpeakerAudioDestination;

  audioDestination = new speechSdk.SpeakerAudioDestination();
  let audioOutputConfig = speechSdk.AudioConfig.fromSpeakerOutput(
    audioDestination
  );

  // https://docs.microsoft.com/it-it/azure/cognitive-services/speech-service/language-support#text-to-speech
  speechConfig.speechSynthesisVoiceName = getTTSVoice(lang, voiceType);

  let langCultureCode = getCultureCodeByLanguage(lang);
  speechConfig.speechSynthesisLanguage = langCultureCode;
  speechConfig.speechRecognitionLanguage = langCultureCode;

  /**
   * speak
   * @description Speaks the text using the speech synthesizer. (TTS)
   * @param {string} text - The text to be synthesized.
   * @param {func=} onAudioEnd - The callback to be invoked when the synthesized audio is finished.
   */
  const speak = (
    text: string,
    onAudioEnd?: (sender: speechSdk.IPlayer) => void
  ) => {
    stopSpeaking();

    speechSynthesizer = new speechSdk.SpeechSynthesizer(
      speechConfig,
      audioOutputConfig
    );

    if (onAudioEnd) audioDestination.onAudioEnd = onAudioEnd;

    speechSynthesizer.speakTextAsync(
      text,
      result => {
        if (result) {
          try {
            if (DEBUG) console.log('speak result', result);
            if (speechSynthesizer) {
              speechSynthesizer.close();
              speechSynthesizer = null;
            }
          } catch (e) {
            console.error('speak error: ', e);
            window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
          }
        } else if (DEBUG) {
          console.log('speak no result', result);
        }
      },
      error => {
        console.error('speak:', error);
        window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
      }
    );
  };

  /**
   * isSpeaking
   * @description Returns true if the synthesizer is speaking.
   * @returns {boolean}
   */
  const isSpeaking = (): boolean => {
    return !!speechSynthesizer;
  };

  /**
   * stopSpeaking
   * @description Stops the speech synthesizer if it is synthesizing.
   */
  const stopSpeaking = () => {
    if (audioDestination) audioDestination.pause();
    if (speechSynthesizer) {
      speechSynthesizer.close();
      speechSynthesizer = null;
    }
  };

  const audioInputConfig = speechSdk.AudioConfig.fromDefaultMicrophoneInput();
  let recognizer: speechSdk.SpeechRecognizer | null;

  /**
   * recognize
   * @description Starts the speech recognition.
   * @param {func=} onRecognized - Callback method invoked when the speech is recognized with the text.
   */
  const recognize = (onRecognized: (transcript: string) => void) => {
    recognizer = new speechSdk.SpeechRecognizer(speechConfig, audioInputConfig);

    recognizer.recognizing = (_s, e) => {
      if (DEBUG) console.log(`RECOGNIZING: Text=${e.result.text}`);
    };
    recognizer.recognized = (_s, e) => {
      if (e.result.reason === speechSdk.ResultReason.RecognizedSpeech) {
        if (DEBUG) console.log(`RECOGNIZED: Text=${e.result.text}`);
        onRecognized(e.result.text ?? '');
      } else if (e.result.reason === speechSdk.ResultReason.NoMatch && DEBUG) {
        console.log('NOMATCH: Speech could not be recognized.');
      }
    };
    recognizer.canceled = (_s, e) => {
      if (DEBUG) console.log(`CANCELED: Reason=${e.reason}`);

      if (e.reason === speechSdk.CancellationReason.Error && DEBUG) {
        console.log(`"CANCELED: ErrorCode=${e.errorCode}`);
        console.log(`"CANCELED: ErrorDetails=${e.errorDetails}`);
        console.log(
          'CANCELED: Did you set the speech resource key and region values?'
        );
      }

      stopRecognizing();
    };

    recognizer.sessionStopped = (_s, _e) => {
      if (DEBUG) console.log('\n    Session stopped event.');
      if (recognizer) recognizer.stopContinuousRecognitionAsync();
    };
    recognizer.startContinuousRecognitionAsync();
  };

  /**
   * isRecognizing
   * @description Returns true if the recognizer is recognizing.
   * @returns {boolean}
   */
  const isRecognizing = (): boolean => {
    return !!recognizer;
  };

  /**
   * stopRecognizing
   * @description Stops the speech recognizer if it is recognizing.
   * @param {func=} onStop - (optional) The callback to be invoked when the speech recognition is stopped.
   */
  const stopRecognizing = (onStop?: () => void) => {
    if (recognizer) {
      recognizer.stopContinuousRecognitionAsync();
      recognizer.close();
      recognizer = null;

      if (onStop) onStop();
    }
  };

  return {
    speak,
    isSpeaking,
    stopSpeaking,
    recognize,
    isRecognizing,
    stopRecognizing,
  };
};

export default speech;
