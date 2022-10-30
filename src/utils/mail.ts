import nodemailer, { SendMailOptions, SentMessageInfo, TransportOptions,  } from "nodemailer";
import { ContactSubmissionEmailProps } from "./contactTypes"
import htmlSpecialChars from "./htmlSpecialChars";

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process?.env?.MAIL_APP_USERNAME,
      pass: process?.env?.MAIL_APP_PASSWORD
    }
});


const sendMail = async (mailDetails: ContactSubmissionEmailProps) : Promise<boolean> => {
    // Emails can't include javascript tags anyway, but let's escape special characters anyway just in case
    // This htmlSpecialChars function is a javascript implementation of the PHP one
    const name = htmlSpecialChars(mailDetails?.name);
    const email = htmlSpecialChars(mailDetails?.email);
    const message = htmlSpecialChars(mailDetails?.message);
    const mailOptions : SendMailOptions = {
        from: process?.env?.MAIL_APP_USERNAME,
        to: process?.env?.MAIL_RECEIVER,
        subject: 'New Contact Form Submission from '+name,
        html: `
            <div><strong>Name:</strong> ${name}</div>
            <br />
            <div><strong>Email:</strong> ${email}</div>
            <br />
            <div><strong>Message:</strong></div>
            <div>${message}</div>
        `,
        replyTo: email
    };
    return new Promise<boolean>((resolve) => {
        transport.sendMail(mailOptions, (error: any, info: SentMessageInfo) => {
            if (error) {
                resolve(false);
            }
            resolve(true);
        });
    });
}

export default sendMail;