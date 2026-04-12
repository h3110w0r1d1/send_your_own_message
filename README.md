# Welcome: Sending your own Webhook message!

## What is this?
A way to stylistically send messages using a (discord) webhook

***

## How to use
1) create a worker or something similar to execute the `worker.js` script when contacted(or otherwise)
2) use `index2.html` to reach that service. Replace `https://example.com` with a way to contact/run worker.js
3) be aware of rate limits and have fun(within reason).
**Notes**: 
- `worker.js` uses an environment variable to get its webhook url
-  `worker.js` uses a default nasa image as it's avatar
> | version  | url provider |
| -------- | -------- |
| <1.0.0 | api.nasa.gov |
| 1.0.0/1.0.0a | live.staticflickr.com |
- `worker.js` uses a default username, which you may want to change to say a custom thing
> - in the fetch statement, change the username to change the name
- you will need your **own** webhook.

## Supported features
- sending message and embeds
- custom avatar url
## Customization options
### worker.js
- custom avatar url, custom webhook name and supports customization that index2.html supports
### index2.html(the interface)
- custom message content, custom embed titles, descriptions, colors and the option to send an embed or not to.

***
## Documentation
The current version is v1.0.0a/1.0.0. 
### Definitions:
- the interface is index2.html
- the worker is the worker.js script
### Miscellaneous Notes 
- both scripts are designed to work together, however you can combine them into one html file(however, you will need to change the code and we are not responsible if something breaks)
- feel free to report improvements and issues on this github repo 
