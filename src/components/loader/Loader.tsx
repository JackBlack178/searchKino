import cl from "./Loader.module.scss";
import clsx from "clsx";

const Loader = ({ className }: { className?: string }) => {
  return <div className={clsx(cl.loader, className)}></div>;
};

export { Loader };
