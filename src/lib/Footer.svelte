<script>
  import img from '$lib/assets/crossfit.jpg';
</script>

<footer class="footer">
  <div class="footer__wrapper wrap">
    <div class="footer__img">
      <img src="{img}" alt="">
    </div>
    <div class="footer__info">
      <h2>Venha fazer seu<br> primeiro treino grátis</h2>
      <p>Entre em contato via WhatsApp ou e-mail e fale com um treinador especialista da equipe.</p>
      <div class="footer__btns">
        <a href="https://api.whatsapp.com/send?phone=5519987654321" class="btn">WhatsApp</a>
        <a href="mailto:teste@teste.com.br" class="btn">E-mail</a>
      </div>
    </div>
  </div>

  <div class="credits">
    <div class="credits__wrapper wrap">
      <span>© Academia Local, 2023</span>
    </div>
  </div>
</footer>

<style>
  .footer {
    margin-top: 90px;
  }
  .footer__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    align-items: center;
  }
  .footer__img {
    position: relative;
  }
  .footer__img::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: var(--overlay);
  }
  img {
    border-radius: 16px;
  }
  p {
    margin-top: 16px;
    max-width: 360px;
  }
  h2 {
    font-size: calc(36 / 16 * 1rem);
  }
  .footer__btns {
    margin-top: 24px;
    display: flex;
    gap: 8px;
  }
  .credits {
    margin-top: 60px;
  }
  .credits__wrapper::before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--subtle);
  }
  span {
    display: inline-block;
    font-size: calc(14 / 16 * 1rem);
    padding-top: 24px;
    padding-bottom: 24px;
  }
</style>