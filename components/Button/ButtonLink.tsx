import React from "react";
import Link from "next/link";
import { Button, IButton } from "./Button";

interface ILinkButton extends IButton {
  href: string;
}

export const ButtonLink = ({
  title,
  iconComponent,
  className,
  href,
}: ILinkButton) => {
  return (
    <Link href={href} target="_blank" className={className}>
      <Button
        title={title}
        iconComponent={iconComponent}
        className={className}
      />
    </Link>
  );
};
