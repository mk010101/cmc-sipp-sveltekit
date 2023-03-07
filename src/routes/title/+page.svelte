<script lang="ts">
  import { fly } from 'svelte/transition';

  //@ts-ignore
  import { CmcSelect, CmcButton, CmcTextfield, CmcRangeBar } from '$lib/cmc-wc';
  import { goto } from '$app/navigation';
  import { customer } from '$lib/stores/store';
  import { onMount, prevent_default } from 'svelte/internal';

  CmcSelect;
  CmcButton;

  let title = '';
  let other = '';

  const options = ['Dr', 'Mr', 'Mrs', 'Miss', 'Ms', 'Other'];

  let el: CmcSelect | null;
  let elTxt: CmcTextfield | null;

  function formInputHandler() {
    el = <CmcSelect | null>document.querySelector('cmc-select');
    elTxt = <CmcTextfield | null>document.querySelector('cmc-textfield');
    title = el?.value;
    other = elTxt?.value;
    if (title && title !== 'other') other = '';
    //console.log(title, other);

    //const title = selectedTitle && selectedTitle !== 'other' ? selectedTitle : elTxt?.value;

    customer.update((old) => {
      return { ...old, title, other };
    });
    //console.log($customer);
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
  <form on:input={formInputHandler} on:submit={goNext}>
    <cmc-select placeholder="Select title" value={$customer.title} name="title">
      <option />
      {#each options as opt}
        <option value={opt.toLowerCase()}>{opt}</option>
      {/each}
    </cmc-select>

    {#if /other/i.test($customer.title)}
      <p>
        <cmc-textfield placeholder="Title" name="other" value={$customer.other || ''} />
      </p>
    {/if}
    {#if !$customer.title || ($customer.title === 'other' && !$customer.other)}
      <cmc-button disabled>Continue</cmc-button>
    {:else}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <cmc-button role="button" on:click={goNext}>Continue</cmc-button>
    {/if}
  </form>
</main>
