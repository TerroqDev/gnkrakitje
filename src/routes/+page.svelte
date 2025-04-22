<script lang="ts">
	import NewsCard from '../components/NewsCard.svelte';
	import Button from '../components/Button.svelte';
	import LeagueTable from '../components/LeagueTable.svelte';
</script>

<div class="flex min-h-screen flex-col">
	<div class="relative w-full overflow-hidden pb-8 md:pb-16">
		<div class="absolute inset-0 flex items-center justify-center">
			<span
				class="pointer-events-none px-4 text-center text-9xl font-extrabold tracking-widest text-gray-200 opacity-15 select-none"
			>
				GNK TIGAR RAKITJE
			</span>
		</div>
		<div
			class="font-roboto z-10 flex h-full w-full flex-col justify-center px-4 pt-8 md:px-48 md:pt-16"
		>
			<h1 class="w-full text-center text-gray-600 md:text-lg">
				SuperSport HNL 2024-2025 - <span class="font-bold">31. kolo</span>
			</h1>
			<h1 class="text-text font-conthrax w-full pt-2 text-center text-xl font-bold md:text-3xl">
				PETAK 01.01.2026. - 21:00
			</h1>
			<div class="grid grid-cols-2">
				<div class="flex flex-col items-center justify-center">
					<img
						class="h-48 w-48"
						src="https://hns.family/files/images_comet/66/e/66e3062a6966d179ca1ab202bab911c243153e18.jpg"
						alt="Tigar Rakitje"
					/>
					<div>
						<h2 class="text-text text-center font-bold md:text-xl">GNK TIGAR RAKITJE</h2>
					</div>
				</div>
				<div class="flex flex-col items-center justify-center">
					<img
						class="h-48 w-48 p-5"
						src="https://dinamo.blob.core.windows.net/dinamo/Repository/2015/8/dinamo_grb_logo_200_200x200.png"
						alt="Tigar Rakitje"
					/>
					<h2 class="text-text text-center font-bold md:text-xl">GNK DINAMO</h2>
				</div>
			</div>
			<div class="flex justify-center pt-6">
				<Button />
			</div>
		</div>
	</div>
	<div class="bg-gray-100 pb-16 md:pb-24">
		<h1 class="font-conthrax pt-8 pb-4 text-center text-3xl md:pt-16 md:text-4xl">Partneri</h1>
		<div class="flex justify-center gap-2 px-4 md:gap-16">
			<div class="flex h-20 w-32 items-center justify-center md:h-40 md:w-64">
				<img
					class="max-h-full max-w-full object-contain"
					src="https://golf-fasade.hr/wp-content/uploads/2022/07/logo-znak.png"
					alt="Golf Fasade"
				/>
			</div>
			<div class="flex h-20 w-32 items-center justify-center md:h-40 md:w-64">
				<img
					class="max-h-full max-w-full object-contain"
					src="https://jidelectric.hr/wp-content/uploads/2020/07/jid-logo-v2-200.png"
					alt="JID Electric"
				/>
			</div>
			<div class="flex h-20 w-32 items-center justify-center md:h-40 md:w-64">
				<img
					class="max-h-full max-w-full object-contain"
					src="https://sz-svn.hr/templates/szsvn21042021/images/logo-493747013.png"
					alt="Golf Fasade"
				/>
			</div>
		</div>
	</div>
	<div class="pt-8 md:px-48 md:pt-16">
		<LeagueTable />
	</div>
	<div class="flex flex-col gap-4 pt-8 md:flex-row">
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
				imageUrl="https://nk-slaven-belupo.hr/cache/mod_bt_contentslider/69fa39a3b239e8c7a6a07f5730972efa-170425_kadeti_pioniri_16.webp"
				tag="Najava"
				date="22.04.2025."
			/>
		</div>
	</div>
</div>
