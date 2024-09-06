import React from "react";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import cl from "@components/header/Header.module.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAppDispatch } from "@utils/redux.ts";
import { userSlice } from "@models/user/userSlice.ts";

const ProfileButton = () => {
  const dispatch = useAppDispatch();

  const logOut = () => {
    dispatch(userSlice.actions.clearUser());
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            variant="text"
            {...bindTrigger(popupState)}
            className={cl.header__profile_btn}
          >
            <IconButton
              aria-label="delete"
              disabled
              color="primary"
              {...bindTrigger(popupState)}
            >
              <AccountCircleIcon
                className={cl.header__profile_icon}
                fontSize={"large"}
              />
            </IconButton>
          </Button>

          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Профиль</MenuItem>
            <MenuItem onClick={popupState.close}>Любимые фильмы</MenuItem>
            <MenuItem onClick={popupState.close} onClickCapture={logOut}>
              Выйти
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};

export { ProfileButton };
