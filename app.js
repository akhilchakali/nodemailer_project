const nodeMailer = require("nodemailer")

const transporter = nodeMailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.mail,
    pass: process.env.pass,
  },
});

const mailOptions = {
  from:"Akhil",
  to:"akhilakki1412@gmail.com",
  subject: "Sending mail for checking", // Subject line
    text: "Hello Akhil", // plain text body
    
}

const sendMail = async (transporter, mailOptions)=>{
  try{
    await transporter.sendMail(mailOptions)
  }catch(error){
    console.log(error)
  }
}

sendMail(transporter, mailOptions);
