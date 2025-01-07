<script>
	import Footer from "$lib/components/footer.svelte";
import Hero from "$lib/components/landing/hero.svelte";
	import News from "$lib/components/landing/news.svelte";
	import Services from "$lib/components/landing/services.svelte";
	import Stats from "$lib/components/landing/stats.svelte";
	import Transport from "$lib/components/landing/transport.svelte";

</script>

<Hero/>
<img src="/image.png" height="300" class="overflow-hidden brightness-50 h-64 w-full object-cover" alt="">
<Stats/>
<Services/>
<Transport/>
<News/>
<Footer/>