<svelte:options customElement="my-svelte-counter" />

<script>
  import logo from './assets/logo.png';
  let count = 0
  const increment = () => {
    count += 1
  }
</script>

<div class="container">
  <button id="icon" on:click={increment}>
    <img src={logo} alt="logo">
  </button>
  <div id="value">
      {count}
  </div>
</div>

<style>
  .container {
    display: flex; 
    flex-flow: row wrap; 
    justify-content: space-around; 
    align-items: center; 
    background-color: #ffca91; 
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
    background-color: #ffa601; 
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