<script>
	import Intro from "$lib/Intro.svelte";
	import Info from "$lib/Info.svelte";
	import Seo from "$lib/Seo.svelte";
</script>

<Seo
  name="Sobre"
  description="A Academia Local fica pertinho de você com várias modalidades para escolher!"
/>

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
    <Info
      question="Posso utilizar quantos dia da semana?"
      answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies arcu eu vehicula pellentesque. Ut nec faucibus magna. Sed sed vestibulum diam. Aliquam tristique ante vitae diam ultrices, ut viverra libero consectetur."
    />
    <Info
      question="Quantas modalidades estão disponíveis"
      answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies arcu eu vehicula pellentesque. Ut nec faucibus magna. Sed sed vestibulum diam. Aliquam tristique ante vitae diam ultrices, ut viverra libero consectetur."
    />
  </div>
</section>

<style>
  .faq {
    margin-top: 60px;
  }
  .faq__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  @media(max-width: 800px) {
    .faq__wrapper {
      grid-template-columns: 1fr;
    }
  }
</style>