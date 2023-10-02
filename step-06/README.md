# Web Components in 2023 - Synchonizing the element

In this step we are going to create a Svelte application that will use all the different Web Components we have developped inside the same application.

## Publishing the missing component

The first step is to be sure that all the four custom  elements (`my-vanilla-counter`, `my-stencil-counter`, `my-lit-counter` and `my-svelte-counter`) are published in the Verdaccio registry.

If any of them isn't published, you can easily publish them using the scripts in the `scripts` folder.

Example:
```bash
./scripts/build-and-publish-vanilla.sh
```

Or, if you need to publish all the components:

```bash
./scripts/build-and-publish-all.sh
```

## Create a *Synchronise counters* Svelte application

Now we are going to use Svelte to create a *Synchronise counters* application, `sync-counters`.

> To create Svelte application, we need to use `nodejs` and `npm`. If you don't have them in your computer, the easiest way would be to use the [GitPod workspace](https://gitpod.io/#https://github.com/LostInBrittany/web-components-in-2023.git), that has all the required tooling.


## Creating the project

In the `workshop` folder, create a new Svelte application project using the Svelte generator of Vite, and call it `sync-counters`:

```bash
$ npm init vite
Need to install the following packages:
  create-vite@4.4.1
Ok to proceed? (y) 
✔ Project name: … sync-counters
✔ Select a framework: › Svelte
✔ Select a variant: › JavaScript

Scaffolding project in /workspace/web-components-in-2023/workshop/sync-counters...

Done. Now run:

  cd sync-counters
  npm install
  npm run dev
```

Now we go to the `sync-counters` folder and we install the 4 custom elements from the Verdaccio registry:

```bash
cd sync-counters
npm install
npm install my-vanilla-counter my-stencil-counter my-lit-counter my-svelte-counter --registry http://localhost:4873
```

