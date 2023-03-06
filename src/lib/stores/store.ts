import { writable } from "svelte/store";

export const details = writable({
  title: "",
  gender: "",
  nin: "",
});
