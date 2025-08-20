<script lang="ts">
	import PlayerCard from "../../components/PlayerCard.svelte";

	const golmani = [
		{ name: "Ivan Razum", img: "" },
		{ name: "Lukas Jalušić", img: "" }
	];
	const obrana = [
		{ name: "Borna Armando Losso", img: "" },
		{ name: "Donat Senkić", img: "" },
		{ name: "Matej Krišto", img: "" },
		{ name: "Eduard Huseinec", img: "" },
		{ name: "Ivan Brtan", img: "" },
		{ name: "Vladimir Perić", img: "" },
		{ name: "Ivan Donald Galić", img: "" },
		{ name: "Ivan Novaković", img: "" }
	];
	const veznaLinija = [
		{ name: "Luka Kahlina", img: "" },
		{ name: "Ivan Jolić", img: "" },
		{ name: "Vito Bosnar", img: "" },
		{ name: "Adrian Zenko", img: "" },
		{ name: "Mihovil Rašić", img: "" },
		{ name: "Josip Matošević", img: "" },
		{ name: "Mateo Mandić", img: "" },
		{ name: "Tomo Razum", img: "" },
		{ name: "Fran Ivić", img: "" },
		{ name: "Fran Vukelić", img: "" },
		{ name: "Bruno Držić", img: "" }
	];
	const napadaci = [
		{ name: "Franko Knez", img: "" },
		{ name: "Borna Luketa", img: "" },
		{ name: "Dino Krajačić", img: "" },
		{ name: "Luka Mrakužić", img: "" }
	];
	const strucniStozer = [
		{ name: "Damir Grlić", img: "" },
		{ name: "Bojan Žiži", img: "" },
		{ name: "Filip Štefković", img: "" },
		{ name: "Aldin Dizdarević", img: "" }
	];
</script>

<svelte:head>
	<title>Momčad - GNK Tigar Sveta Nedelja</title>
	<meta name="title" content="Prva momčad - GNK Tigar Sveta Nedelja" />
	<meta
		name="description"
		content="Saznajte sve o prvoj momčadi GNK Tigar Sveta Nedelja. Pogledajte popis golmana, obrane, vezne linije, napadača i stručnog stožera kluba."
	/>
	<link rel="canonical" href="https://gnktigarsvetanedelja.hr/momcad" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://gnktigarsvetanedelja.hr/momcad" />
	<meta property="og:title" content="Prva momčad - GNK Tigar Sveta Nedelja" />
	<meta
		property="og:description"
		content="Golmani, obrana, vezna linija, napadači i stručni stožer GNK Tigar Sveta Nedelja."
	/>
	<meta
		property="og:image"
		content="https://woop14abphufecql.public.blob.vercel-storage.com/gnk/gnktigarnobglogo.png"
	/>
	<meta property="og:site_name" content="GNK Tigar Sveta Nedelja" />
	<meta property="og:locale" content="hr_HR" />

	<!-- Twitter / X -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://gnktigarsvetanedelja.hr/momcad" />
	<meta name="twitter:title" content="Prva momčad - GNK Tigar Sveta Nedelja" />
	<meta
		name="twitter:description"
		content="Popis igrača i stručnog stožera GNK Tigar Sveta Nedelja."
	/>
	<meta
		name="twitter:image"
		content="https://woop14abphufecql.public.blob.vercel-storage.com/gnk/gnktigarnobglogo.png"
	/>

	<!-- Additional SEO -->
	<meta
		name="keywords"
		content="GNK Tigar Sveta Nedelja, prva momčad, igrači, nogometni klub, golmani, obrana, vezna linija, napadači, stručni stožer, Sveta Nedelja"
	/>
	<meta name="author" content="GNK Tigar Sveta Nedelja" />
	<meta name="robots" content="index, follow" />

	<!-- Social Media Profiles -->
	<meta property="og:see_also" content="https://www.facebook.com/gnktigarsvetanedjelja/" />
	<meta property="og:see_also" content="https://www.instagram.com/gnk_tigar_sveta_nedelja/" />
</svelte:head>
<div
	class="3xl:px-98 flex h-full min-h-svh flex-col px-4 pb-16 transition-colors duration-300 ease-in md:px-48 dark:bg-gray-800"
>
	<h1 class="font-conthrax pt-8 text-4xl font-bold text-gray-700 uppercase dark:text-gray-50">
		Prva momčad
	</h1>
	<div class="pt-4">
		<h2
			class="border-primary font-conthrax border-l-4 pl-2 text-xl text-gray-600 uppercase dark:text-gray-100"
		>
			golmani
		</h2>
		<div class="mt-2 grid grid-cols-1 place-items-center gap-4 md:grid-cols-2">
			{#each golmani as golman, i (i)}
				<div class="pt-8">
					<PlayerCard name={golman.name} imageUrl={golman.img} />
				</div>
			{/each}
		</div>
	</div>
	<div class="pt-8">
		<h2
			class="border-primary font-conthrax border-l-4 pl-2 text-xl text-gray-600 uppercase dark:text-gray-100"
		>
			obrana
		</h2>
		<div class="mt-2 grid grid-cols-1 place-items-center gap-4 md:grid-cols-3">
			{#each obrana as branic, i (i)}
				<div class="pt-8">
					<PlayerCard name={branic.name} imageUrl={branic.img} />
				</div>
			{/each}
		</div>
	</div>
	<div class="pt-8">
		<h2
			class="border-primary font-conthrax border-l-4 pl-2 text-xl text-gray-600 uppercase dark:text-gray-100"
		>
			vezna linija
		</h2>
		<div class="mt-2 grid grid-cols-1 place-items-center gap-4 md:grid-cols-3">
			{#each veznaLinija as veznjak, i (i)}
				<div class="pt-8">
					<PlayerCard name={veznjak.name} imageUrl={veznjak.img} />
				</div>
			{/each}
		</div>
	</div>
	<div class="pt-8">
		<h2
			class="border-primary font-conthrax border-l-4 pl-2 text-xl text-gray-600 uppercase dark:text-gray-100"
		>
			napadači
		</h2>
		<div class="mt-2 grid grid-cols-1 place-items-center gap-4 md:grid-cols-3">
			{#each napadaci as napadac, i (i)}
				<div class="pt-8">
					<PlayerCard name={napadac.name} imageUrl={napadac.img} />
				</div>
			{/each}
		</div>
	</div>
	<div class="pt-8">
		<h2
			class="border-primary font-conthrax border-l-4 pl-2 text-xl text-gray-600 uppercase dark:text-gray-100"
		>
			stručni stožer i tehničko osoblje
		</h2>
		<div class="mt-2 grid grid-cols-1 place-items-center gap-4 md:grid-cols-3">
			{#each strucniStozer as stozer, i (i)}
				<div class="pt-8">
					<PlayerCard name={stozer.name} imageUrl={stozer.img} />
				</div>
			{/each}
		</div>
	</div>
</div>
