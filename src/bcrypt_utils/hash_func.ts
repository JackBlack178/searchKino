import bcrypt from "bcrypt";
import data from "./auth_data.ts";
const saltRounds = 10;

interface UserData {
  login: string;
  password_hash: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function hashPassword(password: string) {
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) throw err;
    console.log("Хешированный пароль:", hash);
  });
}

export function comparePassword(login: string, password: string) {
  const hash = (data as UserData[]).find(
    (user) => user.login === login,
  )?.password_hash;

  if (!hash) return false;

  bcrypt.compare(password, hash, (err, result) => {
    if (err) return false;

    console.log(result);
    return result;
  });
}
