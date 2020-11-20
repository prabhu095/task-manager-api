const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: "raghavendraprabhu095@gmail.com",
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}.Let me know how you get along with the app`


    })
}

const cancelEmail = (email, name) =>{
    sgMail.send({
        to: email,
        from: "raghavendraprabhu095@gmail.com",
        subject:"Sorry to see you go",
        text: `Thanks for using the app, ${name}. Let us know why have you quit our service`

    })
}


module.exports = {
    sendWelcomeEmail,
    cancelEmail

}