# Web Components in 2023

This repository is the companion to my workshop *Web Components in 2023*.

> # Web Components in 2023
>
> For almost a decade now, we've been hearing about Web Components and their appealing promise of finally basing web development on a true component architecture, promoting reusability, modularization, and encapsulation.
>
> However, it is clear that today, in 2023, this promise is still not entirely fulfilled. Frameworks like React, Angular, and Vue continue to dominate the spotlight while the discourse around Web Components remains almost inaudible. Yet, Web Components are now present in many websites and applications we use every day, without us even noticing. The revolution is indeed underway, albeit rather quietly.
>
> In this lab, we will delve into the current evolution of Web Components, examining in detail the main libraries (Lit, Stencil, Hybrid...) and open-source component catalogs (Material, Lion, OpenUI5, Wired...)
>
> We will explore how different frameworks such as Svelte, Vue, and Angular have integrated and managed Web Components. The session aims to provide a comprehensive overview of strategies for creating reusable, framework-independent web components.
>
> We will also address common challenges, such as compatibility issues and Server Side Rendering (SSR) management, and the best practices and solutions for overcoming these problems.

## What do I need to use this workshop?

The only tool stricly needed to do this workshop is a modern web browser (ideally [Chrome](https://www.google.com/chrome/) or [Chromium](https://www.chromium.org/)). The whole workshop can be done via the browser by opening a workspace on [GitPod](https://gitpod.io), without installing anything in your computer.  

You only need a free GitPod account, that you can [create at  GitPod site](https://gitpod.io/login/).

> If you can't or don't want user GitPod, you will need to install manually some libraries and programs. Please refer to the [Doing this workshop without GitPod](#doing-this-workshop-without-gitpod) section. 

## Opening the workspace in GitPod

To open the workspace, simply click on the *Open in Gitpod* button, or use [this link](https://gitpod.io/#https://github.com/LostInBrittany/web-components-in-2023.git).

[![Open in GitPod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/LostInBrittany/web-components-in-2023.git)

## How is the workshop organized 

The workshop is divided in steps, each one in its own directory:

1. [Vanilla Custom Elements](./step-01/)
1. [Vanilla `my-counter` element](./step-02/)
1. [Stencil `my-counter` element](./step-03/)
1. [Lit `my-counter` element](./step-04/)
1. [Svelte `my-counter` element](./step-05/)


## Doing this workshop without GitPod

To follow this workshop without GitPod, you will need to install:


### Prerequisites

- Node.js v12 or higher.
- A recent version of your favorite Node Package Manager npm, pnpm or yarn.
- a modern web browser (ideally Chromium based, like [Chrome](https://www.google.com/chrome/), [Chromium](https://www.chromium.org/),or Edge).


### Verdaccio

Verdaccio is a lightweight private npm proxy registry built in Node.js. In this workshop we use it to push the different Web Components and to get them integrated in different applications.

In order to install Verdaccio, please do:

```bash
npm install -g verdaccio
```

And then start it:

```bash
$> verdaccio
warn --- config file  - /home/.config/verdaccio/config.yaml
warn --- http address - http://localhost:4873/ - verdaccio/5.0.0
```

By default, Verdaccio will liste at the port 4873 of your workstation, i.e. `http://localhost:4873/`