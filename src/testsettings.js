import { writable } from 'svelte/store';

const store = () => {
  const state = {
    a: "1",
    b: "2",
    c: "3"
  };
  
  const { subscribe, set, update } = writable(state);

  setTimeout(() => {
    set({
      a: "6",
      b: "7",
      c: "8"
    })
  }, 6000);
  
  return {
    subscribe,
    set
  };
}

export default store()