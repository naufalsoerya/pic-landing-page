import type { NextApiResponse } from "next";
import { NextResponse } from "next/server";

const API_KEY = process.env.NEXT_PUBLIC_WOOWA_API_KEY;
const WOOWA_URL = "http://116.203.191.58/api/send_message";

export async function POST(req: Request, res: NextApiResponse) {
  const body = await req.json();
  const { name, phone } = body;

  const messageData = {
    key: API_KEY,
    phone_no: phone,
    message: `Halo Bapak/Ibu *${name}*

Terimakasih telah mengisi form layanan konsultasi dari PIC Training & Consulting.

Tim kami akan segera menghubungi Bapak/ibu kembali untuk pengaturan lebih lanjut sesuai dengan jenis layanan yang diminta.

Terima kasih atas kepercayaannya terhadap *PIC Training & Consulting*.`,
    skip_link: true,
    flag_retry: "on",
    pendingTime: 0
  };

  try {
    const response = await fetch(WOOWA_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageData),
    });

    if (response.ok) {
      const result = await response.json();
      res.status(200).json({ success: true, result });
    } else {
      const error = await response.text();
      res.status(500).json({ success: false, error });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message || "Something went wrong" });
  }

  return NextResponse.json({
    status: 200,
  });
}
