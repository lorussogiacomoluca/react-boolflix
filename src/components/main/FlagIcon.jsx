import Flag from "react-world-flags";

import React from "react";

const FlagIcon = ({ cod }) => {
  return (
    <div>
      <Flag
        code={cod !== "en" ? cod : "gb"}
        style={{ width: 32, height: 24 }}
        alt="Bandiera Italia"
      />{" "}
    </div>
  );
};

export default FlagIcon;
