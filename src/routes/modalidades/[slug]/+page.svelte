<script>
  import { page } from '$app/stores'
  import { modalidades } from '$lib/stores';
	import IntroSingle from '$lib/IntroSingle.svelte';
	import Card from '$lib/Card.svelte';
  
  let modalidade = $page.params.slug;
  
  // let data = $modalidades.find(e => e.slug === modalidade);
  export let data;
  console.log(data);
</script>

<IntroSingle data={data} />

<section class="related">
  <div class="related__wrapper wrap">
    <h3>Outras modalidades:</h3>
    
    <div class="list">
      {#each $modalidades as info}
        <Card info={info} />
      {/each}
    </div>
  </div>
</section>

<style>
  .related {
    margin-top: 40px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-top: 16px;
  }
</style>