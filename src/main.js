import App from './App.svelte';
import words from './util/words.js';

const randomIndex = Math.floor(Math.random() * words.length);

const app = new App({
  target: document.body,
  props: {
    word: words[randomIndex]
  }
});

export default app;
