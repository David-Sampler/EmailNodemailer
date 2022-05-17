const express = require('express')
const app = express()
const nodemailer = require('nodemailer')

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "1c1758d82a16d0",
      pass: "6ab28ec320d485"
    }
  });


app.get("/enviar", async(req,res)=>{
    
    
      let info = await transport.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "davidsampler.engenharia@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

      transport.sendMail(info,(messagem)=>{
          messagem ? res.send('Erro',messagem) : res.send('Enviado com sucess')
      })
})






app.listen(3000,()=>{
    console.log("Servico no ar")
})