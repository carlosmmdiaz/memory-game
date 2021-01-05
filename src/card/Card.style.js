import { css } from "lit-element";
import { blue, lightBlue, darkBlue } from "@cmmd-web/styles";

export const styles = css`
  :host {
    width: 300px;
    height: 200px;
  }
  /* The flip card container - set the width and height to whatever you want. 
  We have added the border property to demonstrate that the flip itself goes 
  out of the box on hover (remove perspective if you don't want the 3D effect */
  .flip-card {
    background-color: transparent;
    width: inherit;
    height: inherit;
    border: none;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
  }

  /* This container is needed to position the front and back side */
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  /* Do an horizontal flip when you move the mouse over the flip box container */
  .flipped {
    transform: rotateY(180deg);
  }

  .blocked {
    border: 0.5rem solid ${darkBlue};
    box-sizing: border-box;
    border-radius: 50%;
  }

  /* Position the front and back side */
  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    border-radius: 50%;
    box-sizing: border-box;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  /* Style the front side (fallback if image is missing) */
  .flip-card-front {
    background-color: ${blue};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Style the back side */
  .flip-card-back {
    color: white;
    transform: rotateY(180deg);
    background-color: ${lightBlue};
  }

  img {
    object-fit: fill;
    width: 80%;
    height: 100%;
    border-radius: 10px;
  }

  .flip-card-front img {
    width: 70px;
    height: 70px;
  }
`;
