import { createPortal } from "react-dom";
import cl from "./Dialog.module.scss";
import React, { FC, FormEvent, useState } from "react";
import { Form } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import clsx from "clsx";
import { CustomTextFieldDialog } from "@components/dialog/CustomTextFieldDialog.tsx";
import CloseIcon from "@mui/icons-material/Close";
import { CustomTextFieldDialogForPassword } from "@components/dialog/CustomTextFieldDialogForPassword.tsx";

interface DialogProps {
  open: boolean;
  closeDialog: () => void;
}

const Dialog: FC<DialogProps> = ({ open = false, closeDialog }) => {
  const [authState, setAuthState] = useState<"signIn" | "signUp">("signIn");

  if (!open) return <></>;

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
        />

        <CustomTextFieldDialogForPassword className={cl.dialog__input} />

        {authState === "signUp" && (
          <CustomTextFieldDialog
            type={"password"}
            name={"passwordConfirm"}
            placeHolder={"Подтверждение пароля"}
            className={cl.dialog__input}
          />
        )}

        <Button type={"submit"} className={cl.dialog__button}>
          Войти
        </Button>
      </Form>
    </article>
  );

  const element = document.querySelector("#modal")!;
  return createPortal(jsx_res, element);
};

function handleClick(
  setState: React.Dispatch<React.SetStateAction<"signIn" | "signUp">>,
) {
  setState((prev) => (prev === "signUp" ? "signIn" : "signUp"));
}

function submitLogin(event: FormEvent<HTMLFormElement>) {}

export { Dialog };
