import { html, css, LitElement } from 'lit';
import logoUrl from './assets/logo.png';

export class MyLitCounter extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
      .container {
        display: flex; 
        flex-flow: row wrap; 
        justify-content: space-around; 
        align-items: center; 
        background-color: #c0c0ff; 
        padding: 1rem; 
        border-radius: 0.5rem;
      }
      #icon {
        width: 7rem; 
        height: 7rem; 
        border-radius: 1rem; 
        margin: 0.5rem; 
        display: flex; 
        flex-flow: row nowrap; 
        justify-content: center; 
        align-items: center; 
        background-color: #a0a0ee; 
        cursor: pointer; 
        border-width: 2px; 
        border-style: outset; 
        border-color: buttonface;
      }
      #icon img {
        width: 3rem;
      }
      #value {
        font-size: 5rem;
      }
    `;
  }

  static get properties() {
    return {
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.counter = 0;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <div class="container">
        <div id="icon" @click=${this.__increment}>
          <img src=${logoUrl}>
        </div>
        <div id="value">
            ${this.counter}
        </div>
    </div>
    `;
  }
}

window.customElements.define('my-lit-counter', MyLitCounter);
