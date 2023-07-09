import { Component, State, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'my-stencil-counter',
  styleUrl: 'my-stencil-counter.css',
  shadow: true,
  // assetsDirs lists the 'assets' directory as a relative
  // (sibling) directory
  assetsDirs: ['assets']
})
export class MyStencilContent {
  
  @State()
  counter: number = 0;

  private handleClick = () => {
    this.counter++;
  }
  
  render() {
    return <div class="container">
      <div id="icon" onClick={this.handleClick}>
        <img src={getAssetPath(`./assets/logo.png`)}></img>
      </div>
      <div id="value">
          {this.counter}
      </div>
    </div>
  }
}