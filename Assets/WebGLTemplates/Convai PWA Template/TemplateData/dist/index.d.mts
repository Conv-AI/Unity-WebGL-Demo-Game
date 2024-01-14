import * as jspb from 'google-protobuf';

interface BlendShape {
    Mouth_Drop_Lower?: number;
    Mouth_Shrug_Upper?: number;
    Mouth_Press_R?: number;
    Mouth_Press_L?: number;
    V_Explosive?: number;
    V_Lip_Open?: number;
    V_Dental_Lip?: number;
    V_Tight_O?: number;
    V_Tongue_Out?: number;
    Open_Jaw?: number;
    Tongue?: number;
}
declare const OvrToMorph: (viseme: {
    [key: number]: number;
}, blendShapeRef: {
    current: BlendShape[];
}) => void;

// package: service
// file: service/service.proto



declare class AudioConfig extends jspb.Message {
  getSampleRateHertz(): number;
  setSampleRateHertz(value: number): void;

  getDisableAudio(): boolean;
  setDisableAudio(value: boolean): void;

  getEnableFacialData(): boolean;
  setEnableFacialData(value: boolean): void;

  getFaceModel(): FaceModelMap[keyof FaceModelMap];
  setFaceModel(value: FaceModelMap[keyof FaceModelMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AudioConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AudioConfig): AudioConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AudioConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AudioConfig;
  static deserializeBinaryFromReader(message: AudioConfig, reader: jspb.BinaryReader): AudioConfig;
}

declare namespace AudioConfig {
  export type AsObject = {
    sampleRateHertz: number,
    disableAudio: boolean,
    enableFacialData: boolean,
    faceModel: FaceModelMap[keyof FaceModelMap],
  }
}

declare class GetResponseResponse extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): void;

  hasActionResponse(): boolean;
  clearActionResponse(): void;
  getActionResponse(): GetResponseResponse.ActionResponse | undefined;
  setActionResponse(value?: GetResponseResponse.ActionResponse): void;

  hasAudioResponse(): boolean;
  clearAudioResponse(): void;
  getAudioResponse(): GetResponseResponse.AudioResponse | undefined;
  setAudioResponse(value?: GetResponseResponse.AudioResponse): void;

  hasDebugLog(): boolean;
  clearDebugLog(): void;
  getDebugLog(): string;
  setDebugLog(value: string): void;

  hasUserQuery(): boolean;
  clearUserQuery(): void;
  getUserQuery(): GetResponseResponse.UserTranscript | undefined;
  setUserQuery(value?: GetResponseResponse.UserTranscript): void;

  hasBtResponse(): boolean;
  clearBtResponse(): void;
  getBtResponse(): GetResponseResponse.BehaviorTreeResponse | undefined;
  setBtResponse(value?: GetResponseResponse.BehaviorTreeResponse): void;

  hasEmotionResponse(): boolean;
  clearEmotionResponse(): void;
  getEmotionResponse(): string;
  setEmotionResponse(value: string): void;

  getResponseTypeCase(): GetResponseResponse.ResponseTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResponseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResponseResponse): GetResponseResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetResponseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResponseResponse;
  static deserializeBinaryFromReader(message: GetResponseResponse, reader: jspb.BinaryReader): GetResponseResponse;
}

declare namespace GetResponseResponse {
  export type AsObject = {
    sessionId: string,
    actionResponse?: GetResponseResponse.ActionResponse.AsObject,
    audioResponse?: GetResponseResponse.AudioResponse.AsObject,
    debugLog: string,
    userQuery?: GetResponseResponse.UserTranscript.AsObject,
    btResponse?: GetResponseResponse.BehaviorTreeResponse.AsObject,
    emotionResponse: string,
  }

  export class AudioResponse extends jspb.Message {
    getAudioData(): Uint8Array | string;
    getAudioData_asU8(): Uint8Array;
    getAudioData_asB64(): string;
    setAudioData(value: Uint8Array | string): void;

    hasAudioConfig(): boolean;
    clearAudioConfig(): void;
    getAudioConfig(): AudioConfig | undefined;
    setAudioConfig(value?: AudioConfig): void;

    getTextData(): string;
    setTextData(value: string): void;

    getEndOfResponse(): boolean;
    setEndOfResponse(value: boolean): void;

    getFaceData(): string;
    setFaceData(value: string): void;

    hasVisemesData(): boolean;
    clearVisemesData(): void;
    getVisemesData(): VisemesData | undefined;
    setVisemesData(value?: VisemesData): void;

    hasBlendshapesData(): boolean;
    clearBlendshapesData(): void;
    getBlendshapesData(): BlendShapesData | undefined;
    setBlendshapesData(value?: BlendShapesData): void;

