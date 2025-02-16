const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "austin@austinkoske.com",
      clientId: "546840364927-4gopr0jb3ku58qoffg0f88k897php4bf.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken: "1//04K51L08hPNsQCgYIARAAGAQSNwF-L9IrTUWYGBsdN2IgsCn03H70Ryyq6VLc7XdGiIEPGHlvzyks5kEDUjfILwfuLP_QbZRHkp8",
      accessToken: "ya29.a0AXeO80QJkXYwn7ikiVhCbczguwprjd9MTITcLt0USQ2lLYRVgI1q-Rs_AJZilRmLFR1hVgDTnqHc127HTtgJAtaYkDMEj3-p6zYvI1W0-1hNSeD4SIzAJ8mHAICsTZELP0Pc313_Fh5785ixUC8B_hU4-AW67OTUpj1uJdwJaCgYKAZgSARESFQHGX2MisuAfw-ukJaVVm_TOmCNE3A0175"
    }
  });
  

// Send a test email
async function sendTestEmail() {
  try {
    let info = await transporter.sendMail({
      from: "austin@austinkoske.com",
      to: "akoske68@gmail.com",
      subject: "Test Email from iCloud SMTP",
      text: "This is a test email sent via iCloud SMTP using Nodemailer.",
    });

    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

sendTestEmail();
