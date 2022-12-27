import Image from "next/image";

import styles from "./ImageArticle.module.scss";

interface IImageArticle {
  src: string;
  size?: number;
}

export const ImageArticle = ({ src, size = 800 }: IImageArticle) => {
  return (
    <Image
      className={styles.ImageArticle}
      alt={src}
      src={src}
      width={size}
      height={size}
    />
  );
};
