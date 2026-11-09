// app/api/footer-contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, companyName, serviceInterest } = body;

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone number are required." },
        { status: 400 }
      );
    }

    const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || "support@unfund.in";

    // 1. Notify Admin (Gmail)
    await resend.emails.send({
      from: "UNFUND Platform <support@unfund.in>",
      to: [adminEmail],
      replyTo: email,
      subject: `New Lead (Footer Callback): ${fullName} (${companyName || "No Company"})`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; padding: 24px; border: 1px solid #C5A059; border-radius: 8px; color: #070C1E; background-color: #FAF8F5;">
          <h2 style="color: #070C1E; margin-top: 0; font-size: 20px;">New Callback Request (Footer)</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.6;">
            <tr><td style="padding: 6px 0; font-weight: bold; width: 140px;">Full Name:</td><td>${fullName}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Work Email:</td><td>${email}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Phone:</td><td>${phone}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Startup Name:</td><td>${companyName || "N/A"}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Interest Area:</td><td>${serviceInterest || "General Funding Consultation"}</td></tr>
          </table>
        </div>
      `,
    });

    // 2. Automated Confirmation Receipt to the User
    await resend.emails.send({
      from: "UNFUND Support <support@unfund.in>",
      to: [email],
      subject: "We received your callback request — UNFUND",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; padding: 24px; color: #070C1E; background-color: #FAF8F5; border: 1px solid #C5A059; border-radius: 8px;">
          <h2 style="color: #070C1E; font-size: 20px; margin-top: 0;">Hi ${fullName},</h2>
          <p style="font-size: 14px; line-height: 1.6; color: #334155;">
            Thank you for reaching out to <strong>UNFUND</strong> regarding <strong>${serviceInterest}</strong>.
          </p>
          <p style="font-size: 14px; line-height: 1.6; color: #334155;">
            We have received your callback request for <strong>${companyName || "your venture"}</strong>. A funding advisor will connect with you within 2 business hours.
          </p>
          <div style="margin: 20px 0; padding: 14px; background-color: #FFFFFF; border-left: 3px solid #C5A059; font-size: 13px; color: #475569;">
            <strong>Need urgent assistance?</strong><br />
            Reply directly to this email or call our desk at <strong>+91 93158XXXXX</strong>.
          </div>
          <p style="font-size: 12px; color: #94A3B8; margin-bottom: 0;">
            UNFUND • Institutional Deal-Readiness Platform
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: unknown) {
    console.error("Footer Contact Resend error:", error);
    return NextResponse.json(
      { error: "Could not submit your request right now. Please try again." },
      { status: 500 }
    );
  }
}