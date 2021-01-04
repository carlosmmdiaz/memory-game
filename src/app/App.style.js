import { css } from "lit-element";

export const styles = css`
  :host {
    display: block;
    margin: 0.5rem;
  }

  .game-table {
    display: grid;
    grid-gap: 0.5rem;
    row-gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(var(--cardSpace), 1fr));
    justify-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .game-card {
    width: var(--cardSpace);
    height: var(--cardSpace);
  }
`;
