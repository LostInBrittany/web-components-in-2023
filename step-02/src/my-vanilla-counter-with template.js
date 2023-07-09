let template = `
<style>
    .container {
      display: flex; 
      flex-flow: row wrap; 
      justify-content: space-around; 
      align-items: center; 
      background-color: rgb(255, 170, 170); 
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
      background-color: rgb(221, 221, 221); 
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
</style>
<div class="container">
   <div id="icon">
       <img src="${import.meta.url}/../img/logo.png">
   </div>
   <div id="value">
       0
   </div>
</div>
`;

class MyVanillaCounterWithTemplate extends HTMLElement {
  constructor() {
    super();
    this._counter = 0;
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.display();
  }

  static get observedAttributes() { return [ 'counter' ] }

  // We reflect attribute changes into property changes
  attributeChangedCallback(attr, oldVal, newVal) {
    if (oldVal !== newVal) {
      this[attr] = newVal;
    }
  }

  // Getter and setters for counter
  get counter() { return this._counter; }
  set counter(value) { 
    if (value != this._counter) {
      this._counter = Number.parseInt(value);
      this.setAttribute('counter', value);
      this.display();
    }
  }

  increment() {
    this.counter = this.counter + 1;
    this.dispatchEvent(new CustomEvent('increased', {detail: {counter: this.counter}}));
  }
  render() {
    let templ = document.createElement('template');     
    templ.innerHTML = template;

    this.shadowRoot.appendChild(templ.content.cloneNode(true));

    let button = this.shadowRoot.getElementById('icon');
    button.addEventListener('click', this.increment.bind(this));
  }

  display() {
    this.shadowRoot.getElementById('value').innerHTML =
      `${this.counter}`;
  }

}
customElements.define(`my-vanilla-counter-with-template`, MyVanillaCounterWithTemplate);