const nodemailer = require('nodemailer');

const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    secure: false,
    auth: {
      user: "10a9abd32d6be1",
      pass: "808dc7e4c8841f"
    }
};

const send = async (data) => {
    nodemailer.createTransport(email).sendMail(data, (error, info) => {
        if(error) {
            console.log(error);
        }else{
            console.log(info);
            return info.response;
        }
    });
};

let email_data = {
    from: "wnstjd9701@gmail.com",
    to: "wnstjd9701@gmail.com",
    subject: "테스트 메일 입니다.",
    text: "node.js nodemailer"
}

send(email_data);