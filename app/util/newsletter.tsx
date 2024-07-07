import { json } from "@remix-run/node";

// This one can be used directly if there are other forms on the page
export async function isNewsletterSignup(formData) {
  if (!formData.get("newsletter")) {
    return null
  }

  const email = String(formData.get("newsletteremail"));
  if (email.length == 0) {
    return json({"newsletterInfo": "Error: Try another email address?"});
  }

  // TODO

  return json({"newsletterInfo": "Thanks! Please check your email shortly."});
}

// Or this can be used if it's the only one
export async function newsletterOnlyAction(request) {
  const formData = await request.formData();
  return await isNewsletterSignup(formData);
}
