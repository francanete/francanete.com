import React from "react";
import Script from "next/script";

type Props = {
  source: string | undefined;
};

export const BuzzproutPlayer = ({ source }: Props) => {
  return (
    <div>
      <Script src={source} />
      <div id="buzzsprout-player-6107491"></div>
    </div>
  );
};
