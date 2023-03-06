<script lang="ts">
  import { fly } from 'svelte/transition';
  import { onDestroy } from 'svelte';
  //@ts-ignore
  import { CmcSelect, CmcButton, CmcTextarea, CmcTextfield } from '$lib/cmc-wc';
  import { goto } from '$app/navigation';
  import { customer } from '$lib/stores/store';
  CmcSelect;

  console.log($customer);
  let selectedTitle = '';

  const sel = new CmcSelect();
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
  let selected: string = '';
</script>

<main>
  <h2>How should we address you?</h2>
  <p>Can you provide us with a title that can be used before your name?</p>
  <form on:input={onSelect}>
    <cmc-select placeholder="Select title" value={$customer.title || ''}>
      <option />
      {#each options as opt}
        <option value={opt.toLowerCase()}>{opt}</option>
      {/each}
    </cmc-select>

    {#if /other/i.test(selectedTitle)}
      <p>
        <cmc-textfield placeholder="Title" />
      </p>
    {/if}
    {#if !$customer.title}
      <cmc-button disabled>Continue</cmc-button>
    {:else}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <cmc-button on:click={() => goto('/step2')}>Continue</cmc-button>
    {/if}
  </form>
</main>
