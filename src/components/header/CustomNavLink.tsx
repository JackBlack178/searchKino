import { FC, ReactNode } from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

interface CustomNavLinkProps {
  data_title_type?: string;
  className?: string;
  activeClassName?: string;
  to: string;
  children?: ReactNode;
}

const CustomNavLink: FC<CustomNavLinkProps> = ({
  to,
  activeClassName,
  className,
  data_title_type,
  children,
}) => {
  return (
    <NavLink
      data-title_type={data_title_type}
      to={to}
      className={({ isActive }) =>
        isActive ? clsx(className, activeClassName) : className
      }
    >
      {children}
    </NavLink>
  );
};

export { CustomNavLink };
