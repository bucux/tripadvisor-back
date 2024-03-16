
const nodemailer = require('nodemailer');

const sendEmail = async (body) => {

  const send = async(destinataire) => {
    let info = await transporter.sendMail({
      from: `"Mark Zuckerberg" <${process.env.NODEMAILER_USER}>`, // expéditeur
      to: destinataire, // liste des destinataires
      subject: "formulaire de contact Tripadvisor", // Sujet
      text: str, // corps de l'e-mail en texte brut
      html: `<b>${str}</b>`, // corps de l'e-mail en HTML
    });
  }
  
  let transporter = nodemailer.createTransport({
    service: process.env.NODEMAILER_SERVICE,
    auth: {
      user: process.env.NODEMAILER_USER, 
      pass: process.env.NODEMAILER_PASS,
    },
  });
  const str = body.nom + " " + body.prenom + " " + body.email + " a envoyé : " + body.message
  await send(body.email) // envoie au destinataire
  await send(process.env.NODEMAILER_USER) // copie à moi-même

}



module.exports = sendEmail