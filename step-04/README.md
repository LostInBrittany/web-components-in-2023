# Web Components in 2023 - Lit `my-counter` Element

Now we are going to use Lit to create another version of our counter, `my-lit-counter`.

> To create Lit components, we need to use `nodejs` and `npm`. If you don't have them in your computer, the easiest way would be to use the [GitPod workspace](https://gitpod.io/#https://github.com/LostInBrittany/web-components-in-2023.git), that has all the required tooling.

## Creating the project

In the `workshop` folder, create a new lit project using the Open Web Components (`open-wc`) generator, and call it `my-lit-counter`:

```bash
npm init @open-wc
```

After running init you will be provided with a prompt so that you can choose the type of project to start. Please choose *Scaffold a new project* to create your first Lit component.

```bash
$ npm init @open-wc

        _.,,,,,,,,,._
     .d''           ``b.       Open Web Components Recommendations
   .p'      Open       `q.
 .d'    Web Components  `b.    Start or upgrade your web component project with
 .d'                     `b.   ease. All our recommendations at your fingertips.
 ::   .................   ::
 `p.                     .q'
  `p.    open-wc.org    .q'
   `b.     @openWc     .d'
     `q..            ..,'      See more details at https://open-wc.org/init/
        '',,,,,,,,,,''


Note: you can exit any time with Ctrl+C or Esc
✔ What would you like to do today? › Scaffold a new project
✔ What would you like to scaffold? › Web Component
✔ What would you like to add? ›
✔ Would you like to use typescript? › No
✔ What is the tag name of your web component? … my-lit-counter

./
├── my-lit-counter/
│   ├── .vscode/
│   │   └── extensions.json
│   ├── demo/
│   │   └── index.html
│   ├── src/
│   │   └── MyLitCounter.js
│   ├── .editorconfig
│   ├── .gitignore
│   ├── index.js
│   ├── LICENSE
│   ├── my-lit-counter.js
│   ├── package.json
│   ├── README.md
│   └── web-dev-server.config.mjs

✔ Do you want to write this file structure to disk? › Yes
Writing..... done
✔ Do you want to install dependencies? › Yes, with npm

Installing dependencies...
This might take some time...
Using npm to install...
added 198 packages, and audited 199 packages in 20s
24 packages are looking for funding
  run `npm fund` for details
found 0 vulnerabilities

> my-lit-counter@0.0.0 analyze
> cem analyze --litelement
[05:38:16] @custom-elements-manifest/analyzer: Created new manifest.

If you want to rerun this exact same generator you can do so by executing:
npm init @open-wc --destinationPath /Users/hgonzale/git/frontend/web-components-in-2023/step-04/my-lit-counter/my-lit-counter --type scaffold --scaffoldType wc --features  --typescript false --tagName my-lit-counter --writeToDisk true --installDependencies npm

You are all set up now!

All you need to do is run:
  cd my-lit-counter
  npm run start
```


## Starting the development server

As the starter suggest, go to the newly created `my-lit-counter` folder, and run:

```bash
cd my-lit-counter
npm install
npm run start
```

Then point your browser to the given URL and you should see your first Lit component:

```bash
$ npm run start

> my-lit-counter@0.0.0 start
> web-dev-server

Web Dev Server started...

  Root dir: /Users/hgonzale/git/frontend/web-components-in-2023/step-04/my-lit-counter
  Local:    http://localhost:8000/demo/
  Network:  http://172.28.0.124:8000/demo/
```

[![Hello Lit](./img/hello-lit-1024.jpg)](./img/hello-lit.png)


## How does it work?

If you look at the `my-lit-counter` folder, you will see the structure of a Lit project is simpler than for Stencil, nothing special here besides the `src` folder for the source files, where we have one component: `MyLitCounter.js`:

File `my-lit-counter/src/MyLitCounter.js`
```javascript
import { html, css, LitElement } from 'lit';

