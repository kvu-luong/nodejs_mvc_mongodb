## Download mongodb

It will automatic donwload compass to monitor database with interface.

https://www.mongodb.com/try/download/community

## Start project in development environment

```
npm run dev
```

## FLOW CODE

1. Registration
- checking input validator
- save data password with bcrypt

2. SignIn / Login
- select database with bcrypt compare
- return token if right infos

## Google Login

keyword: google login for website
- https://dev.to/uddeshjain/authentication-with-google-in-nodejs-1op5
- https://www.youtube.com/watch?v=Y2ec4KQ7mP8 

## Facebook login

- https://developers.facebook.com/docs/facebook-login/web/
- https://www.youtube.com/watch?v=4wnjn8XB1xE&ab_channel=CodingShiksha
- https://codingshiksha.com/javascript/node-js-passport-facebook-authentication-using-express-and-mongodb-full-project/ 
- api facebook: https://developers.facebook.com/docs/graph-api/overview

# return email infos

- facebook account need to setup in settings -> general -> email

## Github login

- https://www.youtube.com/watch?v=wcUdBgktd4s&ab_channel=Keith%2CtheCoder 

## Sendmail 

- turn on less secure of gmail: https://myaccount.google.com/u/2/lesssecureapps?rapt=AEjHL4MF8qJkh_MI1vlyc9qxoPKf-KBCRIuIaEn3NAEFSim1BdCrNXMxW5nqphuqk7t4Mw91UV3HlNmYjAzCFvWtNqfUYqGOdw&pli=1

- tutorial: https://www.freecodecamp.org/news/use-nodemailer-to-send-emails-from-your-node-js-server/ 

- turn off less secure and use google project : https://console.cloud.google.com/
    + Create project
    + Create credentials 
    + Get refresh token with : https://developers.google.com/oauthplayground 
    + then configuration code with new format