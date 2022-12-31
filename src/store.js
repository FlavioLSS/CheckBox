import { writable } from "svelte/store";

export const global = writable({
  user: {
    name: "",
    password: ""
  }
});
