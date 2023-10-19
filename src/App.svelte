<script>
  import Lib1 from './lib/Lib1.svelte';
  import Lib2 from './lib/Lib2.svelte';

  import testsettings from './testsettings.js';

  setTimeout(() => {
    testsettings.set({
      a: "a",
      b: "b",
      c: "c"
    })
  }, 3000);

  $: if (testsettings) {
    console.log("testsettings?", $testsettings)
  }
</script>

<main>
  <Lib1 />
  <Lib2 />
</main>

<style>
</style>
