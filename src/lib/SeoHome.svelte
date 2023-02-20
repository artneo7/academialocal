<script>
  export let description;
  
  let siteName = 'Academia Local';
  let separator = ' – '
</script>

<svelte:head>
  <title>{siteName}{separator}A academia pertinho de você!</title>
  <meta name="description" content="{description}">
</svelte:head>