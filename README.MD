
# setup
controller method to send email
NB: we are using App.js for routing
export the controller file to App.js 

# sending email
use nodemailer: npm install nodemailer

# ethereal
transport service to use : false SMTP service

Navigate to etheral.email and create a test user
Use the nodemailer config in ethereal site 
NB: if you are in prod, use .env to add the required value

conteoller/sendEmail.js
-create a user in the sendEmail method
-paste the transporter method inside
https://ethereal.email/create

-also copy and paste from nodemailer / send email with defined transport object 

Test: go to the app and send email, then check ethereal - open  mailbox
