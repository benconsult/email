
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

# sendgrid
-production purpose
-create free account: real email address
SXTSBAAZFKZVJBMBLMG4KSV8
- sender identity - create a single sender 
fill the form - verify email address

# sending email with sendgrid
-we need to create an API key
Sendgrid - email API - Integration guide - web API 
Nodejs - create an API key
2.Any name - create key: SENDGRID_API_KEY=value
3.Copy the key value and add to .env in your app
Install the package from the web Api page
4.npm install --save @sendgrid/mail
5. creating a method in the controller for sendgrid integration
copy the line with setApiKey function
copy the message object in step 5

TEST: open browser and send email
check your email



