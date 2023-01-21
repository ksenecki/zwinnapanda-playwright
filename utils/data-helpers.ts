import * as crypto from "crypto";

export async function getRandomString() {
  return crypto.randomBytes(5).toString("hex"); //10001011 -> 8d
}
