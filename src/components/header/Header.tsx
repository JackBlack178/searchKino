import cl from "./Header.module.scss";
import { Button } from "@mui/material";

import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { CustomNavLink } from "./CustomNavLink.tsx";
import { CustomTextFieldHeader } from "./CustomTextFieldHeader.tsx";
import { Dialog } from "@components/dialog/Dialog.tsx";
import { useState } from "react";

const Header = () => {
  const handleSignClick = () => {
    if (!dialogOpen) setDialogOpen(true);
  };
  const [dialogOpen, setDialogOpen] = useState(false);

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
          </div>

          <Button
            className={cl.header__button}
            variant={"contained"}
            onClick={handleSignClick}
          >
            Sign in/Sign up
          </Button>
        </nav>
        <Dialog open={dialogOpen} closeDialog={() => setDialogOpen(false)} />
      </div>
    </header>
  );
};

export { Header };
