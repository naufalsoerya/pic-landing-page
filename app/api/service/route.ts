import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request, res: NextApiResponse) {
  const body = await req.json();

  // Konfigurasi transporter Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "daftarpic@gmail.com",
      pass: "cyhl bdbn xpkc twom",
    },
    secure: false,
  });

  const { name, email, phone, message, media, place, company } = body;

  if (!message || !name || !name || !email || !phone || !media || !place || !company) {
    return res
      .status(400)
      .json({ message: "Please fill out the necessary fields" });
  }

  // Konfigurasi email yang akan dikirim
  const mailOptions = {
    from: email,
    to: "daftarpic@gmail.com",
    subject: "New message from " + name,
    html: `<p><b>Nama Individu:</b> ${name}</p> <br/>
    <p><b>Nama Perusahaan:</b> ${company}</p> <br/>
    <p><b>Email:</b> ${email}</p> <br/>
    <p><b>Phone:</b> ${phone}</p> <br/>
    <p><b>Media Konsultasi:</b> ${media}</p> <br/>
    <p><b>Kota Asal:</b> ${place}</p> <br/>
    <p>${message}</p>`,
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
