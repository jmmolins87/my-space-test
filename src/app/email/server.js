

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3500;

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {

    const { name, surname, company, email ,phone, subject, message } = req.body;

    // Configure the email transporter
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jmmolins87@gmail.com', // your email
            pass: '07870787Jm!' // your email password
        }
    });

    // Email data
    let mailOptions = {
        from: 'jmmolins87@gmail.com', // your email
        to: email,
        subject: subject,
        html: `
            <h3>Contact Information</h3>
            <ul>
                <li><strong>Name:</strong> ${ name } ${ surname }</li>
                <li><strong>Company:</strong> ${ company }</li>
                <li><strong>Email:</strong> ${ email }</li>
                <li><strong>Phone:</strong> ${ phone }</li>
            </ul>
            <h3>Message</h3>
            <p>${ message }</p>
        `
    };

    // Send the email
    try {
        await transporter.sendMail( mailOptions );
        res.status(200).send('Email sent successfully');
    } catch (error) {
        res.status(500).send('Error sending email: ' + error);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${ port }`);
});