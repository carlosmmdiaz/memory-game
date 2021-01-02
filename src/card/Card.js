import { LitElement, html, css } from 'lit-element';
import { styles } from './Card.style.js';

export default class Card extends LitElement {
    static get styles() {
        return styles;
    }
    render() {
        return html`<h1>I am a card</h1>`;
    }
}

