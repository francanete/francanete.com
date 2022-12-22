import classNames from "classnames";
import { BiGitMerge } from "react-icons/bi";

import styles from "./Tag.module.scss";

interface ITag {
  tagText: string;
  className?: string;
  backgroundColor?: string;
  icon?: JSX.Element | null;
}

export const Tag = ({ tagText, className, backgroundColor, icon }: ITag) => {
  return (
    <span
      className={classNames(
        styles["Tag"],
        styles[`Tag--${backgroundColor}`],
        className
      )}
    >
      {icon}
      {tagText.toUpperCase()}
    </span>
  );
};
