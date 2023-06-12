const nodemailer = require("nodemailer");
const sgMail = require('@sendgrid/mail')

const sendEmailEthereal = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();
  //connect to our service
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "susana.mueller@ethereal.email",
      pass: "PzJdny1PV7nBUT7fCB",
    },
  });
  //send mail
  let info = await transporter.sendMail({
    from: 'Test Person <testperson@test.com>',
    to: 'bar@example.com',
    subject: 'hello',
    text: 'hello world with node.js'
  })
  res.json(info);
};

const sendEmailSendGrid = async (req,res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'email', //send to real address 'realaddress@mail.com',
        from: 'email', //'email of your verified email from sendgrid',
        subject: 'send grid is fun',
        text: 'hello text',
        html: '<strong>html text</strong>'
    }
    const info = await sgMail.send(msg);
    res.json(info);
}

//see videos 262-264 for sendgrid for production
module.exports = sendEmailEthereal;
