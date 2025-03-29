<script lang="ts">
import { state } from 'svelte/runes';

let count = $state(0);

function increment() {
  count++;
}
</script>

<div class="counter">
  <h2>Counter: {count}</h2>
  <button onclick={increment}>Increment</button>
</div>

<style>
.counter {
  padding: 1rem;
  border-radius: 8px;
  background: #f9f9f9;
  text-align: center;
}

button {
  padding: 0.5rem 1rem;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}

button:hover {
  background: #45a049;
}
</style>