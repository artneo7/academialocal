<script>
  import { page } from '$app/stores'
  import { modalidades } from '$lib/stores';
	import IntroSingle from '$lib/IntroSingle.svelte';
  
  let modalidade = $page.params.slug;
  
  let data = $modalidades.find(e => e.slug === modalidade);
</script>

<IntroSingle data={data} />