<script lang="ts">
  import { goto } from '$app/navigation';
  //@ts-ignore
  import { CmcButton } from '$lib/cmc-wc';

  function goNext() {
    goto('/title');
  }
</script>

<main>
  <h1>Open your Self Invested Personal Pension</h1>
  <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
    type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
    Lorem Ipsum.
  </p>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <cmc-button variant="tertiary" on:click={goNext}>Continue</cmc-button>
</main>

<p />

<style>
  main {
    min-height: 100%;
    flex-grow: 100%;
    width: 100%;
    color: var(--color-light);
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    text-align: center;
    background: linear-gradient(var(--color-secondary-40), var(--color-secondary-60));
  }
  h1 {
    color: var(--color-primary-60);
  }
</style>
