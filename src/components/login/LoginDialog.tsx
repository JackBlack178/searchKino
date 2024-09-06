import { createPortal } from "react-dom";
import cl from "./LoginDialog.module.scss";

import React, { FC, FormEvent, useRef, useState } from "react";
import { Form } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import clsx from "clsx";
import { CustomTextFieldDialog } from "@components/login/CustomTextFieldDialog.tsx";
import CloseIcon from "@mui/icons-material/Close";
import { CustomTextFieldDialogForPassword } from "@components/login/CustomTextFieldDialogForPassword.tsx";
import { authUser } from "@utils/authUser.ts";
import { useAppDispatch } from "@utils/redux.ts";
import { Loader } from "@components/loader/Loader.tsx";
import { CSSTransition } from "react-transition-group";

interface DialogProps {
  open: boolean;
  closeDialog: () => void;
}

const LoginDialog: FC<DialogProps> = ({ open = false, closeDialog }) => {
  const [authState, setAuthState] = useState<"signIn" | "signUp">("signIn");
  const [authLoading, setAuthLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const errorRef = useRef(null);
  const [isError, setIsError] = useState(false);
  const errorMessage = "Не получилось авторизоваться";

  if (!open) return <></>;
  const element = document.querySelector("#modal")!;

  const handleInputChange = () => {
    setIsError(false);
  };

  function submitLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const login = event.currentTarget.login?.value;
    const password = event.currentTarget.password?.value;
    const passwordConfirmation = event.currentTarget.passwordConfirm?.value;
    setAuthLoading(true);

    authUser({
      login,
      password,
      passwordConfirmation,
      type: authState,
      dispatch,
      closeDialog,
      setAuthLoading,
      setIsError,
    });
  }

  const jsx_res = (
    <article className={cl.dialog}>
      <header className={cl.dialog__header}>
        <IconButton
          className={cl.dialog__header_icon_wrapper}
          onClick={closeDialog}
        >
          <CloseIcon className={cl.dialog__header_icon} />
        </IconButton>
      </header>
      <div className={cl.dialog__nav}>
        <Button
          onClick={() => handleClick(setAuthState)}
          variant={"text"}
          className={clsx(
            cl.dialog__nav_button,
            authState === "signIn" && cl.button_active,
          )}
        >
          Вход
        </Button>
        <Button
          onClick={() => handleClick(setAuthState)}
          variant={"text"}
          className={clsx(
            cl.dialog__nav_button,
            authState === "signUp" && cl.button_active,
          )}
        >
          Регистрация
        </Button>
      </div>

      <Form className={cl.dialog__form} onSubmit={submitLogin}>
        <CustomTextFieldDialog
          type={"text"}
          name={"login"}
          placeHolder={"Логин"}
          className={cl.dialog__input}
          onChange={handleInputChange}
        />
        <CustomTextFieldDialogForPassword
          className={cl.dialog__input}
          onChange={handleInputChange}
        />
        {authState === "signUp" && (
          <CustomTextFieldDialog
            type={"password"}
            name={"passwordConfirm"}
            placeHolder={"Подтверждение пароля"}
            className={cl.dialog__input}
            onChange={handleInputChange}
          />
        )}
        {authLoading && <Loader className={cl.dialog__loader} />}
        <CSSTransition
          in={isError}
          timeout={1000}
          mountOnEnter
          unmountOnExit
          classNames={{
            enter: cl.errorTextEnter,
            enterActive: cl.errorTextEnterActive,
            exit: cl.errorTextExit,
            exitActive: cl.errorTextExitActive,
          }}
        >
          <div ref={errorRef} className={cl.dialog__error}>
            {errorMessage}
          </div>
        </CSSTransition>
        <Button
          type={"submit"}
          className={cl.dialog__button}
          disabled={isError || authLoading}
        >
          Войти
        </Button>
      </Form>
    </article>
  );

  return createPortal(jsx_res, element);
};

function handleClick(
  setState: React.Dispatch<React.SetStateAction<"signIn" | "signUp">>,
) {
  setState((prev) => (prev === "signUp" ? "signIn" : "signUp"));
}

export { LoginDialog };
