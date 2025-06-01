import * as postmark from "postmark";
const postmarkClient = new postmark.ServerClient(process.env.POSTMARK_API_KEY);
export { postmarkClient };
