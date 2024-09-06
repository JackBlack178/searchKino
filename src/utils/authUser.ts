import { AppDispatch } from "@utils/redux.ts";

import passwords from "../bcrypt_utils/auth_data_orig";
import { userSlice } from "@models/user/userSlice.ts";

interface AuthData {
  login: string;
  password: string;
  passwordConfirmation?: string;
  type: "signIn" | "signUp";
  dispatch: AppDispatch;
  closeDialog: () => void;
  setAuthLoading: (arg: boolean) => void;
  setIsError: (arg: boolean) => void;
}

export const authUser = async ({
  closeDialog,
  passwordConfirmation,
  password,
  type,
  login,
  dispatch,
  setAuthLoading,
  setIsError,
}: AuthData) => {
  if (type === "signIn") {
    const user = await comparePassword(login, password); //Like server request

    if (user) {
      dispatch(userSlice.actions.storeUser(user));
      closeDialog();
      setAuthLoading(false);
      return;
    } else {
      setAuthLoading(false);
      setIsError(true);
    }
  }

  if (type === "signUp") {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setAuthLoading(false);
    if (password !== passwordConfirmation) {
      setIsError(true);
    }
    closeDialog();
  }
};

const comparePassword = (
  login: string,
  password: string,
): Promise<(typeof passwords)[0] | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = passwords.find((user) => user.login === login);
      resolve(user?.password === password ? user : null);
    }, 2000);
  });
};
