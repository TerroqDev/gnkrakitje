<script lang="ts">
	import { page } from "$app/stores";
	import { browser } from "$app/environment";
	import { onMount } from "svelte";
	import type { NavItems } from "../types/navitems";
	$: if (browser) document.body.classList.toggle("noscroll", isMenuOpen);
	$: href = $page.url.pathname;

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
	let darkMode: boolean = false;
	function setTheme(theme: "light" | "dark" | "system") {
		if (theme === "system") {
			localStorage.removeItem("theme");
		} else {
			localStorage.setItem("theme", theme);
		}

		document.documentElement.classList.toggle(
			"dark",
			localStorage.getItem("theme") === "dark" ||
				(!localStorage.getItem("theme") &&
					window.matchMedia("(prefers-color-scheme: dark)").matches)
		);

		darkMode = document.documentElement.classList.contains("dark");
	}

	onMount(() => {
		setTheme((localStorage.getItem("theme") as "light" | "dark" | "system") || "system");
	});
	const navItems: NavItems[] = [
		{ name: "vijesti", link: "vijesti" },
		{ name: "momcad", link: "momcad" },
		{ name: "o klubu", link: "o_klubu" },
		{ name: "natjecanje", link: "natjecanje" },
		{ name: "akademija", link: "akademija" },
		{ name: "kontakt", link: "kontakt" }
	];
</script>

