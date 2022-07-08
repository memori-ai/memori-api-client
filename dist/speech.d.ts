import * as speechSdk from 'microsoft-cognitiveservices-speech-sdk';
declare const speech: (AZURE_COGNITIVE_SERVICES_TTS_KEY: string, DEBUG?: boolean) => (lang: string, voiceType: 'FEMALE' | 'MALE') => {
    speak: (text: string, onAudioEnd?: ((sender: speechSdk.IPlayer) => void) | undefined) => void;
    isSpeaking: () => boolean;
    stopSpeaking: () => void;
    recognize: (onRecognized: (transcript: string) => void) => void;
    isRecognizing: () => boolean;
    stopRecognizing: (onStop?: (() => void) | undefined) => void;
};
export default speech;
