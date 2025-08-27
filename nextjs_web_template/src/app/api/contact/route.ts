import { NextResponse } from "next/server";
import { adminDb } from "@/app/lib/firebaseAdmin";
import nodemailer from "nodemailer";


// GET – výpis všech contact form answer
export async function GET() {
  try {
    const snapshot = await adminDb.collection("contactFormAnswer").get();
    const contactFormAnswer = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    return NextResponse.json(contactFormAnswer);
  } catch (error) {
    console.error("Error fetching contact form answer:", error);
    return NextResponse.json({ error: "Failed to fetch contact form answer" }, { status: 500 });
  }
}

// POST – vytvoření nové odpovědi + odeslání e-mailu
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1) Uložení do Firestore
    const docRef = await adminDb.collection("contactFormAnswer").add({
      ...body,
      createdAt: new Date().toISOString(),
    });

    // 2) Odeslání e-mailu (Nodemailer + SMTP)
    const transporter = nodemailer.createTransport({
      host: "smtp.seznam.cz", // nebo gmail: smtp.gmail.com
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `Web: neco.cz  "${body.email}" <${process.env.MAIL_USER}>`,
      to: "m.kosin1@seznam.cz", // kam to má přijít
      subject: `Nová zpráva z kontaktního formuláře od ${body.firstName} ${body.lastName}`,
      text: `Jméno: ${body.firstName} ${body.lastName} \n\n Email: ${body.email}\n\n${body.content}`,
    });

    return NextResponse.json({ id: docRef.id, ...body });
  } catch (error) {
    console.error("Error creating contact form answer:", error);
    return NextResponse.json({ error: "Failed to create contact form answer" }, { status: 500 });
  }
}