<nav class="font-conthrax border-primary border-b px-4 md:px-16 dark:bg-gray-800">
	<div class="flex w-full items-center justify-between">
		<a
			href="/"
			class="text-primary z-20 min-w-24 px-4 text-lg dark:text-gray-50"
			on:click={() => (isMenuOpen = false)}
		>
			<img
				class="full max-h-12"
				src="https://woop14abphufecql.public.blob.vercel-storage.com/gnk/gnktigarnobglogo.png"
				alt="Logo"
			/>
		</a>
		<div
			class="text-text md:text-md z-20 hidden tracking-widest uppercase md:max-[4200px]:block dark:text-gray-50"
		>
			<ul class="flex h-full">
				{#each navItems as item (item.name)}
					<li class="px-2 py-6">
						<a
							href="/{item.link}"
							class={`transition-all duration-300 ease-in hover:text-gray-700 ${
								href.includes(item.name) ? "underline" : ""
							}`}>{item.name}</a
						>
					</li>
				{/each}
				<li>
					<!-- svelte-ignore a11y_consider_explicit_label -->
					<button
						class="h-full w-6 hover:cursor-pointer"
						on:click={() => (darkMode ? setTheme("light") : setTheme("dark"))}
					>
						{#if darkMode}
							<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
								><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
									id="SVGRepo_tracerCarrier"
									stroke-linecap="round"
									stroke-linejoin="round"
								></g><g id="SVGRepo_iconCarrier">
									<path
										d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
										fill="#fff200"
									></path>
								</g></svg
							>
						{:else}
							<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
								><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
									id="SVGRepo_tracerCarrier"
									stroke-linecap="round"
									stroke-linejoin="round"
								></g><g id="SVGRepo_iconCarrier">
									<path
										d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
										fill="#010104"
									></path>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM19.25 12C19.25 11.5858 19.5858 11.25 20 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20C19.5858 12.75 19.25 12.4142 19.25 12ZM12 19.25C12.4142 19.25 12.75 19.5858 12.75 20V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20C11.25 19.5858 11.5858 19.25 12 19.25Z"
										fill="#010104"
									></path>
									<g opacity="0.5">
										<path
											d="M3.66919 3.7156C3.94869 3.4099 4.42309 3.38867 4.72879 3.66817L6.95081 5.69975C7.25651 5.97925 7.27774 6.45365 6.99824 6.75935C6.71874 7.06505 6.24434 7.08629 5.93865 6.80679L3.71663 4.7752C3.41093 4.4957 3.38969 4.0213 3.66919 3.7156Z"
											fill="#010104"
										></path>
										<path
											d="M20.3319 3.7156C20.6114 4.0213 20.5902 4.4957 20.2845 4.7752L18.0624 6.80679C17.7567 7.08629 17.2823 7.06505 17.0028 6.75935C16.7233 6.45365 16.7446 5.97925 17.0503 5.69975L19.2723 3.66817C19.578 3.38867 20.0524 3.4099 20.3319 3.7156Z"
											fill="#010104"
										></path>
										<path
											d="M17.0261 17.0247C17.319 16.7318 17.7938 16.7319 18.0867 17.0248L20.3087 19.2471C20.6016 19.54 20.6016 20.0148 20.3087 20.3077C20.0158 20.6006 19.5409 20.6006 19.248 20.3076L17.026 18.0854C16.7331 17.7924 16.7332 17.3176 17.0261 17.0247Z"
											fill="#010104"
										></path>
										<path
											d="M6.97521 17.0249C7.2681 17.3177 7.2681 17.7926 6.97521 18.0855L4.75299 20.3077C4.46009 20.6006 3.98522 20.6006 3.69233 20.3077C3.39943 20.0148 3.39943 19.54 3.69233 19.2471L5.91455 17.0248C6.20744 16.732 6.68232 16.732 6.97521 17.0249Z"
											fill="#010104"
										></path>
									</g>
								</g></svg
							>
						{/if}
					</button>
				</li>
			</ul>
		</div>
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<button
			name="Contact call to action"
			class={`text-textcol relative top-0 right-0 z-50 m-4 flex h-10 w-10 focus:outline-none md:hidden ${isMenuOpen ? "fixed" : "fixed"}`}
			on:click={toggleMenu}
		>
			<div class="absolute top-1/2 left-1/2 w-5 -translate-x-1/2 -translate-y-1/2 transform">
				<span
					class={`absolute bg-text dark:bg-gray-50 h-0.5 w-5 transform transition duration-300 ease-in-out ${
						isMenuOpen ? "rotate-45 delay-200 dark:bg-gray-700" : "-translate-y-1.5"
					}`}
				></span>
				<span
					class={`bg-text dark:bg-gray-50 absolute h-0.5 transform transition-all duration-200 ease-in-out ${
						isMenuOpen ? "w-0 opacity-50" : "w-5 opacity-100 delay-200"
					}`}
				></span>
				<span
					class={`absolute bg-text dark:bg-gray-50 h-0.5 w-5 transform transition duration-300 ease-in-out ${
						isMenuOpen ? "-rotate-45 delay-200 dark:bg-gray-700" : "translate-y-1.5"
					}`}
				></span>
			</div>
		</button>
	</div>

	<nav
		class={`bg-gray-50 dark:bg-gray-800 bg-opacity-100 fixed top-0 left-0 z-40 flex h-screen w-full transform transition-all delay-100 duration-500 ${
			isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
		}`}
	>
		<ul class="z-50 flex w-5/6 flex-col justify-center text-center align-middle text-gray-700 dark:text-gray-50">
			{#each navItems as item (item.name)}
				<li
					class="border-primary my-2 flex w-full border-r-6 px-4 py-2 text-2xl font-bold tracking-widest uppercase"
				>
					<a on:click={() => (isMenuOpen = false)} href="/{item.link}">{item.name} </a>
				</li>
			{/each}
            <li>
					<!-- svelte-ignore a11y_consider_explicit_label -->
					<button
						class="h-full w-10 hover:cursor-pointer"
						on:click={() => (darkMode ? setTheme("light") : setTheme("dark"))}
					>
						{#if darkMode}
							<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
								><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
									id="SVGRepo_tracerCarrier"
									stroke-linecap="round"
									stroke-linejoin="round"
								></g><g id="SVGRepo_iconCarrier">
									<path
										d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
										fill="#fff200"
									></path>
								</g></svg
							>
						{:else}
							<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
								><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
									id="SVGRepo_tracerCarrier"
									stroke-linecap="round"
									stroke-linejoin="round"
								></g><g id="SVGRepo_iconCarrier">
									<path
										d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
										fill="#010104"
									></path>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM19.25 12C19.25 11.5858 19.5858 11.25 20 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20C19.5858 12.75 19.25 12.4142 19.25 12ZM12 19.25C12.4142 19.25 12.75 19.5858 12.75 20V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20C11.25 19.5858 11.5858 19.25 12 19.25Z"
										fill="#010104"
									></path>
									<g opacity="0.5">
										<path
											d="M3.66919 3.7156C3.94869 3.4099 4.42309 3.38867 4.72879 3.66817L6.95081 5.69975C7.25651 5.97925 7.27774 6.45365 6.99824 6.75935C6.71874 7.06505 6.24434 7.08629 5.93865 6.80679L3.71663 4.7752C3.41093 4.4957 3.38969 4.0213 3.66919 3.7156Z"
											fill="#010104"
										></path>
										<path
											d="M20.3319 3.7156C20.6114 4.0213 20.5902 4.4957 20.2845 4.7752L18.0624 6.80679C17.7567 7.08629 17.2823 7.06505 17.0028 6.75935C16.7233 6.45365 16.7446 5.97925 17.0503 5.69975L19.2723 3.66817C19.578 3.38867 20.0524 3.4099 20.3319 3.7156Z"
											fill="#010104"
										></path>
										<path
											d="M17.0261 17.0247C17.319 16.7318 17.7938 16.7319 18.0867 17.0248L20.3087 19.2471C20.6016 19.54 20.6016 20.0148 20.3087 20.3077C20.0158 20.6006 19.5409 20.6006 19.248 20.3076L17.026 18.0854C16.7331 17.7924 16.7332 17.3176 17.0261 17.0247Z"
											fill="#010104"
										></path>
										<path
											d="M6.97521 17.0249C7.2681 17.3177 7.2681 17.7926 6.97521 18.0855L4.75299 20.3077C4.46009 20.6006 3.98522 20.6006 3.69233 20.3077C3.39943 20.0148 3.39943 19.54 3.69233 19.2471L5.91455 17.0248C6.20744 16.732 6.68232 16.732 6.97521 17.0249Z"
											fill="#010104"
										></path>
									</g>
								</g></svg
							>
						{/if}
					</button>
            </li>
		</ul>
		<div class="bottom-0 flex flex-col justify-center bg-white py-10">
			<a
				href="/"
				class="text-primary z-20 min-w-24 px-4 text-xl"
				on:click={() => (isMenuOpen = false)}
			>
				<img
					class=""
					src="https://woop14abphufecql.public.blob.vercel-storage.com/gnk/gnktigarnobglogo.png"
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
