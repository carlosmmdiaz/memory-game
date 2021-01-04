import { LitElement, html } from "lit-element";
import { ScopedElementsMixin } from "@open-wc/scoped-elements";
import { CMMDButton } from "@cmmd-web/button";

import { styles } from "./DialogContent.style.js";

export class DialogContent extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      "memory-button": CMMDButton,
    };
  }

  static get styles() {
    return styles;
  }

  closeDialog(e) {
    e.target.dispatchEvent(
      new Event("close-overlay", { bubbles: true, composed: true })
    );

    this.dispatchEvent(new CustomEvent("closing-dialog"));
  }

  render() {
    return html`
      <div class="dialog-content">
        <img src="./assets/win.gif" />
        <h1>You won!!</h1>
        <memory-button @click=${this.closeDialog}>Play again</memory-button>
      </div>
    `;
  }
}
