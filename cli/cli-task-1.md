# CLI Lab
## Task 1
1. First start by [installing the ASK CLI](https://developer.amazon.com/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html).

 **Extra Points:** If you finish this step early, help your neighbors and if we catch you, we'll give you a small prize :)
 
 **Links:**
 [Familiarize yourself with some of the CLI features](https://developer.amazon.com/docs/smapi/ask-cli-command-reference.html).
  
 ## Troubleshooting Tips
 
 **1. When I run the npm install, I'm getting a bunch of errors that have something to do with permissions to write to `file/folder/here/`. What should I do?**
 
   Try elevating your user privileges to the super user. Run the following command: `sudo npm install -g ask-cli`

   If that doesn't work, try changing the ownership to the local folder. Run the following command:
   `sudo chown -R $USER /usr/local` and then retry `sudo npm install -g ask-cli`

   **Note:** You will be asked for an administrator password in the terminal.


 **2. I'm running into strange python errors.**
 
   Try uninstalling the ask-cli package and reinstalling.

   To uninstall: `npm uninstall -g ask-cli`

   To install: `npm install-g ask-cli`

   PS. Thanks, [Joe](@JLKoszerak) for the tip!
    
   

**3. Installs successfully, but nothing happens on my command prompt when I use any of the `ask` commands.**

   Try closing, and reopening your terminal or command prompt.
