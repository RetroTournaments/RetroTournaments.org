import { createCipheriv, createDecipheriv, randomBytes } from "crypto";
import pkg from "lz-string";
const { compressToEncodedURIComponent, decompressFromEncodedURIComponent } =
  pkg;

export function encrypt(text: string): string {
  const iv = randomBytes(16); // Generate a random IV
  const key = Buffer.from(process.env.EMAIL_SECRET_KEY as string, "utf8");

  const cipher = createCipheriv("aes-256-cbc", key, iv);
  let crypted = cipher.update(text, "utf8", "hex");
  crypted += cipher.final("hex");

  return compressToEncodedURIComponent(iv.toString("hex") + "-" + crypted);
}

export function decrypt(text: string): string {
  const [iv, encryptedText] =
    decompressFromEncodedURIComponent(text).split("-");
  const ivBuffer = Buffer.from(iv, "hex");
  const key = Buffer.from(process.env.EMAIL_SECRET_KEY as string, "utf8");

  const decipher = createDecipheriv("aes-256-cbc", key, ivBuffer);
  let dec = decipher.update(encryptedText, "hex", "utf8");
  dec += decipher.final("utf8");

  return dec;
}
