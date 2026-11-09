// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, companyName, topic, message } = body;

    if (!fullName || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields (Name, Email, Phone, Message)." },
        { status: 400 }
      );
    }

    const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || "support@unfund.in";

    // 1. Send Admin Enquiry Notification
    await resend.emails.send({
      from: "UNFUND Portal <support@unfund.in>",
      to: [adminEmail],
      replyTo: email,
      subject: `New Contact Request: ${fullName} (${companyName || "No Company"})`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; padding: 24px; border: 1px solid #C5A059; border-radius: 8px; color: #070C1E; background-color: #FAF8F5;">
          <h2 style="color: #070C1E; margin-top: 0; font-size: 20px;">New Consultation Request</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.6;">
            <tr><td style="padding: 6px 0; font-weight: bold; width: 140px;">Name:</td><td>${fullName}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Email:</td><td>${email}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Phone:</td><td>${phone}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Company:</td><td>${companyName || "N/A"}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold;">Service Track:</td><td>${topic || "General Advisory"}</td></tr>
          </table>
          <hr style="border: 0; border-top: 1px solid #E2D9CC; margin: 16px 0;" />
          <p style="font-size: 13px; font-weight: bold; margin-bottom: 6px;">Message / Challenge:</p>
          <p style="font-size: 14px; background: #FFFFFF; padding: 12px; border-radius: 6px; border: 1px solid #E2D9CC; white-space: pre-wrap; margin-top: 0;">${message}</p>
        </div>
      `,
    });

    // 2. Send Friendly Acknowledgment to the User
    await resend.emails.send({
      from: "UNFUND Support <support@unfund.in>",
      to: [email],
      subject: "We have received your enquiry — UNFUND",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; padding: 24px; color: #070C1E; background-color: #FAF8F5; border: 1px solid #C5A059; border-radius: 8px;">
          <h2 style="color: #070C1E; font-size: 20px; margin-top: 0;">Hi ${fullName},</h2>
          <p style="font-size: 14px; line-height: 1.6; color: #334155;">
            Thank you for writing to <strong>UNFUND</strong>. We have received your note regarding <strong>${topic || "advisory support"}</strong>.
          </p>
          <p style="font-size: 14px; line-height: 1.6; color: #334155;">
            One of our team members will review what your business needs and follow up with you directly within one business day.
          </p>
          <div style="margin: 20px 0; padding: 14px; background-color: #FFFFFF; border-left: 3px solid #C5A059; font-size: 13px; color: #475569;">
            <strong>Need urgent help?</strong><br />
            You can also call us directly at <strong>+91 93158XXXXX</strong> or reply directly to this email.
          </div>
          <p style="font-size: 12px; color: #94A3B8; margin-bottom: 0;">
            UNFUND • Founder Equity, Grant & Bank Readiness
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: unknown) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Could not send your message right now. Please try again shortly." },
      { status: 500 }
    );
  }
}