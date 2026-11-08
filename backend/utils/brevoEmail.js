
const sendAdminEmail = async ({ subject, htmlContent, toEmail }) => {
  try {
    const response = await fetch(
      "https://api.brevo.com/v3/smtp/email",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "api-key": process.env.BREVO_API_KEY,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          sender: {
            name: "Star Moscow Blood Donors",
            email: process.env.BREVO_SENDER_EMAIL,
          },
          to: [
            {
              email: toEmail || process.env.ADMIN_EMAIL,
            },
          ],
          subject,
          htmlContent,
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error("Brevo email error:", result);
      return false;
    }

    console.log("Email sent successfully:", result.messageId);
    return true;
  } catch (error) {
    console.error("Email sending failed:", error.message);
    return false;
  }
};

export default sendAdminEmail;

