<script>
  export let word;

  import focusFirstInput from './util/focusFirstInput.js';
  import GameBoard from './GameBoard.svelte';
  import GameOver from './GameOver.svelte';

  let gameOverMessage = '';
  let availableLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  function onWin() {
    gameOverMessage = "You win!";
  }

  function onLoss() {
      gameOverMessage = `You ran out of guesses. The word was ${word}.`
  }

  document.addEventListener('DOMContentLoaded', () => focusFirstInput(document));
</script>

<main>
  <h1>W0rdle!</h1>

  <GameBoard word={word} bind:availableLetters={availableLetters} onWin={onWin} onLoss={onLoss} />

  <div class="availableLetters">{availableLetters.join('')}</div>

  <GameOver bind:message={gameOverMessage} />
</main>

<style>
  main {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-family: monospace;
  }

  .availableLetters {
    width: 18em;
    margin: 2em auto;
    letter-spacing: 1em;
    font-size: 20px;
    word-break: break-all;
  }
</style>
