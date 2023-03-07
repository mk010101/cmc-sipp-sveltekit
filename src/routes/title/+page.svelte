<script lang="ts">
  import { fly } from 'svelte/transition';

  //@ts-ignore
  import { CmcSelect, CmcButton, CmcTextfield, CmcRangeBar } from '$lib/cmc-wc';
  import { goto } from '$app/navigation';
  import { customer } from '$lib/stores/store';
  import { prevent_default } from 'svelte/internal';
  CmcSelect;
  CmcButton;

  let selectedTitle = '';

  const options = ['Dr', 'Mr', 'Mrs', 'Miss', 'Ms', 'Other'];

  function onSelect() {
    const el: CmcSelect | null = <CmcSelect | null>document.querySelector('cmc-select');
    const elTxt: CmcTextfield | null = <CmcTextfield | null>document.querySelector('cmc-textfield');

    selectedTitle = el?.value;

    const title = selectedTitle && selectedTitle !== 'other' ? selectedTitle : elTxt?.value;

    customer.update((old) => {
      return { ...old, title };
    });
    console.log($customer);
  }
  function goNext(e: Event) {
    goto('/gender');
    e.preventDefault();
  }
</script>

<main>
  <cmc-range-bar hideValue hideLabels steps="4" value="1" min="0" max="4" />
  <h2>How should we address you?</h2>
  <p>Can you provide us with a title that can be used before your name?</p>
  <form on:input={onSelect} on:submit={goNext}>
    <cmc-select placeholder="Select title" value={$customer.title} name="title">
      <option />
      {#each options as opt}
        <option value={opt.toLowerCase()}>{opt}</option>
      {/each}
    </cmc-select>

    {#if /other/i.test(selectedTitle)}
      <p>
        <cmc-textfield placeholder="Title" name="other" />
      </p>
    {/if}
    {#if !$customer.title}
      <cmc-button disabled>Continue</cmc-button>
    {:else}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <cmc-button role="button" on:click={goNext}>Continue</cmc-button>
    {/if}
  </form>
</main>
