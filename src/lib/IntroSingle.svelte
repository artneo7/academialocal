<script>
  export let data;
</script>

<div class="intro">
  <div class="intro__wrapper wrap">
    <div class="intro__info">
      <h1>{data.name}</h1>
      <p>{data.content}</p>
    </div>
    <div class="intro__img">
      <img src="{data.img}" alt="">
    </div>
  </div>
</div>

<style>
  .intro__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    align-items: center;
  }
  .intro__img {
    margin-right: -20px;
    position: relative;
  }
  .intro__img::before {
    content: '';
    display: block;
    position: absolute;
    inset: 0;
    background-color: var(--overlay);
    border-radius: 0 0 0 8px;
  }
  img {
    border-radius: 0 0 0 8px;
    height: 360px;
    object-fit: cover;
  }
  p {
    font-size: calc(18 / 16 * 1rem);
    margin-top: 8px;
  }
</style>