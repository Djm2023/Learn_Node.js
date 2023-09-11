/* Import nodemailer module  */
const nodemailer = require('nodemailer');

/**Configure Email and Send it  */

async function sendMail() {
    /**Creating Email transporter  */

    const transporter = nodemailer.createTransport({
        // SMTP is used
        service:'gmail',
        auth:{
            // Senders email address
            user:'abc@gmail.com',
            // Senders pass key which is generated in App password.
            pass:'16 digit pass key'
        }
    });

    /**Configure Email Content */
    const mailOptions = {
        // sender email address
        from:'thegreatdevloper@gmail.com',
        // Receiver email address
        to:'devjyoti.2428@gmail.com',
        //Purpose of sending mail
        subject:'Welcome to node.js',
        // Content of mail
        text:'This is the nodemailer Notification for Learning purpose'
    }

    /**Send Email */
    try {
        const result = await transporter.sendMail(mailOptions);
        console.log("Email send successfully 🚀");
    } catch (error) {
      console.log('Error in sending mail',error);  
    }
}
sendMail();