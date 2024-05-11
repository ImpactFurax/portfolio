import nodemailer from 'nodemailer';

export const sendMail = async ({ to, name, subject, body }: { to: string; name: string; subject: string; body: string }) => {
  const { EMAIL, EMAIL_PASS } = process.env;

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL,
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
      from: EMAIL,
      to,
      subject,
      html: body
    })
    console.log(sendResult);
    
  } catch (error) {
    console.log(error);
  }
}