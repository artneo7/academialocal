<script>
	import IconPlus from "$lib/assets/IconPlus.svelte";

  export let question;
  export let answer;
</script>

<div class="info">
  <div class="question">
    <h3>{question}</h3>
    <IconPlus/>
  </div>
  <div class="answer">
    <p>{answer}</p>
  </div>
</div>

<style>
  .question {
    display: flex;
    align-items: center;
    border: 1px solid var(--subtle);
    padding: 17px 16px;
  }
  .question :global(svg) {
    margin-left: auto;
    margin-right: 8px;
  }
  .answer {
    padding: 0 16px;
    border-left: 1px solid var(--feat);
    margin-top: 16px;
  }
</style>