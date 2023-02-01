/**
 * EXPERIMENTAL
 */
declare const speech: (AZURE_COGNITIVE_SERVICES_TTS_KEY: string, DEBUG?: boolean) => (lang: string, voiceType: 'FEMALE' | 'MALE') => {
    speak: (text: string, onAudioEnd?: ((sender: any) => void) | undefined) => void;
    isSpeaking: () => boolean;
    stopSpeaking: () => void;
    recognize: (onRecognized: (transcript: string) => void) => void;
    isRecognizing: () => boolean;
    stopRecognizing: (onStop?: (() => void) | undefined) => void;
};
export default speech;
