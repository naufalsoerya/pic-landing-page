import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) { 
    // Konfigurasi transporter Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'naufalsurya.official@gmail.com',
        pass: 'jpwm anwy cpla isiz',
      },
      secure: false,
    });

    const { name, email, phone, message, media, place } = req.body;

    if (!message || !name || !name ||!email ||!phone ||!media ||!place) {
      return res
        .status(400)
        .json({ message: 'Please fill out the necessary fields' });
    }
  

    // Konfigurasi email yang akan dikirim
    const mailOptions = {
      from: email,
      to: 'naufalsurya.official@gmail.com',
      subject: 'New message from '+ name,
      text: `${message} | Sent from: ${name} | Nomor Telephone: ${phone} | Media Konsultasi: ${media} | Kota Asal: ${place}`,
      html: `<div>${message}</div><p>Sent from: ${email}</p>`
    };

    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (err: Error | null, info) => {
        if (err) {
          reject(err);
          return res
            .status(500)
            .json({ error: err.message || 'Something went wrong' });
        } else {
          resolve(info.accepted);
          res.status(200).json({ message: 'Message sent!' });
        }
      });
    });
  
    return;
}
