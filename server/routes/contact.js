const express = require('express');
const srvConfig = require('../config');
const nodeMailer = require('nodemailer');
const contact = express.Router();

contact.get('/', (req, res) => {
    res.json({
        method: 'GET',
        url: '/contact'
    })
});

//ToDO: Create a middleware for all the email functionality
const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: srvConfig.EMAIL,
        pass: srvConfig.EMAIL_PASSWORD
    }
});

const sendEmail = ($subject, $message) => {
    transporter.sendMail({
        from: srvConfig.EMAIL,
        to: srvConfig.EMAIL,
        subject: $subject,
        html: $message
    });
};

contact.post('/send', (req, res) => {
    const {name, email, message, recaptcha, success} = req.body;

    if (name && email && message && recaptcha) {
        const body = `
            <b>Name:</b> ${name}<br/>
            <b>Email:</b> ${email}<br/><br/>
            <b>Message:</b><br/>
            ${message}
            <br/>
            <br/>
            <i>sent from <a href="https://jordanmuthemba-com.vercel.app/">jordanmuthemba-com.vercel.app</a></i>
        `;

        sendEmail('New email from contact form 🔥', body);
        return res.json({
            message: 'successfully sent'
        })
    } else return res.json({
        message: 'Something went wrong!'
    })
});

module.exports = contact;
