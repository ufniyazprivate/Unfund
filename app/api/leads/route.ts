// app/api/leads/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, companyName, serviceInterest } = body;

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required." },
        { status: 400 }
      );
    }

    const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL;

    // 1. Send Admin Notification to Gmail
    if (adminEmail) {
      await resend.emails.send({
        from: "UNFUND Platform <support@unfund.in>",
        to: [adminEmail],
        subject: `New Lead: ${fullName} (${companyName || "No Company"})`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #C5A059; border-radius: 8px;">
            <h2 style="color: #070C1E; margin-bottom: 16px;">New Lead Received</h2>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Full Name:</td><td>${fullName}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Work Email:</td><td>${email}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td>${phone}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Company:</td><td>${companyName || "N/A"}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Service Interest:</td><td>${serviceInterest || "General Inquiry"}</td></tr>
            </table>
          </div>
        `,
      });
    }

    // 2. Send Success/Confirmation Email to the User
    await resend.emails.send({
      from: "support@unfund.in",
      to: [email],
      subject: "We received your request — UNFUND",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 24px; color: #070C1E; background-color: #FAF8F5; border: 1px solid #C5A059; border-radius: 8px;">
          <h2 style="color: #070C1E; font-size: 20px; margin-top: 0;">Hi ${fullName},</h2>
          <p style="font-size: 14px; line-height: 1.6; color: #334155;">
            Thank you for reaching out to <strong>UNFUND</strong> regarding <strong>${serviceInterest || "your request"}</strong>.
          </p>
          <p style="font-size: 14px; line-height: 1.6; color: #334155;">
            Our team has received your submission. An advisor will review your company profile (<strong>${companyName || "your startup"}</strong>) and get in touch with you shortly.
          </p>
          <div style="margin: 24px 0; padding: 14px; background-color: #FFFFFF; border-left: 3px solid #C5A059; font-size: 13px; color: #475569;">
            <strong>Need immediate assistance?</strong><br />
            Reply directly to this email or write to us at <a href="mailto:support@unfund.in" style="color: #070C1E;">support@unfund.in</a>.
          </div>
          <p style="font-size: 12px; color: #94A3B8; margin-bottom: 0;">
            UNFUND • Institutional Deal-Readiness Platform
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: unknown) {
    console.error("Resend API error:", error);
    return NextResponse.json(
      { error: "Unable to process email delivery. Please try again." },
      { status: 500 }
    );
  }
}