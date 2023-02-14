<script>
	import Intro from "$lib/Intro.svelte";
	import Info from "$lib/Info.svelte";
</script>

<Intro
  title="Conheça a academia que mais cresce na cidade!"
  content="Confira algumas das perguntas frequentes."
  img="exercicios"
  icon="weight"
  btn="Modalidades"
  href="/modalidades"
/>

<section class="faq">
  <div class="faq__wrapper wrap">
    <Info
      question="Quanto custa a mensalidade?"
      answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies arcu eu vehicula pellentesque. Ut nec faucibus magna. Sed sed vestibulum diam. Aliquam tristique ante vitae diam ultrices, ut viverra libero consectetur."
    />
  </div>
</section>

<style>
  .faq {
    margin-top: 60px;
  }
</style>