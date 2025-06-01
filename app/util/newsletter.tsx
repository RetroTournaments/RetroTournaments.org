import { json } from "@remix-run/node";
import * as EmailValidator from "email-validator";
import { prisma } from "./prisma";
import { postmarkClient } from "./postmark";
import { encrypt, decrypt } from "./crypto";

// This currently is not called :)
export async function contactNewSignup(email: string) {
  const link = process.env.BASE_URL + "/newsletter/" + encrypt(email);

  const htmlBody =
    "Hello! \\n\\n" +
    "To confirm your interest in the RetroTournaments.org mailing list please click on this link:\\n\\n" +
    '<a href="' +
    link +
    '">' +
    link +
    "</a> \\n\\n" +
    "If you are not interested you can just ignore this email. Thanks.";

  const textBody =
    "Hello! \n\n" +
    "To confirm your interest in the RetroTournaments.org mailing list please click on this link:\n\n" +
    link +
    "\n\n" +
    "If you are not interested you can just ignore this email. Thanks.";

  //const res = await postmarkClient.sendEmail({
  //  "From": "list@retrotournaments.org",
  //  "To": "matthew@retrotournaments.org",
  //  "Subject": "Confirm RetroTournaments.org Mailing List",
  //  "HtmlBody": htmlBody,
  //  "TextBody": textBody,
  //  "MessageStream": "outbound"
  //});

  console.log(textBody);

  await prisma.mailingList.update({
    where: { email: email },
    data: { contactedAt: new Date() },
  });
}

export async function newsletterSignup(email: string) {
  if (!EmailValidator.validate(email)) {
    return json({ newsletterInfo: "Error: Try another email address?" });
  }
  const thanks_ret = json({ newsletterInfo: "Thanks!" });

  email = email.toLowerCase();
  let list = await prisma.mailingList.findUnique({
    where: {
      email: email,
    },
  });
  if (list) {
    // they are already confirmed, but maybe they just forgot to activate
    let now = new Date();
    if (!list.active) {
      if (!list.contactedAt || now - list.contactedAt > 30 * 60 * 1000) {
        //contactNewSignup(email)
      }
    }
    return thanks_ret;
  }

  // honestly I should add a captcha or something, but future problem
  const time_out = new Date(Date.now() - 60 * 1000);
  let prev = await prisma.mailingList.count({
    where: {
      createdAt: {
        gte: time_out,
      },
    },
  });
  if (prev > 3) {
    return json({ newsletterInfo: "Sorry, try again later." });
  }

  list = await prisma.mailingList.create({
    data: {
      email: email,
    },
  });
  //contactNewSignup(email);
  return thanks_ret;
}

// This one can be used directly if there are other forms on the page
export async function isNewsletterSignup(formData) {
  if (!formData.get("newsletter")) {
    return null;
  }

  const email = String(formData.get("newsletteremail"));
  return newsletterSignup(email);
}

// Or this can be used if it's the only one
export async function newsletterOnlyAction(request) {
  const formData = await request.formData();
  return await isNewsletterSignup(formData);
}
