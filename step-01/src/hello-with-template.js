
class HelloWithTemplate extends HTMLElement {
    
  // This gets called when the HTML parser sees your tag
  constructor() {
    super(); // always call super() first in the ctor.
    this.template = document.createElement('template');
    this.template.innerHTML = `
        <p>Hello <slot></slot> with templates!</p>
    `;
    this.attachShadow({ mode: 'open' });
  }
  // Called when your element is inserted in the DOM or
  // immediately after the constructor if it’s already in the DOM
  connectedCallback() {
    let templateContent = this.template.content;
    this.shadowRoot.appendChild(templateContent.cloneNode(true));
  }
}

customElements.define('hello-with-template', HelloWithTemplate);
