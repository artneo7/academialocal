<script>
  import Intro from '$lib/Intro.svelte';
	import Card from '$lib/Card.svelte';
  import { modalidades } from '$lib/stores';
</script>

<Intro
  title="Temos a modalidade certa para você"
  content="Descubra as diversas modalidades da nossa academia."
  img="alongamento"
  icon="weight"
/>

<section class="modalidades">
  <div class="modalidades__wrapper wrap">
    {#each $modalidades as modalidade}
      <Card info={modalidade} />
    {/each}
  </div>
</section>