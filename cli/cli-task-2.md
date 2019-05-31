 # CLI Lab
## Task 2
  **Once you have the CLI setup let's scaffold our first project**

1. Open up a terminal window (or command prompt). Navigate to a directory that you would like to work in.

**Note:** Once you have your terminal window open, don't close it! We'll be using it throughout the rest of this lab.

2. Enter the command below. 

    ```
    ask new
    ```

3. Provide a skill name. 

This can be anything you would like it to be, though the best practice is to name it something descriptive and sensible. For our case, lets just call it `hello-world`

**LOOK FOR:** You should receive a confirmation message *"New Project for Alexa Skill Created"*.

4. Navigate into the `/hello-world` directory. 

Notice that the CLI has created the base files for your Alexa Skill with the project name of "hello-world". When you typed in `hello-world` the CLI created the */hello-world* folder for you. 

5. Enter the following command into your terminal window:

  ```
  ask deploy
  ```

This command will deploy the lambda function and the interaction model for your Alexa Skill.

6. Log into your [AWS Console](https://aws.amazon.com/lambda/) to see the lambda function deployed to the cloud.

7. Log into the [skill developer portal](https://developer.amazon.com/alexa/console/ask) to see the interaction model with all of your skill metadata has been deployed.

8. Test your skill on any echo device registered to your account by saying "Alexa, start greeter". If you don't have a device handy, you can test from the testing pane in the [developer portal](https://developer.amazon.com/alexa/console/ask) or on [echosim.io](https://www.echosim.io).

**Finished early?** Help your neighbors! If we catch you, we'll give you a small prize :)
