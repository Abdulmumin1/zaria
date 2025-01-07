<script>
	import '../app.css';
	import { onMount } from 'svelte';

	let { children } = $props();
	import {page} from '$app/stores'
	let navLinks = [
		{ name: 'Home', href: '/' },
		// { name: 'Government', href: '/government', dropdown: true },
		{ name: 'Businesses', href: '/businesses' },
		{ name: 'Newsroom', href: '/newsroom' },
		{ name: 'Events', href: '/events' },
		{ name: 'Gallery', href: '/gallery' }
	];

	let isMobileMenuOpen = $state(false); // State for mobile menu visibility

  // Close mobile menu when resizing to desktop
  onMount(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        isMobileMenuOpen = false;
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  $effect(()=>{
	console.log($page.url.pathname)
  })

  function changeLanguage(lang) {
    const select = document.querySelector('.goog-te-combo');
	console.log(select)
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event('change'));
    }
  }

  // Supported languages
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ha', name: 'Hausa', flag: '🇳🇬' },
    { code: 'yo', name: 'Yoruba', flag: '🇳🇬' },
    { code: 'ig', name: 'Igbo', flag: '🇳🇬' },
  ];
</script>

<div class="flex bg-primary/10 px-2 justify-between items-center">
	<h4 class="text-base font-semibold">Change Language</h4>
	<div class="language-switcher mx-auto">
		{#each languages as lang}
		  <button onclick={() => changeLanguage(lang.code)} class="text-xs">
			{lang.flag} {lang.name}
		  </button>
		{/each}
	  </div>
</div>
<header class="bg-white shadow-sm">
	<div class="container mx-auto flex items-center justify-between py-4 px-4">
	  <!-- Logo -->
	  <div class="flex items-center">
		<img src="/logo.png" alt="Logo" class="h-8" />
	  </div>
  
	  <!-- Hamburger Menu (Mobile) -->
	  <button
		class="md:hidden text-primary focus:outline-none"
		onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}
	  >
		<svg
		  xmlns="http://www.w3.org/2000/svg"
		  fill="none"
		  viewBox="0 0 24 24"
		  stroke-width="2"
		  stroke="currentColor"
		  class="h-6 w-6"
		>
		  <path
			stroke-linecap="round"
			stroke-linejoin="round"
			d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
		  />
		</svg>
	  </button>
  
	  <!-- Navigation (Desktop) -->
	  <nav class="hidden md:flex space-x-6 text-sm font-medium">
		{#each navLinks as { name, href, dropdown }}
		  <div class="relative">
			<a
			  {href}
			  class={`hover:text-primary ${
				href == $page.url.pathname ? 'border-b-2 border-primary text-primary' : ''
				}`}
			>
			  {name}
			</a>
			{#if dropdown}
			  <!-- Dropdown Icon -->
			  <span class="ml-1">▼</span>
			{/if}
		  </div>
		  
		{/each}
		
		  
		<!-- <div id="google_translate_element"></div> -->
	  </nav>
  
	  <!-- Search Icon -->
	  <div class="hidden md:flex items-center">
		<button class="text-primary">
		  <svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
			class="h-6 w-6"
		  >
			<path
			  stroke-linecap="round"
			  stroke-linejoin="round"
			  d="M21 21l-4.35-4.35m-5.65 1.85a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
			/>
		  </svg>
		</button>
	  </div>
	</div>
  
	<!-- Mobile Menu (Dropdown) -->
	{#if isMobileMenuOpen}
	  <div class="md:hidden bg-white shadow-sm">
		<nav class="flex flex-col space-y-4 p-4 text-sm font-medium">
		  {#each navLinks as { name, href, active, dropdown }}
			<a
			  {href}
			  class={`hover:text-primary ${
				href == $page.url.pathname ? 'border-b-2 border-primary text-primary' : ''
			  }`}
			>
			  {name}
			</a>
		  {/each}
		</nav>
	  </div>
	{/if}
</header>


{@render children()}

<style>

  .language-switcher {
    display: flex;
    gap: 10px;
    margin: 5px;
  }
  .language-switcher button {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #fff;
    cursor: pointer;
  }
  .language-switcher button:hover {
    background: #f0f0f0;
  }
</style>
