import bcrypt from "bcrypt";
import data from "./auth_data.js";
const saltRounds = 10;

function hashPassword(password) {
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) throw err;
    console.log("Хешированный пароль:", hash);
  });
}

export function comparePassword(login, password) {
  const hash = data.find((user) => user.login === login).password_hash;

  if (!hash) return false;

  bcrypt.compare(password, hash, (err, result) => {
    if (err) return false;

    return result;
  });
}

comparePassword("Ivan", "Ivan2002");
