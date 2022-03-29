import React from "react";

interface ButtonProps {
  title: string;
  iconComponent?: React.ReactNode;
}

export const Button = ({ title, iconComponent }: ButtonProps) => {
  return (
    <button
      type="button"
      className="group text-white text-xs md:text-sm bg-dark focus:ring-4 focus:outline-none focus:ring-slate-400/40 rounded-lg px-5  inline-flex items-center dark:text-slate-900  dark:bg-slate-200 dark:hover:bg-slate-300 dark:focus:ring-slate-100/30"
    >
      {iconComponent}
      {title}
    </button>
  );
};
