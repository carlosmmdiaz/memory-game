import { css } from "lit-element";

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
    transition: transform 0.2s;
    transform-style: preserve-3d;
  }

  /* Do an horizontal flip when you move the mouse over the flip box container */
  .flipped {
    transform: rotateY(180deg);
  }

  .blocked {
    border: 5px solid green;
    box-sizing: border-box;
    border-radius: 10px;
  }

  /* Position the front and back side */
  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    border-radius: 10px;
  }

  /* Style the front side (fallback if image is missing) */
  .flip-card-front {
    background-color: #bbb;
    color: black;
  }

  /* Style the back side */
  .flip-card-back {
    background-color: dodgerblue;
    color: white;
    transform: rotateY(180deg);
  }

  img {
    object-fit: fill;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;
