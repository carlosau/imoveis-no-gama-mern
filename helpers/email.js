import * as config from "../config.js";

const style = `
    background: #eee;
    padding: 20px;
    border-radius: 20px;
    margin: 5px;
`

export const emailTemplate = (email, content, replyTo, subject) => {
  return {
    Source: config.EMAIL_FROM,
    Destination: {
      ToAddresses: [email],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `
                        <html>
                        <div style="${style}">
                        <h1>Bem-vindo a Imóveis no Gama</h1>
                        ${content}
                        <p>${config.CLIENT_URL}</p>
                        </div>
                        </html>
                        `,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: `${subject}`,
      },
    },
  };
};
