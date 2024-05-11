'use server'

import nodemailer from 'nodemailer';

interface ValuesParams {
  email: string,
  message: string,
  subject: string,
  name: string
}

export const sendMail = async (values: ValuesParams) => {
  const { EMAIL_USER, EMAIL_PASS } = process.env;
  const { message, email, name, subject } = values;
  
  const transport = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    }
  })

  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.log({error});
    return;
  }

  try {

    const sendResult = await transport.sendMail({
      from: email,
      to: EMAIL_USER,
      subject: `Nouveau message de ${name} venant du Portfolio`,
      html: `
      <h1>Adresse Email: ${email}</h1>
      <h2>Raison: ${subject}</h2>
      <p>${message}</p>`
    })
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}