export class MyLitCounter extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--my-lit-counter-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
```

Let's analyse it together!

Lit components extend a common base classe `LitElement` that includes the syntactic sugar that makes Lit so easy, without requiring any building step:

```javascript
import { html, css, LitElement } from 'lit';

export class MyLitCounter extends LitElement { /* ... */ }
```

The `render()` method function defines your component’s template. You must implement render for every LitElement component. It returns an HTML template object using `lit-html`:

```javascript
  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
```

A LitElement usually has properties, instance variables defining its state. Properties are declared in a `properties` static getter, that return the observable properties that cause the element to update.

In our example we have two properties, `title` and `counter`: 

```javascript
  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }
```

Properties and internal variables can be initialized on the constructor:

```javascript 
  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }
```

And you can define the styling of your component with the `styles` static getter

```javascript
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--my-lit-counter-text-color, #000);
      }
    `;
  }
```

By default, Lit components use ShadowDOM.

The component itself is defined as custom element in the `my-lit-counter/my-lit-counter.js` file. That is an opinionated OpenWC choice, it could be perfectly done in the same file where we declare the component:

File `my-lit-counter/my-lit-counter.js`
```javascript
import { MyLitCounter } from './src/MyLitCounter.js';

window.customElements.define('my-lit-counter', MyLitCounter);
```

And the component is imported and used in `my-lit-counter/demo/index.html`.
If we look at it, we see that it uses the `render()` method from Lit to directly generate the HTML and attach it to the document::

File `my-lit-counter/demo/index.html`
```html
<!doctype html>
<html lang="en-GB">
<head>
  <meta charset="utf-8">
  <style>
    body {
      background: #fafafa;
    }
  </style>
</head>
<body>
  <div id="demo"></div>

  <script type="module">
    import { html, render } from 'lit';
    import '../my-lit-counter.js';

    const title = 'Hello owc World!';
    render(
      html`
        <my-lit-counter .title=${title}>
          some light-dom
        </my-lit-counter>
      `,
      document.querySelector('#demo')
    );
  </script>
</body>
</html>

```

## Coding `my-lit-counter`

Let's modify our component to make it work as the Vanilla or Stencil ones.

For the properties, we only need one, `counter`, that we initialize to 0 in the constructor:

File `my-lit-counter/src/MyLitCounter.js`
```javascript
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

```

The rendering will build the component in a similar way than Stencil, but using `lit-html` instead of JSX. In order to declare an event listener, lit uses the `@attribute` syntax: 

File `my-lit-counter/src/MyLitCounter.js`
```javascript
  render() {
    return html`
      <div class="container">
        <div id="icon" @click=${this.__increment}>
          <img src=${import.meta.url + `/../../assets/logo.png`}>
        </div>
        <div id="value">
            ${this.counter}
        </div>
    </div>
    `;
  }
```

Now we need to add the Lit logo we have referenced in `render()`. Copy the lit logo `lit-js.png` from the main `assets` folder to `my-lit-counter/src/assets/logo.png`.

And we put the CSS in the `css()` static getter:

```javascript
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
        background-color: #c0c0c0; 
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
    `;
  }
```

Now we simply reload the page and  `my-lit-counter` appears on the browser:

[![`my-lit-counter` in action](./img/my-lit-counter-1024.jpg)](./img/my-lit-counter.png)


## Publishing in our local registry

In order to publish our `my-stencil-component` into the local Verdaccio registry, we need to

1. Create a user, if not already done (usually in the [step 02](../step-02/)):

```bash
npm adduser --registry http://localhost:4873
```

  [![Creating a user in local Verdaccio registry](./img/gitpod-registry-add-user-1024.png)](./img/gitpod-registry-add-user.png)

2. Publish the component:

```bash 
npm publish --registry http://localhost:4873
```

  [![Publishing in local Verdaccio registry](./img/gitpod-registry-publish-1024.png)](./img/gitpod-registry-publish.png)