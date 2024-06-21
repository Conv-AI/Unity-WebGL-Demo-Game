/**
 * Sends a text request to the Convai Client.
 * Converts the request string to a UTF-8 string before sending.
 * @param {string} request - The text request to send to the Convai Client.
 */
var ConvaiUnityWebGL = {
    convaiClient: null,
    userTextStream: "",
    interactionId: "",
    chatOutputPlaceholder: "Type your message here",


    /**
     * Requests microphone access from the user's browser.
     * Logs a message to the console if access is granted or denied.
     */
    initMicrophone: function () {
        var self = this; // Reference to the ConvaiUnityWebGL object
        navigator.mediaDevices.getUserMedia({audio: true})
            .then(function (stream) {
                console.log('Microphone permission granted!');
                self.mediaStream = stream;
                // Do something with the microphone stream, like creating a MediaRecorder
                // or connecting it to a Web Audio API context if needed
            })
            .catch(function (error) {
                console.log('Microphone permission denied:', error);
            });
    },

    /**
     * Initializes the ConvaiClient with an API key, a character ID, and flags for enabling the audio recorder and player. Call this first from Start()
     * Sets up several callbacks for handling different types of responses from the Convai Client.
     * @param {string} apiKey - The API key for the Convai service.
     * @param {string} characterId - The ID of the character to use in the Convai service.
     * @param {boolean} enableAudioRecorder - Flag to enable the audio recorder.
     * @param {boolean} enableAudioPlayer - Flag to enable the audio player.
     * @param {number} faceModal - The face modal to use for the character.
     * @param {boolean} enableFacialData - Flag to enable facial data.
     */
    initializeConvaiClient: function (apiKey, characterId, enableAudioRecorder, enableAudioPlayer) {

        console.log("enable audio recorder: ", enableAudioRecorder);

        this.convaiClient = new ConvaiClient({
            apiKey: UTF8ToString(apiKey),
            characterId: UTF8ToString(characterId),
            //enableAudioRecorder: enableAudioRecorder,
            enableAudio: enableAudioRecorder,
            faceModal: 3,
            enableFacialData: true,
            // action config - not needed
        });

        if (this.convaiClient.getAudioVolume() > 0) {
            this.convaiClient.toggleAudioVolume()
        }

        this.convaiClient.setResponseCallback(function (response) {

            if (response.hasUserQuery()) {
                var transcript = response.getUserQuery();
                var isFinal = transcript.getIsFinal();
                var transcriptText = transcript.getTextData();

                if (isFinal) {
                    this.userTextStream += transcriptText;
                    SendMessage("ConvaiGRPCWebAPI", "OnUserResponseReceived", this.userTextStream);
                }

                this.userTextStream = transcriptText;
                SendMessage("ConvaiGRPCWebAPI", "OnUserResponseReceived", this.userTextStream);
            }
            
            //console.log("session id: " + response.getSessionId());
            
            if (response.hasAudioResponse()) {
                var audioResponse = response.getAudioResponse();
                var responseText = audioResponse.getTextData();
                // break it down into smaller chunks

                var visemeData;
                if (audioResponse.hasVisemesData()) {
                    visemeData = audioResponse.getVisemesData();

                    if (visemeData && visemeData.toObject) {
                        var visemeDataJson = JSON.stringify(visemeData.toObject());
                        //console.log("visemeDataJson: " + visemeDataJson);
                        SendMessage("ConvaiGRPCWebAPI", "OnVisemeResponseReceived", visemeDataJson);
                    }
                }

                var audioData = audioResponse.getAudioData_asU8();

                var sampleRate = audioResponse.getAudioConfig().getSampleRateHertz();

                var chunkSize = 1024 * 128;

                for (var i = 0, j = 0; i < audioData.length; i += chunkSize, j++) {
                    var tempAudioData = audioData.slice(i, i + chunkSize);
                    var audioRes = {
                        resText: responseText,
                        audData: Array.from(tempAudioData),
                        sampleRate: sampleRate,
                        isFirst: (i === 0 ? true : false),
                        hasVisemesData: audioResponse.hasVisemesData()
                    };
                    var dataString = JSON.stringify(audioRes);

                    SendMessage("ConvaiGRPCWebAPI", "OnAudioResponseReceived", dataString);
                }
            }

            // if (response.hasActionResponse()) {
            //     var action = response.getActionResponse().getAction();
            //     console.log("actions: " + response.getActionResponse().getAction())
            //     // call unity function with action response
            // }

            if (response && response.hasInteractionId()) {
                this.interactionId = response.getInteractionId();
            }
        });
    },

    /**
     * Starts audio recording if the Convai Client has been initialized.
     */
    startAudioChunk: function () {
        if (this.convaiClient !== null) {
            this.convaiClient.startAudioChunk();
        }
    },

    /**
     * Sends a text request to the Convai Client.
     * Converts the request string to a UTF-8 string before sending.
     * @param {string} request - The text request to send to the Convai Client.
     */

    sendTextRequest: function (request) {
        console.log("request: " + UTF8ToString(request));
        this.convaiClient.sendTextChunk(UTF8ToString(request));
    },

    /**
     * Starts audio recording if the Convai Client has been initialized.
     */
    endAudioChunk: function () {
        if (this.convaiClient !== null) {
            this.convaiClient.endAudioChunk();
        }
    },

    /**
     * Send feedback to the Convai Client.
     * @param {string} character_id - The ID of the character to send feedback for.
     * @param {string} session_id - The ID of the session to send feedback for.
     * @param {boolean} thumbs_up - Flag to indicate whether the feedback is positive or negative.
     * @param {string} feedback_text - The text of the feedback.
     */
    sendFeedback: function (character_id, session_id, thumbs_up, feedback_text) {
        console.log("interaction id: " + this.interactionId);
        console.log("session id: " + session_id);
        if (this.interactionId === "" || this.interactionId === null || this.interactionId === undefined) {
            return;
        }
        this.convaiClient.sendFeedback(this.interactionId, UTF8ToString(character_id), UTF8ToString(session_id), thumbs_up, UTF8ToString(feedback_text));
    },

    /**
     * Interrupt Audio Player if microphone button is pressed again.
     */
    interruptCharacter: function () {
        console.log("Interrupting Character");
        this.convaiClient.stopCharacterAudio();
    },
};

/**
 * Merges the ConvaiUnityWebGL object into the LibraryManager.library object.
 * This makes the ConvaiUnityWebGL object available for use in other parts of the project.
 */
mergeInto(LibraryManager.library, ConvaiUnityWebGL);