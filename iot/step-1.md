# Ingredients

## Amazon IOT Setup Thing <a id="title"></a>

1. [Setup Thing](./step-1.md#title) || 2. [Create The Skill](./step-2.md#title) || 3. [Create The Lambda Function](./step-3.md#title) || 4. [Connect Skill To Lambda & Add IOT Permissions](./step-4.md#title) || 5. [Webapp-Thing](./step-5.md#title)

### What you will learn

It is simple to create a new virtual "Thing" in the AWS IOT Thing Registry.

### Quick Setup Guide

1. Login to [AWS Console](https://console.aws.amazon.com/console/home)
1. Search for "IOT" and click on the service called "IoT Device Management"
1. (Cancel the welcome tour popup)
1. Verify your Region on the top right, such as `Ireland` or `N. Virginia`
1. On the left panel, locate and click on the `Manage` link
1. A sub-menu appears. Click on the `Things` link
1. Click on the `Create` button on the top right and then click `Create a single thing`
1. Give your Thing the name: `thing1` and scroll down past the rest of the options and click `Next`
1. On the next panel, click the last button `Create thing without certificate`
1. On the next page, click on your new thing contained in a small box.
1. Click the "Interact" item on the left menu.
1. Record the HTTPS Rest API Endpoint you see, such as `a2eshrcp6u0000.iot.us-east-1.amazonaws.com`
  You will need this when you create your Lambda function.

You can stop at this point and begin writing Lambda code to update this device.  Continue on to the [update-shadow](./step-2.md#title) page.


### Full Thing Setup Guide

* See the [Register Device](http://docs.aws.amazon.com/iot/latest/developerguide/register-device.html) guide for the full device setup steps, including the process to configure your physical device, if desired.
* You can learn more from the [Getting Started with AWS IOT](https://aws.amazon.com/iot-platform/getting-started/) documentation.*

Next, go to the [Update Shadow](./step-2.md#title) section.

Back to the [Home Page](./README.md#title)
