<script lang="ts">
  import { fly } from "svelte/transition";
  import { onDestroy } from "svelte";
  //@ts-ignore
  import { CmcSelect, CmcButton, CmcTextarea, CmcTextfield } from "$lib/cmc-wc";
  import { goto } from "$app/navigation";
  CmcSelect;

  let selectedTitle = "";
  let disabled = true;

  const sel = new CmcSelect();

  function onSelect() {
    const el: CmcSelect | null = <CmcSelect | null>(
      document.querySelector("cmc-select")
    );

    const elTxt: CmcTextfield | null = <CmcTextfield | null>(
      document.querySelector("cmc-textfield")
    );
    disabled = true;
    if (!el) return;
    selectedTitle = el?.value;
    if (selectedTitle) {
      if (selectedTitle !== "other") {
        disabled = false;
      } else if (elTxt?.value.length > 1) {
        //selectedTitle = elTxt?.value;
        disabled = false;
      }
    }
    console.log(disabled, selectedTitle);
  }
</script>

<main>
  <h2>How should we address you?</h2>
  <p>Can you provide us with a title that can be used before your name?</p>
  <form on:input={onSelect}>
    <cmc-select placeholder="Select title">
      <option />
      <option value="dr">Dr</option>
      <option value="mr">Mr</option>
      <option value="mrs">Mrs</option>
      <option value="miss">Miss</option>
      <option value="ms">Ms</option>
      <option value="other">Other</option>
    </cmc-select>

    {#if /other/i.test(selectedTitle)}
      <p>
        <cmc-textfield placeholder="Title" />
      </p>
    {/if}
    {#if disabled}
      <cmc-button {disabled}>Continue</cmc-button>
    {:else}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <cmc-button on:click={() => goto("/step2")}>Continue</cmc-button>
    {/if}
  </form>
</main>
