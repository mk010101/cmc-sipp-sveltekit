import { writable } from 'svelte/store';

export const customer = writable({
  title: '',
  other: '',
  gender: '',
  nin: ''
});
