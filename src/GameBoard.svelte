<script>
  export let word;
  export let availableLetters;
  export let onWin;
  export let onLoss;

  import focusFirstInput from './util/focusFirstInput.js';

  import words from './util/words.js';

  function onGuessed(evt) {
    const row = evt.target.parentNode;
    const inputs = Array.from(row.querySelectorAll('input'));
    let guess = '';
    let rejected = [];

    inputs.forEach((input, index) => {
      const value = input.value.toUpperCase();

      if (word.includes(value)) {
        if(word.charAt(index) === value) {
          input.classList.add('correct');
        } else {
          input.classList.add('almost');
        }
      } else {
        rejected.push(value);
      }

      input.disabled = true;
      guess += value;
    });

    evt.target.classList.add('hide');

    if (!words.includes(guess)) {
      console.log(`${guess} not in words list!`);
    }

    if (guess === word) {
      onWin();
      return;
    }

    availableLetters = availableLetters.filter((letter) => {
      return !(rejected.includes(letter));
    });

    const nextRow = row.nextElementSibling;

    if (!nextRow) {
      onLoss();
    } else {
      focusFirstInput(nextRow);
    }
  }

  function onTyped(evt) {
    const el = evt.target;

    if (el.nodeName === "INPUT" && (evt.keyCode < 65 || evt.keyCode > 90)) {
      return;
    }

    if (!availableLetters.includes(evt.key.toUpperCase())) {
      evt.target.classList.add('wrong');
    } else {
      evt.target.classList.remove('wrong');
    }

    const nextEl = evt.target.nextElementSibling;

    if (!nextEl) {
      return;
    }

    if (nextEl.nodeName === "INPUT") {
      nextEl.disabled = false;
      nextEl.focus();
    } else if (nextEl.nodeName === "BUTTON") {
      nextEl.classList.remove('hide');
      nextEl.focus();
    } else {
      console.log(next.nodeName);
    }
  }
</script>

<div class="gameboard" on:keyup={onTyped}>
  {#each Array(6) as _, i}
    <div class="guess-{i}">
      {#each Array(5) as _, i}
        <input type="text" maxlength="1" class="letter" disabled />
      {/each}

      <button class="hide" on:click={onGuessed}>Guess!</button>
    </div>
  {/each}
</div>

<style>
  .gameboard {
    padding-left: calc(3em + 4px);
  }

  input, button {
    height: 4em;
    margin: 4px;
    text-align: center;
    text-transform: uppercase;
    border: 1px solid;
  }

  input {
    width: 4em;
  }

  button {
    width: 4.5em;
    box-sizing: content-box;
  }

  .correct {
    background-color: #ccffcc;
    border-color: #006600;
    color: #006600;
  }

  .almost {
    background-color: #ffeecc;
    border-color: #663300;
    color: #663300;
  }

  .wrong {
    background-color: #ffcccc;
    border-color: #660000;
    color: #660000;
  }
</style>