    getFaceDataTypeCase(): AudioResponse.FaceDataTypeCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AudioResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AudioResponse): AudioResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AudioResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AudioResponse;
    static deserializeBinaryFromReader(message: AudioResponse, reader: jspb.BinaryReader): AudioResponse;
  }

  export namespace AudioResponse {
    export type AsObject = {
      audioData: Uint8Array | string,
      audioConfig?: AudioConfig.AsObject,
      textData: string,
      endOfResponse: boolean,
      faceData: string,
      visemesData?: VisemesData.AsObject,
      blendshapesData?: BlendShapesData.AsObject,
    }

    export enum FaceDataTypeCase {
      FACE_DATA_TYPE_NOT_SET = 0,
      VISEMES_DATA = 6,
      BLENDSHAPES_DATA = 7,
    }
  }

  export class ActionResponse extends jspb.Message {
    getAction(): string;
    setAction(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ActionResponse): ActionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActionResponse;
    static deserializeBinaryFromReader(message: ActionResponse, reader: jspb.BinaryReader): ActionResponse;
  }

  export namespace ActionResponse {
    export type AsObject = {
      action: string,
    }
  }

  export class BehaviorTreeResponse extends jspb.Message {
    getBtCode(): string;
    setBtCode(value: string): void;

    getBtConstants(): string;
    setBtConstants(value: string): void;

    getNarrativeSectionId(): string;
    setNarrativeSectionId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BehaviorTreeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BehaviorTreeResponse): BehaviorTreeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BehaviorTreeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BehaviorTreeResponse;
    static deserializeBinaryFromReader(message: BehaviorTreeResponse, reader: jspb.BinaryReader): BehaviorTreeResponse;
  }

  export namespace BehaviorTreeResponse {
    export type AsObject = {
      btCode: string,
      btConstants: string,
      narrativeSectionId: string,
    }
  }

  export class UserTranscript extends jspb.Message {
    getTextData(): string;
    setTextData(value: string): void;

    getIsFinal(): boolean;
    setIsFinal(value: boolean): void;

    getEndOfResponse(): boolean;
    setEndOfResponse(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserTranscript.AsObject;
    static toObject(includeInstance: boolean, msg: UserTranscript): UserTranscript.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserTranscript, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserTranscript;
    static deserializeBinaryFromReader(message: UserTranscript, reader: jspb.BinaryReader): UserTranscript;
  }

  export namespace UserTranscript {
    export type AsObject = {
      textData: string,
      isFinal: boolean,
      endOfResponse: boolean,
    }
  }

  export enum ResponseTypeCase {
    RESPONSE_TYPE_NOT_SET = 0,
    ACTION_RESPONSE = 2,
    AUDIO_RESPONSE = 3,
    DEBUG_LOG = 4,
    USER_QUERY = 5,
    BT_RESPONSE = 6,
    EMOTION_RESPONSE = 7,
  }
}

declare class VisemesData extends jspb.Message {
  hasVisemes(): boolean;
  clearVisemes(): void;
  getVisemes(): Viseme | undefined;
  setVisemes(value?: Viseme): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VisemesData.AsObject;
  static toObject(includeInstance: boolean, msg: VisemesData): VisemesData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VisemesData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VisemesData;
  static deserializeBinaryFromReader(message: VisemesData, reader: jspb.BinaryReader): VisemesData;
}

declare namespace VisemesData {
  export type AsObject = {
    visemes?: Viseme.AsObject,
  }
}

declare class Viseme extends jspb.Message {
  getSil(): number;
  setSil(value: number): void;

  getPp(): number;
  setPp(value: number): void;

  getFf(): number;
  setFf(value: number): void;

  getTh(): number;
  setTh(value: number): void;

  getDd(): number;
  setDd(value: number): void;

  getKk(): number;
  setKk(value: number): void;

  getCh(): number;
  setCh(value: number): void;

  getSs(): number;
  setSs(value: number): void;

  getNn(): number;
  setNn(value: number): void;

  getRr(): number;
  setRr(value: number): void;

  getAa(): number;
  setAa(value: number): void;

  getE(): number;
  setE(value: number): void;

  getIh(): number;
  setIh(value: number): void;

  getOh(): number;
  setOh(value: number): void;

  getOu(): number;
  setOu(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Viseme.AsObject;
  static toObject(includeInstance: boolean, msg: Viseme): Viseme.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Viseme, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Viseme;
  static deserializeBinaryFromReader(message: Viseme, reader: jspb.BinaryReader): Viseme;
}

declare namespace Viseme {
  export type AsObject = {
    sil: number,
    pp: number,
    ff: number,
    th: number,
    dd: number,
    kk: number,
    ch: number,
    ss: number,
    nn: number,
    rr: number,
    aa: number,
    e: number,
    ih: number,
    oh: number,
    ou: number,
  }
}

declare class BlendShapesData extends jspb.Message {
  getBlendshapeData(): string;
  setBlendshapeData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlendShapesData.AsObject;
  static toObject(includeInstance: boolean, msg: BlendShapesData): BlendShapesData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlendShapesData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlendShapesData;
  static deserializeBinaryFromReader(message: BlendShapesData, reader: jspb.BinaryReader): BlendShapesData;
}

declare namespace BlendShapesData {
  export type AsObject = {
    blendshapeData: string,
  }
}

interface FaceModelMap {
  FACE_MODEL_UNSPECIFIED: 0;
  FACE_MODEL_A_2F_MODEL_NAME: 1;
  FACE_MODEL_PHONEMES_MODEL_NAME: 2;
  FACE_MODEL_OVR_MODEL_NAME: 3;
}

interface ConvaiClientParams {
    apiKey: string;
    characterId: string;
    enableAudio: boolean;
    disableAudioGeneration?: boolean;
    enableFacialData?: boolean;
    faceModel?: 0 | 1 | 2 | 3;
    sessionId: string;
    languageCode?: string;
}
declare class ConvaiClient {
    private sessionId;
    private responseCallback?;
    private apiKey;
    private characterId;
    private languageCode;
    private enableAudio;
    private disableAudioGeneration;
    private audioRecorder;
    private audioPlayer;
    private convaiGrpcClient;
    private faceModel;
    private enableFacialData;
    constructor(params: ConvaiClientParams);
    private validateBeforeRequest;
    resetSession(): void;
    setResponseCallback(fn: (response: GetResponseResponse) => void): void;
    sendTextChunk(text: string): void;
    startAudioChunk(): void;
    endAudioChunk(): void;
    toggleAudioVolume(): void;
    getAudioVolume(): number | undefined;
    onAudioPlay(fn: () => void): void;
    onAudioStop(fn: () => void): void;
    closeConnection(): void;
}

export { ConvaiClient, OvrToMorph };
