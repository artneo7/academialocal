<script>
  import '../global.css'
  import "@fontsource/roboto-condensed"
  import "@fontsource/roboto-condensed/700.css"
  import "@fontsource/cabin"
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Header/>
<slot/>
<Footer/>