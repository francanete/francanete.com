import Image from "next/image";
import { useState } from "react";

import styles from "./ImageArticle.module.scss";

interface IImageArticle {
  src: string;
  size?: number;
}

export const ImageArticle = ({ src, size = 400 }: IImageArticle) => {
  const [ratio, setRatio] = useState(16 / 9); // default to 16:9
  const [width, setWidth] = useState(size);
  const [height, setHeight] = useState(size);

  return (
    <Image
      className={styles.ImageArticle}
      alt={src}
      src={src}
      // width={size}
      // height={size}
      unoptimized={true}
      width={width / ratio}
      height={height}
      onLoadingComplete={({ naturalWidth, naturalHeight }) => {
        setRatio(naturalWidth / naturalHeight);
      }}
    />
  );
};
