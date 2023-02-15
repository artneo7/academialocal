<script>
  export let info
</script>

<a href="/modalidades/{info.slug}" class="card">
  <img src="{info.img}" alt="" width="120" height="120">
  <h2>{info.name}</h2>
</a>

<style>
  img {
    object-fit: cover;
    border-radius: 4px;
  }
  h2 {
    padding: 8px 16px;
  }
  .card {
    border: solid 1px var(--subtle);
    padding: 4px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    flex-basis: calc(50% - 10px);
  }
  a {
    color: #fff;
    transition: 250ms;
  }
  a:hover {
    border-color: #fff;
    transition: 125ms;
  }

  @media(max-width: 800px) {
    .card {
      flex-basis: 100%;
    }
  }
</style>