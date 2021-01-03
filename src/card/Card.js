import { LitElement, html } from "lit-element";
import { classMap } from "lit-html/directives/class-map";
import { nothing } from "lit-html";

import { styles } from "./Card.style.js";

export class Card extends LitElement {
  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      flipped: { type: Boolean, reflect: true },
      blocked: { type: Boolean, reflect: true },
      imageId: { type: String },
      idCard: { type: Number },
    };
  }

  constructor() {
    super();

    /**
     * @type {Boolean} Tells if the card is flipped or not
     */
    this.flipped = false;

    /**
     * @type {Boolean} Tells if the card is blocked or not
     */
    this.blocked = false;

    /**
     * @type {String} Id of the image to show on flip
     */
    this.imageId = "";

    /**
     * @type {Number} Id of the image to show on flip
     */
    this.idCard = null;
  }

  flipCard() {
    if (!this.blocked) {
      this.dispatchEvent(
        new CustomEvent("card-flipping-over", {
          detail: { idCard: this.idCard, imageId: this.imageId },
        })
      );
    }
  }

  render() {
    const flipCardInnerClasses = {
      "flip-card-inner": true,
      flipped: this.flipped,
      blocked: this.blocked,
    };

    return html`
      <button class="flip-card" @click="${this.flipCard}">
        <div class=${classMap(flipCardInnerClasses)}>
          <div class="flip-card-front">
          <img src=${`./assets/mark.svg`} />
          </div>
          <div class="flip-card-back">
            ${this.imageId
              ? html`<img src=${`./assets/${this.imageId}.svg`} />`
              : nothing}
          </div>
        </div>
      </button>
    `;
  }
}
