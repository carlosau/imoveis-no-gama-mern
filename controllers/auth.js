import * as config from "../config.js";
import jwt from "jsonwebtoken";
import { emailTemplate } from "../helpers/email.js";

export const welcome = (req, res) => {
  res.json({
    data: "Hi from nodejs api with router",
  });
};

export const preRegister = async (req, res) => {
  // create jwt with email and password then email it as clickable link
  // only when user clicks on link, then we create the user
  try {
    // console.log(req.body)

    const { email, password } = req.body;
    const token = jwt.sign({ email, password }, config.JWT_SECRET, {
      expiresIn: "1h",
    });

    config.AWSSES.sendEmail(emailTemplate(email, `
    <p>Por favor, clique no link abaixo para completar seu registro:</p>
    <a href=${config.CLIENT_URL}/auth/account-activate/${token}>Ativar minha conta</a>
    <hr />
    <p>Este email contém informações sensíveis</p>
    `, config.EMAIL_TO, "Finalize o seu cadastro"), (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  } catch (err) {
    console.log(err);
    return res.json({ error: "Something wrong. Try again." });
  }
};

export const register = async (req, res) => {
  try {
    console.log(req.body);
    return res.json({ ok: true });
  } catch (error) {
    console.log(error);
    return res.json({ error: "Something wrong. Try again." });
  }
};
