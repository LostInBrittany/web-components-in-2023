class HelloWorldWithTemplate extends HTMLElement {
    
  // This gets called when the HTML parser sees your tag
  constructor() {
    super(); // always call super() first in the ctor.

    const template = document.createElement('template');
    template.innerHTML = `
        <p>Hello <slot></slot>!</p>
    `;

    let templateContent = template.content;

    const shadowRoot = this.attachShadow({ mode: "open" });
    this..appendChild(templateContent.cloneNode(true));

  }
  // Called when your element is inserted in the DOM or
  // immediately after the constructor if it’s already in the DOM
  connectedCallback() {
  }
}

customElements.define('hello-world-with-template', HelloWorldWithTemplate);
