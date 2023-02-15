<script>
	import IconPlus from "$lib/assets/IconPlus.svelte";
  import autoAnimate from "@formkit/auto-animate"

  export let question;
  export let answer;

  let active;
  let handleActive = () => {
    active = !active;
  }
</script>

<div class="info" role="button" on:click={handleActive} on:keydown={handleActive} tabindex="0" use:autoAnimate>
  <div class="question" class:active={active}>
    <h3>{question}</h3>
    <IconPlus/>
  </div>
  {#if active}
  <div class="answer">
    <p>{answer}</p>
  </div>
  {/if}
</div>

<style>
  .info {
    cursor: pointer;
  }
  .question {
    display: flex;
    align-items: center;
    border: 1px solid var(--subtle);
    padding: 17px 16px;
    height: 80px;
    transition: 250ms;
  }
  .question.active {
    border-color: #fff;
    transition: 125ms;
  }
  .question :global(svg) {
    margin-left: auto;
    margin-right: 8px;
    flex-shrink: 0;
    transition: 250ms;
  }
  .question.active :global(svg) {
    transform: rotate(45deg);
    transition: 125ms;
  }
  .answer {
    padding: 0 16px;
    border-left: 1px solid var(--feat);
    margin-top: 16px;
    margin-bottom: 16px;
  }
</style>