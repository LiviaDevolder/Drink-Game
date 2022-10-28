import React from "react";
import { Global, css } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "NouvelR";
        font-style: normal;
        font-weight: normal;
        src: url("https://storage.googleapis.com/kwi-69106-dev-storage/fonts/NouvelR-Regular.ttf")
            format("truetype"),
          url("../../../../static/public/fonts/NouvelR-Regular.ttf")
            format("truetype");
      }
    `}
  />
);

export default Fonts;
