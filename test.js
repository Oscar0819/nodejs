const nodemailer = require('nodemailer');

const email = {
    "host": "",
    "port": "",
    "secure": false,
    "auth": {
        "user": "",
        "password": "",
    }
};

const send  = async (Option) => {
    nodemailer.createTransport(email)
};