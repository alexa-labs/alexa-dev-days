# Build An Alexa Skill with In-Skill Purchases
<img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/fact/header._TTH_.png" />

1. **Create** a new skill using the CLI.

	```bash
	$ ask new
	```

2. **Name** the skill "Not_Helpful".

	```bash
	? Please type in your new skill name:
 	Not_Helpful
	```


3. **Navigate** to your project folder.

	```bash
	$ cd Not_Helpful
	```

4. **Explore** the project structure.  You should see folders for lambda and models, and skill.json file.

	```bash
	$ ls
	lambda		models		skill.json
	```

5. **Open** the models folder.

	```bash
	$ cd models
	```

6. **Open** the interaction model file, en-US.json.

7. **Change** the the invocation name in *en-US.json* to "not helpful" and save the file.

    ```json
    {
    "interactionModel": {
      "languageModel": {
        "invocationName": "not helpful"
      }
    }
    ```

8. **Go back** to the project's root folder.

	```bash
	$ cd ..
	```

9. **Navigate** to the custom folder under the lambda folder.

	```bash
	$ cd lambda/custom
	```

10. **Open** the AWS Lambda function code file, index.js.

11. **Replace** the contents of *index.js* with the contents of [this JS file](./index.js), and save it.

12. **Navigate** back to the root project directory.

	```bash
	$ cd ../..
	```

13. **Deploy** your new skill.

    ```bash
	$ ask deploy
	```

14. **Test** your skill using the Developer Portal or Echosim.io to verify everything is working.
    * [Developer Console](https://developer.amazon.com/alexa/console/ask)
    * [Echosim.io](http://echosim.io)

### Creating In-Skill Products

There are ASK CLI commands for creating your in-skill purchases.  This guide will walk you through creating three different one-time purchases (entitlements), as well as a subscription.  Our sample code is expecting these to be created as described, so make sure to follow along carefully.

1. **Create** your first in-skill product.  You should be in the project's root directory.

	```bash
	$ ask add isp
	```

2. **Choose** Entitlement.

	```bash
	? List of in-skill product types you can choose (Use arrow keys)
	❯ Entitlement
  	Subscription
	```

3. **Choose** Entitlement_Template as your template.

	```bash
	? List of in-skill product templates you can choose (Use arrow keys)
	❯ Entitlement_Template
	```

4. **Name** your in-skill product *help*.

	```bash
	? Please type in your new in-skill product name:
 	(Entitlement_Template) help
	```

5. **Navigate** to the new ISPs directory, and note the new folder, *entitlement*.  This is where the JSON files for each of your in-skill products reside.

	```bash
	$ cd isps
	$ ls
	```

6. **Navigate** to the *entitlement* folder.  You should see your help.json file in this directory.

	```bash
	$ cd entitlement
	$ ls
	```

7. **Open** help.json

	This JSON file contains all of the necessary fields for your in-skill product, but you'll need to add the details to get them ready to sell. Because we used the Entitlement_Template template, we have provided a small explanation for each field, make sure you replace all of them. Take a look at [the sample in our docs](https://developer.amazon.com/docs/smapi/isp-schemas.html#entitlement-schema) for an additional reference.  For this sample, at a minimum, you will need to update the name (not referenceName!), smallIconUri, largeIconUri, summary, description, purchasePromptDescription, boughtCardDescription, releaseDate and privacyPolicyUrl.

    > **IMPORTANT: Don't change the *referenceName* in your files, as this lab is relying on those to be consistent.**

    If you don't want to create your own images right now, you can use these for now:
    * [Placeholder images for your Help ISP.](https://alexa.design/isp-lab-1-stuff)

### Deployment

1. **Navigate** to the project's root directory. You should see a file named 'skill.json' there.

	```bash
	$ cd ../..
	```

2. **Deploy** the skill and the Lambda function in one step by running the following command:

	```bash
	$ ask deploy
	```
	Assuming that you followed all of the setup instructions for the ASK CLI, your entire skill and Lambda function should be created on their respective portals.


### Testing

1. To test, login to [Alexa Developer Console](https://developer.amazon.com/alexa/console/ask), click on the **Premium Facts Sample** entry in your skill list, and click on the "Test" tab.  The "Test" switch on your skill should have been automatically enabled.  If it was not, enable it now.

2. Your skill can now be tested on devices associated with your developer account, as well as the Test tab in the Developer Portal. To start using your skill, just type or say:

	```text
	Alexa, start not helpful
	```

**Note: The developer account associated with the skill is never charged for in-skill products.**  For more details about testing skills with in-skill products, please refer to the [In-Skill Purchase Testing Guide](https://developer.amazon.com/docs/in-skill-purchase/isp-test-guide.html)



### Extra Credit
If you have extra time after you finish this lab, here are some additional tasks to complete:

1. You now have a skill with an entitlement enabled.  Add a subscription ISP.

2. Adapt your code to allow either the entitlement or the subscription to access the help content.

3. Start diagramming a skill you could build that uses in-skill purchases.


