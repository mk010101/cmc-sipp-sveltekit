<script lang="ts">
  import { fly } from 'svelte/transition';

  import { CmcButton, CmcCheck, CmcRangeBar } from '$lib/cmc-wc';
  import { goto } from '$app/navigation';
  import { customer } from '$lib/stores/store';

  CmcButton;
  CmcCheck;
  CmcRangeBar;

  function formInputHandler() {
    console.log($customer);
  }

  function goNext(e: Event) {
    goto('/gender');
    e.preventDefault();
  }
</script>

<main>
  <cmc-range-bar hideValue hideLabels steps="4" value="3" min="0" max="4" />
  <h2>What's your gender?</h2>

  <form on:input={formInputHandler}>
    <cmc-check type="radio" variant="panel" shape="circle" name="gender" value="male" label="Male" />
    <cmc-check type="radio" variant="panel" shape="circle" name="gender" value="female" label="Female" />
    {#if !$customer.title || ($customer.title === 'other' && !$customer.other)}
      <cmc-button disabled>Continue</cmc-button>
    {:else}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <cmc-button role="button" on:click={goNext}>Continue</cmc-button>
    {/if}
  </form>
</main>

<style>
  cmc-check {
    margin-bottom: 1rem;
  }
</style>
