<script lang="ts">
	import NewsCard from "../components/NewsCard.svelte";
	import Button from "../components/Button.svelte";
	import LeagueTable from "../components/LeagueTable.svelte";
	import { onMount } from "svelte";
	import LoadingSpinner from "../components/LoadingSpinner.svelte";

	let leagueData: any = null;

	let sponzorLista = [
		{
			name: "Golf Fasade",
			light: "https://golf-fasade.hr/wp-content/uploads/2022/07/logo-znak.png",
			dark: "https://woop14abphufecql.public.blob.vercel-storage.com/gnk/partneri/golf-fasade-white-01oBqHyvRx7QQMtVjHVLdiDeplQiCU.png"
		},
		{
			name: "JID Electric",
			light: "https://jidelectric.hr/wp-content/uploads/2020/07/jid-logo-v2-200.png",
			dark: "https://woop14abphufecql.public.blob.vercel-storage.com/gnk/partneri/jid-darkmode.png"
		},
		{
			name: "Texo",
			light: "https://www.texo.hr/wp-content/uploads/2025/02/texo-logo.png",
			dark: "https://www.texo.hr/wp-content/uploads/2025/02/texo-logo.png"
		}
	];

	onMount(async () => {
        try {
            const data = await fetch("/api/table");
            leagueData = await data.json();
        }catch(err){
            console.log(err)
        }
	});
</script>

<svelte:head>
	<title>GNK Tigar Sveta Nedelja - Pocetna</title>
	<meta name="title" content="GNK Tigar Sveta Nedelja" />
	<meta
		name="description"
		content="GNK Tigar Sveta Nedelja je nogometni klub iz Svete Nedelje, Hrvatska. Pratite vijesti, raspored utakmica, rezultate i obavijesti."
	/>
	<link rel="canonical" href="https://gnktigarsvetanedelja.hr/" />
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://gnktigarsvetanedelja.hr/" />
	<meta property="og:title" content="GNK Tigar Sveta Nedelja" />
	<meta
		name="og:description"
		content="GNK Tigar Sveta Nedelja je nogometni klub iz Svete Nedelje, Hrvatska. Pratite vijesti, raspored utakmica, rezultate i obavijesti."
	/>

	<meta
		property="og:image"
		content="https://woop14abphufecql.public.blob.vercel-storage.com/gnk/gnktigarnobglogo.png"
	/>
	<meta property="og:site_name" content="GNK Tigar Sveta Nedelja" />
	<meta property="og:locale" content="hr_HR" />

	<!-- Twitter / X -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://gnktigarsvetanedelja.hr/" />
	<meta name="twitter:title" content="GNK Tigar Sveta Nedelja" />
	<meta
		name="twitter:image"
		content="https://woop14abphufecql.public.blob.vercel-storage.com/gnk/gnktigarnobglogo.png"
	/>

	<meta
		name="twitter:description"
		content="GNK Tigar Sveta Nedelja je nogometni klub iz Svete Nedelje, Hrvatska. Pratite vijesti, raspored utakmica, rezultate i obavijesti."
	/>

	<!-- Additional SEO -->
	<meta
		name="keywords"
		content="GNK Tigar Sveta Nedelja, nogometni klub, Croatia, nogomet, Sveta Nedelja, utakmice, rezultati, raspored"
	/>
	<meta name="author" content="GNK Tigar Sveta Nedelja" />
	<meta name="robots" content="index, follow" />

	<!-- Social Media Profiles -->
	<meta property="og:see_also" content="https://www.facebook.com/gnktigarsvetanedjelja/" />
	<meta property="og:see_also" content="https://www.instagram.com/gnk_tigar_sveta_nedelja/" />
</svelte:head>

<div
	class="font-roboto flex min-h-screen flex-col transition-colors duration-300 ease-in dark:bg-gray-800"
