<script>
  import { page } from '$app/stores'
  import { modalidades } from '$lib/stores';
  
  let modalidade = $page.params.slug;
  
  let data = $modalidades.find(e => e.slug === modalidade);
</script>

<h1>{data.name}</h1>