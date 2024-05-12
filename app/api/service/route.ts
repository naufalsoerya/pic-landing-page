import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request, res: NextApiResponse) {
  const body = await req.json();

  // Konfigurasi transporter Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "naufalsurya.official@gmail.com",
      pass: "jpwm anwy cpla isiz",
    },
    secure: false,
  });

  const { name, email, phone, message, media, place } = body;

  if (!message || !name || !name || !email || !phone || !media || !place) {
    return res
      .status(400)
      .json({ message: "Please fill out the necessary fields" });
  }

  // Konfigurasi email yang akan dikirim
  const mailOptions = {
    from: email,
    to: "naufalsurya.official@gmail.com",
    subject: "New message from " + name,
    html: `<p>Nama Individu / Perusahaan: ${name} (${email}) | Nomor Telephone: ${phone} | Media Konsultasi: ${media} | Kota Asal: ${place}</p><br/><p>${message}</p>`,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err: Error | null, info) => {
      if (err) {
        reject(err);
        return res
          .status(500)
          .json({ error: err.message || "Something went wrong" });
      } else {
        resolve(info.accepted);
        res.status(200).json({ message: "Message sent!" });
      }
    });
  });

  return NextResponse.json({
    status: 200,
  });
}
