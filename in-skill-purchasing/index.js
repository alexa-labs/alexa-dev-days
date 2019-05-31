/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speechText = 'Welcome to the Alexa Skills Kit, you can say hello!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  },
};

const HelloWorldIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent';
  },
  handle(handlerInput) {
    const speechText = 'Hello World!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  },
};

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {

    const locale = handlerInput.requestEnvelope.request.locale;
    const ms = handlerInput.serviceClientFactory.getMonetizationServiceClient();

    return ms.getInSkillProducts(locale).then(function(res) {
      var product = res.inSkillProducts.filter(record => record.referenceName == 'help');

      if (isEntitled(product))
      {
        const speechText = "Congratulations, here's your help!  You can say hello to this skill, and I'll reply to you!";

        return handlerInput.responseBuilder
          .speak(speechText)
          .reprompt(speechText)
          .withSimpleCard('Hello World', speechText)
          .getResponse();
        }
      else
      {
        const upsellMessage = "You don't currently own the help pack. Want to learn more?";
                    
        return handlerInput.responseBuilder
               .addDirective({
                    'type': 'Connections.SendRequest',
                    'name': 'Upsell',
                    'payload': {
                        'InSkillProduct': {
                            'productId': product[0].productId
                        },
                        'upsellMessage': upsellMessage
                    },
                    'token': 'correlationToken'
                })
                .getResponse();
      }
    })
  }
};

//THIS HANDLES THE CONNECTIONS.RESPONSE EVENT AFTER A BUY OCCURS.
const UpsellResponseHandler = {
  canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === "Connections.Response" &&
             handlerInput.requestEnvelope.request.name === "Upsell";
  },
  handle(handlerInput) {
      console.log("IN UPSELLRESPONSEHANDLER");

      if (handlerInput.requestEnvelope.request.status.code == 200) {
          if (handlerInput.requestEnvelope.request.payload.purchaseResult == 'DECLINED') {
              const speakResponse = "OK.  I can't offer you help. Would you like to say hello?";
              const repromptResponse = "Would you like something else?";
              return handlerInput.responseBuilder
                  .speak(speakResponse)
                  .reprompt(repromptResponse)
                  .getResponse();
          }
          else if (handlerInput.requestEnvelope.request.payload.purchaseResult == 'ACCEPTED') {
            const speakResponse = "You can now ask for help.  How can I help you?";
            const repromptResponse = "How can I help you?";
            return handlerInput.responseBuilder
                .speak(speakResponse)
                .reprompt(repromptResponse)
                .getResponse();
        }
      }
      else    {
          // Somethign failed.
          console.log('Connections.Response indicated failure. error:' + handlerInput.requestEnvelope.request.status.message);
          
          return handlerInput.responseBuilder
              .speak("There was an error handling your purchase request. Please try again or contact us for help.")
              .getResponse();
      }
 }
};

//THIS HANDLES THE CONNECTIONS.RESPONSE EVENT AFTER A BUY OCCURS.
const BuyResponseHandler = {
  canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === "Connections.Response" &&
             handlerInput.requestEnvelope.request.name === "Buy";
  },
  handle(handlerInput) {
      console.log("IN BUYRESPONSEHANDLER");

      const locale = handlerInput.requestEnvelope.request.locale;
      const ms = handlerInput.serviceClientFactory.getMonetizationServiceClient();
      const productId = handlerInput.requestEnvelope.request.payload.productId;

      return ms.getInSkillProducts(locale).then(function(res) {
          let product = res.inSkillProducts.filter(record => record.productId == productId);
          if (handlerInput.requestEnvelope.request.status.code == 200) {
              if (handlerInput.requestEnvelope.request.payload.purchaseResult == 'ACCEPTED') {
                  const speakResponse = "You can now ask for help.  How can I help you?";
                  const repromptResponse = "How can I help you?";
                  return handlerInput.responseBuilder
                      .speak(speakResponse)
                      .reprompt(repromptResponse)
                      .getResponse();
              }
              else if (handlerInput.requestEnvelope.request.payload.purchaseResult == 'DECLINED') {
                  const speakResponse = "Thanks for your interest in the " + product[0].name + ".  How can I help you?";
                  const repromptResponse = "What can I help you with?";
                  return handlerInput.responseBuilder
                      .speak(speakResponse)
                      .reprompt(repromptResponse)
                      .getResponse();
              }
          }
          else    {
              // Something failed.
              console.log('Connections.Response indicated failure. error:' + handlerInput.requestEnvelope.request.status.message);
              
              return handlerInput.responseBuilder
                  .speak("There was an error handling your purchase request. Please try again or contact us for help.")
                  .getResponse();
          }
      });
 }
};

// Following handler demonstrates how Skills would recieve Buy requests from customers
// and then trigger a Purchase flow request to Alexa
const BuyHandler = {
  canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
             handlerInput.requestEnvelope.request.intent.name === 'BuyIntent';
},
handle(handlerInput) {
  console.log("IN BUYINTENTHANDLER");
  
  // Inform the user about what products are available for purchase
      
      const locale = handlerInput.requestEnvelope.request.locale;
      const ms = handlerInput.serviceClientFactory.getMonetizationServiceClient();

      return ms.getInSkillProducts(locale).then(function(res) {

          let product = res.inSkillProducts.filter(record => record.referenceName == "Help");

          return handlerInput.responseBuilder
          .addDirective({
              'type': 'Connections.SendRequest',
              'name': 'Buy',
              'payload': {
                          'InSkillProduct': {
                              'productId': product[0].productId
                          }
              },
              'token': 'correlationToken'
          })
          .getResponse();

      });
 }
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speechText = 'Goodbye!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, I can\'t understand the command. Please say again.')
      .reprompt('Sorry, I can\'t understand the command. Please say again.')
      .getResponse();
  },
};

function isProduct(product)
{
    return product &&
           product.length > 0;
}

function isEntitled(product)
{
    return isProduct(product) &&
           product[0].entitled == 'ENTITLED';
}

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    HelloWorldIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler,
    UpsellResponseHandler,
    BuyHandler,
    BuyResponseHandler
  )
  .withApiClient(new Alexa.DefaultApiClient())
  .addErrorHandlers(ErrorHandler)
  .lambda();
