import { LitElement, html } from "lit-element";
import { ScopedElementsMixin } from "@open-wc/scoped-elements";

import { Card } from "../card/Card.js";

function getRandomInt(min, max, gameTable) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  const valid =
    gameTable.filter((item) => item.imageId === String(randomNumber)).length <
    2;

  if (!valid) {
    return getRandomInt(min, max, gameTable);
  }

  return randomNumber;
}

function generateGameTable(numberOfCards) {
  const gameTableLength = numberOfCards * 2;
  const gameTable = [];

  for (let i = 0; i < gameTableLength; i++) {
    gameTable.push({
      idCard: i,
      imageId: String(getRandomInt(1, numberOfCards + 1, gameTable)),
      flipped: false,
      blocked: false,
    });
  }

  return gameTable;
}

function blockCards(gameTable, imageId) {
  return gameTable.map((card) => ({
    ...card,
    blocked: card.blocked || card.imageId === imageId,
  }));
}

function resetGameTable(gameTable) {
  return gameTable.map((card) => ({ ...card, flipped: false, blocked: false }));
}

export default class App extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      "memory-card": Card,
    };
  }

  constructor() {
    super();

    this.numberOfCards = 3;
    this.gameTable = generateGameTable(this.numberOfCards);
  }

  checkMatches() {
    console.log("GameTAble: ", this.gameTable);

    const cardsFlipped = this.gameTable.filter(
      (card) => card.flipped && !card.blocked
    );

    console.log("cardsFlipped: ", cardsFlipped);

    if (cardsFlipped.length === 2) {
      if (cardsFlipped[0].imageId === cardsFlipped[1].imageId) {
        this.gameTable = blockCards(this.gameTable, cardsFlipped[0].imageId);

        this.requestUpdate();
      }
    }
  }

  flipCard({ detail: { idCard } }) {
    const flippedCards = this.gameTable.filter((card) => card.flipped).length;

    this.gameTable = this.gameTable.map((card) => {
      if (card.idCard === idCard && !card.blocked) {
        return {
          ...card,
          flipped: !card.flipped,
        };
      }

      if (flippedCards === 2 && !card.blocked) {
        return {
          ...card,
          flipped: false,
        };
      }
      return card;
    });

    this.requestUpdate();
    this.checkMatches();
  }

  render() {
    return this.gameTable.map(
      (card) =>
        html`<memory-card
          .idCard=${card.idCard}
          .imageId=${card.imageId}
          ?flipped=${card.flipped}
          ?blocked=${card.blocked}
          @card-flipping-over=${(e) => this.flipCard(e)}
        ></memory-card>`
    );
  }
}
