import classNames from "classnames";
import styles from "./Tag.module.scss";

interface ITag {
  tagText: string;
  className?: string;
}

export const Tag = ({ tagText, className }: ITag) => {
  return (
    <span className={classNames(styles["Tag"], className)}>{tagText}</span>
  );
};
