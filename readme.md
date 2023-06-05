# Node.JS & Express.JS server for Landing Page using Mailchimp API #

## Description ##
A simple Node.JS server to serve a custom html form that uses Mailchimp API to add new subscribers to the mailing list.
Although I have done a very simple front-end work, my main goal was to practice a backend.
I have chosen Mailchimp own API solution over using "request" npm package for simplicity and, in particular, because the latter is deprecated.
There are a few more dependencies, including the ones for security, that are listed below.



## Installation & Configuration
1. Make a local copy:
```
git clone https://github.com/ellias-dev/mailchimpapi_signup 
```
2. Install all necessary dependencies:
```
npm install
```
3. Create .env file and add credentials to it, as in example.env
4. Feel free to play around with html pages and redesign them, just keep the "name" attribute in the form input fields as they are, or reconfigure mailchimp.js accordingly.
5. Enjoy!

## Dependencies 
1. Express.JS - to make all this happen
2. Body-parser - to make user's input yummy for Mailchimp
3. dotenv - to use environmental variables to store credentials (security, you know)
4. helmet - to protect requests' heads
5. sanitize-html - to sanitize user inputs

## Other notes
The Mailchimp API code is placed into a separate file, and well-commented. Please, read comments or/and refer to Mailchimp API documentation in case you want to modify anything.