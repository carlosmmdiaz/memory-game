import { LitElement, html } from "lit-element";
import { ScopedElementsMixin } from "@open-wc/scoped-elements";
import { CMMDButton } from "@cmmd-web/button";
import { CMMDHeader } from "@cmmd-web/header";

import { Card } from "../card/Card.js";
import { generateRandomGameTable } from "./utils.js";
import { styles } from "./App.style.js";

export default class App extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      "memory-card": Card,
      "memory-button": CMMDButton,
      "memory-header": CMMDHeader,
    };
  }

  static get properties() {
    return {
      numberOfCards: { type: String, reflect: true },
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();

    const viewportHeight = Math.round(window.visualViewport.height / 150);
    const viewportWidth = Math.round(window.visualViewport.width / 150);
    this.numberOfCards = (viewportHeight * viewportWidth) / 2;
    console.log("viewportHeight: ", viewportHeight);
    console.log("viewportWidth: ", viewportWidth);
    console.log("numberOfCards: ", this.numberOfCards);
  }

  loadGame() {
    this.gameTable = generateRandomGameTable(Number(this.numberOfCards));
  }

  resetGame() {
    this.loadGame();

    this.requestUpdate();
  }

  connectedCallback() {
    super.connectedCallback();

    this.loadGame();
  }

  flipCard(idCard) {
    this.gameTable = this.gameTable.map((card) => {
      if (card.idCard === idCard && !card.blocked) {
        return {
          ...card,
          flipped: !card.flipped,
        };
      }

      return card;
    });
  }

  blockCard(idCard) {
    this.gameTable = this.gameTable.map((card) => {
      if (card.idCard === idCard && !card.blocked) {
        return {
          ...card,
          blocked: true,
        };
      }

      return card;
    });
  }

  unFlipCards(idCard) {
    this.gameTable = this.gameTable.map((card) => ({
      ...card,
      flipped: card.blocked
        ? card.flipped
        : card.idCard === idCard
        ? true
        : false,
    }));
  }

  checkMatches(imageId) {
    const cardMatches = this.gameTable.filter(
      (card) => card.flipped && card.imageId === imageId
    );

    if (cardMatches.length === 2) {
      this.blockCard(cardMatches[0].idCard);
      this.blockCard(cardMatches[1].idCard);
    }
  }

  flippingCard({ detail: { idCard, imageId } }) {
    const cardsFlipped = this.gameTable.filter(
      (card) => card.flipped && !card.blocked
    );

    switch (cardsFlipped.length) {
      case 0:
        this.flipCard(idCard);
        break;
      case 1:
        this.flipCard(idCard);
        this.checkMatches(imageId);
        break;
      default:
        this.unFlipCards(idCard);
        break;
    }

    this.requestUpdate();
  }

  renderGameTable() {
    return this.gameTable.map(
      (card) =>
        html`
          <memory-card
            class="game-card"
            .idCard=${card.idCard}
            .imageId=${card.imageId}
            ?flipped=${card.flipped}
            ?blocked=${card.blocked}
            @card-flipping-over=${(e) => this.flippingCard(e)}
          ></memory-card>
        `
    );
  }

  render() {
    return html`
      <memory-header title="Erick's Memory Game">
        <memory-button danger @click=${this.resetGame}> Reset </memory-button>
      </memory-header>
      <div class="game-table">${this.renderGameTable()}</div>
    `;
  }
}
