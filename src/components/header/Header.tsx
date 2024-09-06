import cl from "./Header.module.scss";
import { Button } from "@mui/material";

import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { CustomNavLink } from "./CustomNavLink.tsx";
import { CustomTextFieldHeader } from "./CustomTextFieldHeader.tsx";
import { LoginDialog } from "@components/login/LoginDialog.tsx";
import { useState } from "react";
import { ProfileButton } from "@components/header/ProfileButton.tsx";
import { useAppSelector } from "@utils/redux.ts";
import { userSlice } from "@models/user/userSlice.ts";

const Header = () => {
  const handleSignClick = () => {
    setDialogOpen((prev) => !prev);
  };
  const [dialogOpen, setDialogOpen] = useState(false);

  const auth = useAppSelector(userSlice.selectors.isLoggined);

  return (
    <header className={cl.header}>
      <div className={cl.header__inner}>
        <nav className={cl.header__nav}>
          <NavLink
            to="/"
            data-title_type="home"
            className={({ isActive }) =>
              isActive
                ? clsx(cl.active_link, cl.header__link_title)
                : cl.header__link_title
            }
          >
            <h1 className={cl.header__title}>SearchKino</h1>
          </NavLink>

          <CustomTextFieldHeader
            className={cl.header__input}
          ></CustomTextFieldHeader>

          <div className={cl.header__link_list}>
            <CustomNavLink
              to={"movies"}
              className={cl.header__link_item}
              activeClassName={cl.active_link}
              data_title_type={"nav"}
            >
              Фильмы
            </CustomNavLink>
            <CustomNavLink
              to={"series"}
              className={cl.header__link_item}
              activeClassName={cl.active_link}
              data_title_type={"nav"}
            >
              Сериалы
            </CustomNavLink>
            {auth && (
              <CustomNavLink
                to={"favorites"}
                className={cl.header__link_item}
                activeClassName={cl.active_link}
                data_title_type={"nav"}
              >
                Любимые
              </CustomNavLink>
            )}
          </div>

          {!auth && (
            <Button
              className={cl.header__button}
              variant={"contained"}
              onClick={handleSignClick}
            >
              Sign in/Sign up
            </Button>
          )}

          {auth && <ProfileButton />}
        </nav>
        <LoginDialog
          open={dialogOpen}
          closeDialog={() => setDialogOpen(false)}
        />
      </div>
    </header>
  );
};

export { Header };
