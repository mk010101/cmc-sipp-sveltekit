<script lang="ts">
  import { fly } from 'svelte/transition';

  import { CmcButton, CmcCheck, CmcRangeBar } from '$lib/cmc-wc';
  import { goto } from '$app/navigation';
  import { customer } from '$lib/stores/store';
  CmcButton;
  CmcCheck;
  CmcRangeBar;

  function onSelect() {
    console.log($customer);
  }
</script>

<main>
  <cmc-range-bar hideValue hideLabels steps="4" value="2" min="0" max="4" />
  <h2>What's your gender?</h2>
  <cmc-check type="radio" variant="panel" shape="circle" name="gender" value="male" label="Male" />
  <cmc-check type="radio" variant="panel" shape="circle" name="gender" value="female" label="Female" />
  <form on:input={onSelect} />
</main>

<style>
  cmc-check {
    margin-bottom: 1rem;
  }
</style>
