class HelloLifecycleCallbacks extends HTMLElement {
  constructor() {
    // Called when an instance of the element is created or upgraded
    super(); // always call super() first in the ctor.
  }
  // Tells the element which attributes to observer for changes
  // This is a feature added by Custom Elements
  static get observedAttributes() {
    return [ `hello` ];
  }
  connectedCallback() {
    // Called every time the element is inserted into the DOM
    console.log(`Hello from HelloLifecycleCallbacks connectedCallback()`);
  }
  disconnectedCallback() {
    // Called every time the element is removed from the DOM. 
    console.log(`Hello from HelloLifecycleCallbacks disconnectedCallback()`);
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    // Called when an attribute was added, removed, or updated
    console.log(`Hello from HelloLifecycleCallbacks attributeChangedCallback(). Changed attribute: ${attrName}, old value: ${oldVal}, new value: ${newVal}`);
    this.innerHTML = `<p>Hello ${newVal}</p>`;
  }
  adoptedCallback() {
    // Called if the element has been moved into a new document
    console.log(`Hello from HelloLifecycleCallbacks adoptedCallback()`);
  }
}

customElements.define('hello-lifecycle-callbacks', HelloLifecycleCallbacks);