const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
   host: 'smtp.gmail.com',
   port: 587,
   secure: false,
   auth: {
       user: process.env.EMAIL_USERNAME,
       pass: process.env.PASSWORD
   },
   tls: {
       rejectUnauthorized: false
   }
});
console.log({
    user: process.env.EMAIL_USERNAME,
    pass: process.env.PASSWORD
});
const mailConfigurations  = {
    from: 'tenlavodich@gmail.com',
    to: 'hung13923289@gmail.com',
    subject: 'Sending Email using Node.js',
    text: `Hi! There, You know I am using the NodeJS
            Coding along with NodeMailer to send this email.`
};

transporter.sendMail(mailConfigurations, (error, info) => {
    if(error) {
        return console.log(error);
    }
    console.log('Email Sent Successfully');
    console.log(info);
})