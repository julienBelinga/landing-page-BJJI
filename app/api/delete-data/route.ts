import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Adresse e-mail invalide." },
        { status: 400 }
      );
    }

    const mailData = {
      to: ["julienbelinga.pro@gmail.com", email], // Envoi à vous ET à l'utilisateur pour test
      from: "julienbelinga.pro@gmail.com", // Maintenant vérifiée !
      subject: "Demande de suppression de données (Facebook Login)",
      text: `Un utilisateur a demandé la suppression de ses données : ${email}`,
      html: `
        <h2>Demande de suppression de données</h2>
        <p><strong>Adresse e-mail de l'utilisateur :</strong> ${email}</p>
        <p>Cette demande a été faite via le formulaire de suppression de données.</p>
        <p><em>Envoyé depuis BJJ Insight Landing Page</em></p>
      `,
    };

    console.log("Envoi de l'e-mail avec les données:", mailData);

    const result = await sgMail.send(mailData);
    console.log("E-mail envoyé avec succès:", result[0].statusCode);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("SendGrid Error:", error);
    console.error("Error details:", error.response?.body);
    return NextResponse.json(
      {
        error: "Erreur lors de l'envoi du mail.",
        details: error.response?.body || error.message,
      },
      { status: 500 }
    );
  }
}
