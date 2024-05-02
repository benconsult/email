
const nodemailer = require('nodemailer')

const sendEmail = async (req,res)=>{
    //create a test account
    let testAccount = await nodemailer.createTestAccount();
    //ethereal 
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'linnea.koelpin7@ethereal.email',
            pass: 'rwwvx1K7dz4aauePzw'
        }
    });

    //from nodemail
    const info = await transporter.sendMail({
        from: '"BenJJy Node Course" <beckyarems@gmail.com>', // sender address
        to: "bendayo38@gmail.com, admin@3171fd.onmicrosoft.com", // list of receivers
        subject: "Hello ", // Subject line
        text: "Welcome to Moniepoint", // plain text body

      });


    res.json(info);
}

module.exports = sendEmail;