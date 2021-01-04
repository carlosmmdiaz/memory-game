import { css } from "lit-element";
import { white, darkBlack, CMMDfontFamily } from "@cmmd-web/styles";

export const styles = css`
  .dialog-content {
    border-radius: 5px;
    width: 50vh;
    background: ${white};
    text-align: center;
    padding-bottom: 1rem;
  }

  h1 {
    font-family: ${CMMDfontFamily};
    color: ${darkBlack};
  }

  img {
    width: 100%;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
`;
