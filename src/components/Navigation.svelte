<script lang="ts">
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import type { NavItems } from '../types/navitems';
	$: if (browser) document.body.classList.toggle('noscroll', isMenuOpen);
	$: href = $page.url.pathname;

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	const navItems: NavItems[] = [
		{ name: 'vijesti', link: 'vijesti' },
		{ name: 'momcad', link: 'momcad' },
		{ name: 'o klubu', link: 'o_klubu' },
		{ name: 'natjecanje', link: 'natjecanje' },
		{ name: 'akademija', link: 'akademija' },
		{ name: 'kontakt', link: 'kontakt' }
	];
</script>

<nav class="font-conthrax border-b border-yellow-400 px-4 md:px-16">
	<div class="flex w-full items-center justify-between">
		<a
			href="/"
			class="text-primary z-20 min-w-24 px-4 text-lg"
			on:click={() => (isMenuOpen = false)}
		>
			<img
				class="full max-h-12"
				src="https://woop14abphufecql.public.blob.vercel-storage.com/gnk/gnk%20tigar%20sveta%20nedelja_logo.pdf-image-001-dTebxHxyBMMVrUSU11ViJlgGeHYfpf.png"
				alt="Logo"
			/>
		</a>
		<div class="text-text md:text-md z-20 hidden tracking-widest uppercase md:max-[4200px]:block">
			<ul class="flex h-full">
				{#each navItems as item}
					<li class="px-2 py-6">
						<a
							href="/{item.link}"
							class={`transition-all duration-300 ease-in hover:text-gray-700 ${
								href.includes(item.name) ? 'underline' : ''
							}`}>{item.name}</a
						>
					</li>
				{/each}
			</ul>
		</div>
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<button
			name="Contact call to action"
			class={`text-textcol relative top-0 right-0 z-50 m-4 flex h-10 w-10 focus:outline-none md:hidden ${isMenuOpen ? 'fixed' : 'fixed'}`}
			on:click={toggleMenu}
		>
			<div class="absolute top-1/2 left-1/2 w-5 -translate-x-1/2 -translate-y-1/2 transform">
				<span
					class={`absolute h-0.5 w-5 transform transition duration-300 ease-in-out ${
						isMenuOpen ? 'bg-text  rotate-45 delay-200' : 'bg-text -translate-y-1.5'
					}`}
				></span>
				<span
					class={`bg-text absolute h-0.5 transform transition-all duration-200 ease-in-out ${
						isMenuOpen ? 'w-0 opacity-50' : 'w-5 opacity-100 delay-200'
					}`}
				></span>
				<span
					class={`absolute h-0.5 w-5 transform transition duration-300 ease-in-out ${
						isMenuOpen ? 'bg-text -rotate-45 delay-200' : 'bg-text translate-y-1.5'
					}`}
				></span>
			</div>
		</button>
	</div>

	<nav
		class={`bg-text bg-opacity-100 fixed top-0 left-0 z-40 flex h-screen w-full transform transition-all delay-100 duration-500 ${
			isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
		}`}
	>
		<ul class="z-50 flex w-5/6 flex-col justify-center text-center align-middle text-gray-50">
			{#each navItems as item}
				<li
					class="border-primary my-2 flex w-full border-r-6 px-4 py-2 text-2xl font-bold tracking-widest uppercase"
				>
					<a on:click={() => (isMenuOpen = false)} href="/{item.link}">{item.name} </a>
				</li>
			{/each}
		</ul>
		<div class="bottom-0 flex flex-col justify-center bg-white py-10">
			<a
				href="/"
				class="text-primary z-20 min-w-24 px-4 text-xl"
				on:click={() => (isMenuOpen = false)}
			>
				<img
					class=""
					src="https://woop14abphufecql.public.blob.vercel-storage.com/gnk/gnk%20tigar%20sveta%20nedelja_logo.pdf-image-001-dTebxHxyBMMVrUSU11ViJlgGeHYfpf.png"
					alt="Logo"
				/>
			</a>
			<a href="/" class="text-primary z-20 p-10" on:click={() => (isMenuOpen = false)}>
				<img
					class=""
					src="https://woop14abphufecql.public.blob.vercel-storage.com/gnk/0000050025-rOGLPB3PGnCZilsVx3ykbyH01MQRd9.png"
					alt="Logo"
				/>
			</a>
		</div>
	</nav>
</nav>
