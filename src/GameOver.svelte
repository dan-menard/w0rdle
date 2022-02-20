<script>
  export let message;
</script>

<div class="gameOver {!message ? 'hide' : ''}">
  <p class={message.includes('win') ? 'win' : 'loss'}>{message}</p>
  <button on:click={() => window.location.reload()}>Play again?</button>
</div>

<style>
  .gameOver p {
    display: inline;
  }

  .gameOver .win {
    background: linear-gradient(60deg, #ff3e00, #009900);
    background-clip: text;
    -webkit-background-clip: text;
    color: rgba(0,0,0,.2);
  }

  .gameOver button {
    display: block;
    margin: 1em auto;
    padding: 5px 10px;
    border: 1px solid;
  }
</style>
