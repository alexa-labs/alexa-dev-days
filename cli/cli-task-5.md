# CLI Lab
## Task 5

  **Lets expand our Alexa Skill's features. If someone were to say "Alexa, ask hello jeff how he's doing?" the Skill should have an answer.**

1. Let's start by editing the front-end (VUI). Open the interaction model in your preferred Code Editor (`models/en-US.json` or `models/fr-FR.json`)

2. Copy and paste the following block of JSON below in between `line 26` and `line 27`. You can add additional Utterances to the samples array. Remember to comma separate!

```javascript
        {
          "name": "HowAreYouIntent",
          "slots": [

          ],
          "samples": [
            "how is he doing",
            "how are you",
            "howdy do"
          ]
        },
   ```
**Tip:** Don't forget the trailing comma after the closed curly brace!

3. Save your interaction model.

4. Open your lambda function (`lambda/custom/index.js`) and copy the following brick of code below and paste it into your lambda function at `line 35`

```javascript
const HowAreYouIntentHandler = {

	canHandle(handlerInput) {
    		return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      		&& handlerInput.requestEnvelope.request.intent.name === 'HowAreYouIntent';
	},
	handle(handlerInput) {

		const speechText = 'I\'m doing just great!';

		return handlerInput.responseBuilder
			.speak(speechText)
			.withSimpleCard('Hello World', speechText)
			.getResponse();
	},
};
  ```
5. Edit the  speechText variable to say anything you want, for example "I\'m feeling dandy!"

6. In your lambda function, scroll down to `line 113` and add `HowAreYouIntentHandler,` to the array of Intent Handlers. 

It should look something like this:

  ```javascript
    .addRequestHandlers(
	    LaunchRequestHandler,
	    HelloWorldIntentHandler,
	    HowAreYouIntentHandler,
	    HelpIntentHandler,
	    CancelAndStopIntentHandler,
	    SessionEndedRequestHandler
    )
  ```
  **Tip:** Don't forget to comma separate the items in your array above!
  
  
6. Now Save and Deploy your changes. Since you've changed both the interaction model and the lambda function and enter `ask deploy` into your terminal to push both the interaction model and lambda function changes up.

7. Test directly by entering `ask simulate -l en-US -t "start greeter"` into your terminal.  

If you changed the invocation name as suggested in an earlier step, be sure to replace 'greeter' with the invocation name of your skill.

Woohoo! Test the changes you've made to your skill on your device, from the [developer portal](https://developer.amazon.com/alexa/console/ask) or on [echosim.io](https://www.echosim.io). Remember to try your new utterances, "Alexa, ask hello jeff howdy do?" Or you can try to say something like "Alexa, start hello jeff" or you can also try "Alexa, start hello jeff" and then follow up with "how are you?"...go ahead and experiment with a few variations.