>
	<div class="relative w-full overflow-hidden pb-8 md:pb-16">
		<div class="absolute inset-0 flex items-center justify-center">
			<span
				class="pointer-events-none px-4 text-center text-9xl font-extrabold tracking-widest text-gray-200 opacity-15 select-none dark:text-gray-800/20"
			>
				GNK TIGAR SVETA NEDJELJA
			</span>
		</div>
		<div
			class="font-roboto z-10 flex h-full w-full flex-col justify-center px-4 pt-8 md:px-48 md:pt-16"
		>
			<h1 class="w-full text-center text-gray-600 md:text-lg dark:text-gray-100">
				SuperSport HNL 2024-2025 - <span class="font-bold">31. kolo</span>
			</h1>
			<h1
				class="text-text font-conthrax w-full pt-2 text-center text-xl font-bold md:text-3xl dark:text-gray-50"
			>
				PETAK 01.01.2026. - 21:00
			</h1>
			<div class="grid grid-cols-2 pt-6 md:pt-8">
				<div class="flex flex-col items-center justify-center">
					<img
						class="h-48 w-48"
						src="https://woop14abphufecql.public.blob.vercel-storage.com/gnk/gnktigarnobglogo.png"
						alt="Tigar Rakitje"
					/>
					<div>
						<h2 class="text-text text-center font-bold md:text-xl dark:text-gray-50">
							GNK TIGAR SVETA NEDJELJA
						</h2>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center">
					<img
						class="h-48 w-48 p-5"
						src="https://dinamo.blob.core.windows.net/dinamo/Repository/2015/8/dinamo_grb_logo_200_200x200.png"
						alt="Tigar Rakitje"
					/>
					<h2 class="text-text text-center font-bold md:text-xl dark:text-gray-50">GNK DINAMO</h2>
				</div>
			</div>
			<div class="z-30 flex justify-center pt-6">
				<Button>KUPI ULAZNICU</Button>
			</div>
		</div>
	</div>
	<div class="bg-gray-100 pb-16 md:pb-28 dark:bg-gray-900">
		<h1 class="font-conthrax pt-8 pb-4 text-center text-3xl md:pt-16 md:text-4xl dark:text-gray-50">
			Partneri
		</h1>
		<div class="flex justify-center gap-2 px-4 md:gap-16">
			{#each sponzorLista as sponzor, index (index)}
				<div class="flex h-20 w-32 items-center justify-center md:h-40 md:w-64 dark:hidden">
					<img
						class="max-h-full max-w-full object-contain"
						src={sponzor.light}
						alt={sponzor.name}
					/>
				</div>

				<div class="hidden h-20 w-32 items-center justify-center md:h-40 md:w-64 dark:flex">
					<img class="max-h-full max-w-full object-contain" src={sponzor.dark} alt={sponzor.name} />
				</div>
			{/each}
		</div>
	</div>
	<!-- <div class="3xl:px-98 pt-8 md:px-48 md:pt-16"> -->
	<!-- 	{#if leagueData} -->
	<!-- 		<LeagueTable leagueTableData={leagueData} /> -->
	<!-- 	{:else} -->
	<!-- 		<div class="flex justify-center pt-8"> -->
	<!-- 			<LoadingSpinner /> -->
	<!-- 		</div> -->
	<!-- 	{/if} -->
	<!-- </div> -->
	<div class="3xl:px-98 flex flex-col gap-4 px-4 pt-8 pb-8 md:flex-row md:px-48 md:pb-16">
		<div class="h-full flex-1">
			<NewsCard
				name="GNK Tigar Sveta Nedelja vs NK Bistra"
				imageUrl="https://dinamo.blob.core.windows.net/dinamo/PXL_170425_131401707_ec1ca1c0-c0d6-46ae-9cf7-66635961e4de_800x533.jpg"
				tag="Najava"
				date="22.04.2025."
			/>
		</div>
		<div class="h-full flex-1">
			<NewsCard
				name="GNK Tigar Sveta Nedelja vs NK Lucko"
				imageUrl="https://nk-rijeka.hr/wp-content/uploads/2025/04/istra1904-19-1536x768.jpg"
				tag="Najava"
				date="22.04.2025."
			/>
		</div>
		<div class="h-full flex-1">
			<NewsCard
				name="GNK Tigar Sveta Nedelja vs NK Samobor"
				imageUrl="https://dinamo.blob.core.windows.net/dinamo/IMG_6276_85aa0c5b-66c0-40bf-9458-8d20bbd8bf66_800x533.jpeg"
				tag="Najava"
				date="22.04.2025."
			/>
		</div>
	</div>
</div>
<div class="flex flex-col gap-2 md:flex-row dark:bg-gray-700">
	<div class="flex w-full flex-col justify-center align-middle md:px-4">
		<h1 class="font-conthrax px-4 pt-8 text-2xl text-yellow-300 md:pt-0 md:text-3xl">
			GNK SVETA NEDJELJA
		</h1>
		<h1 class="font-conthrax text-center text-4xl md:text-5xl dark:text-gray-50">AKADEMIJA</h1>
		<div class="font-roboto px-4 pt-4 text-gray-600 dark:text-gray-100">
			<p>
				GNK Sveta Nedjelja ponosno razvija mlade nogometne talente kroz stručno vođene treninge,
				sportsku disciplinu i timski duh. Naša akademija okuplja djecu svih uzrasta i pruža im
				priliku za igru, razvoj i natjecanje u zdravom sportskom okruženju. Pridruži se i ti –
				zajedno gradimo budućnost nogometa!
			</p>
			<div class="flex justify-center pt-8">
				<Button>SAZNAJ VISE</Button>
			</div>
		</div>
	</div>
	<div class="w-full pt-8 md:pt-0">
		<img src="https://gnkdinamo.hr/build/images/homepage-school.jpg" alt="Nogometna akademija" />
	</div>
</div>
