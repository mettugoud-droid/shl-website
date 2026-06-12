import nodemailer from 'nodemailer';

// Use Resend API if available, fallback to SMTP
const useResend = !!process.env.RESEND_API_KEY;

interface SendEmailOptions {
  to: string;
  cc?: string;
  subject: string;
  html: string;
  replyTo?: string;
}

async function sendViaResend({ to, cc, subject, html, replyTo }: SendEmailOptions) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Sri Harinath Logistics <noreply@sriharinathlogistics.com>',
      to: [to],
      cc: cc ? [cc] : undefined,
      subject,
      html,
      reply_to: replyTo,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    console.error('Resend error:', error);
    throw new Error(`Resend failed: ${JSON.stringify(error)}`);
  }

  const data = await response.json();
  console.log('Email sent via Resend:', data.id);
  return { success: true, messageId: data.id };
}

async function sendViaSMTP({ to, cc, subject, html, replyTo }: SendEmailOptions) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: `"Sri Harinath Logistics" <${process.env.SMTP_USER}>`,
    to,
    cc,
    subject,
    html,
    replyTo,
  });

  console.log('Email sent via SMTP:', info.messageId);
  return { success: true, messageId: info.messageId };
}

export async function sendEmail(options: SendEmailOptions) {
  try {
    if (useResend) {
      return await sendViaResend(options);
    } else {
      return await sendViaSMTP(options);
    }
  } catch (error) {
    console.error('Email send error:', error);
    throw new Error('Failed to send email');
  }
}

export function getAdminNotificationEmail(data: Record<string, string>, type: 'contact' | 'quote') {
  const title = type === 'contact' ? 'New Contact Inquiry' : 'New Quote Request';

  const rows = Object.entries(data)
    .filter(([_, value]) => value && value.trim() !== '')
    .map(
      ([key, value]) => `
      <tr>
        <td style="padding: 10px 15px; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #0A2342; width: 180px; vertical-align: top;">
          ${formatLabel(key)}
        </td>
        <td style="padding: 10px 15px; border-bottom: 1px solid #f0f0f0; color: #333;">
          ${value}
        </td>
      </tr>
    `
    )
    .join('');

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fa;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #0A2342 0%, #1A4B91 100%); padding: 30px; border-radius: 16px 16px 0 0; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700;">
            🚚 ${title}
          </h1>
          <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 14px;">
            Sri Harinath Logistics - Website Inquiry
          </p>
        </div>

        <!-- Body -->
        <div style="background: #ffffff; padding: 30px; border-radius: 0 0 16px 16px; box-shadow: 0 4px 20px rgba(10,35,66,0.08);">
          <p style="color: #555; font-size: 14px; margin: 0 0 20px;">
            A new ${type === 'contact' ? 'contact inquiry' : 'quote request'} has been received from the SHL website:
          </p>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            ${rows}
          </table>

          <div style="background: #f8f9fb; border-radius: 10px; padding: 15px; border-left: 4px solid #F58220;">
            <p style="margin: 0; font-size: 13px; color: #666;">
              <strong>Action Required:</strong> Please respond to this inquiry within 2 hours during business hours.
            </p>
          </div>
        </div>

        <!-- Footer -->
        <div style="text-align: center; padding: 20px; color: #999; font-size: 12px;">
          <p style="margin: 0;">This email was generated automatically from sriharinathlogistics.com</p>
          <p style="margin: 5px 0 0;">© ${new Date().getFullYear()} Sri Harinath Logistics. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export function getCustomerAutoResponse(name: string) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fa;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #0A2342 0%, #1A4B91 100%); padding: 30px; border-radius: 16px 16px 0 0; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700;">
            Sri Harinath Logistics
          </h1>
          <p style="color: #F58220; margin: 8px 0 0; font-size: 13px; font-weight: 600;">
            Delivering Trust. Driving Growth.
          </p>
        </div>

        <!-- Body -->
        <div style="background: #ffffff; padding: 30px; border-radius: 0 0 16px 16px; box-shadow: 0 4px 20px rgba(10,35,66,0.08);">
          <h2 style="color: #0A2342; font-size: 18px; margin: 0 0 15px;">
            Thank You for Contacting Us, ${name}!
          </h2>

          <p style="color: #555; font-size: 14px; line-height: 1.7; margin: 0 0 15px;">
            We have received your inquiry successfully. Our logistics specialist will review your requirements and contact you shortly.
          </p>

          <p style="color: #555; font-size: 14px; line-height: 1.7; margin: 0 0 20px;">
            We typically respond within <strong>2 hours</strong> during business hours (Monday – Saturday, 9:00 AM – 7:00 PM).
          </p>

          <!-- CTA -->
          <div style="background: #f8f9fb; border-radius: 12px; padding: 20px; text-align: center; margin-bottom: 20px;">
            <p style="margin: 0 0 10px; font-size: 14px; color: #333; font-weight: 600;">
              For urgent support, please call:
            </p>
            <a href="tel:+917075742929" style="display: inline-block; background: #F58220; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 10px; font-size: 16px; font-weight: 700;">
              📞 +91 70757 42929
            </a>
          </div>

          <!-- WhatsApp -->
          <div style="text-align: center; margin-bottom: 20px;">
            <a href="https://wa.me/917075742929?text=Hi!%20I%20just%20submitted%20an%20inquiry%20on%20your%20website." style="display: inline-block; background: #25D366; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 10px; font-size: 14px; font-weight: 600;">
              💬 Chat on WhatsApp
            </a>
          </div>

          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />

          <!-- Signature -->
          <div style="font-size: 13px; color: #666; line-height: 1.6;">
            <p style="margin: 0; font-weight: 600; color: #0A2342;">Regards,</p>
            <p style="margin: 5px 0 0; font-weight: 700; color: #0A2342;">SRI HARINATH LOGISTICS</p>
            <p style="margin: 5px 0 0;">📧 info@sriharinathlogistics.com</p>
            <p style="margin: 3px 0 0;">📞 +91 70757 42929</p>
            <p style="margin: 3px 0 0;">🌐 www.sriharinathlogistics.com</p>
            <p style="margin: 8px 0 0; font-size: 11px; color: #999;">
              GST: 36ITMPS6428H1ZX | Secunderabad, Telangana
            </p>
          </div>
        </div>

        <!-- Footer -->
        <div style="text-align: center; padding: 20px; color: #999; font-size: 11px;">
          <p style="margin: 0;">
            You received this email because you submitted an inquiry on sriharinathlogistics.com
          </p>
          <p style="margin: 5px 0 0;">© ${new Date().getFullYear()} Sri Harinath Logistics. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function formatLabel(key: string): string {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase())
    .replace(/([a-z])([A-Z])/g, '$1 $2');
}
