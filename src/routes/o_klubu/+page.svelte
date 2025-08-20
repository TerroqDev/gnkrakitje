<script lang="ts">
	import PlayerCard from "../../components/PlayerCard.svelte";
	// TODO: types
	const doPredsjednici = [
		{ name: "Josip Hlevnjak", img: "" },
		{ name: "Darko Hajtok", img: "" }
	];
	const izvrsniOdbor = [
		{ name: "Josip Vrdoljak", img: "" },
		{ name: "Filip Kušić", img: "" },
		{ name: "Zoran Janžek", img: "" },
		{ name: "Darko Frajt", img: "" },
		{ name: "Robert Pšeničnjak", img: "" },
		{ name: "Josip Novačić", img: "" },
		{ name: "Jure Bekić", img: "" },
		{ name: "Drago Prahin", img: "" }
	];
</script>

<svelte:head>
	<title>O klubu - GNK Tigar Sveta Nedelja</title>
	<meta name="title" content="O klubu - GNK Tigar Sveta Nedelja" />
	<meta
		name="description"
		content="Saznajte više o povijesti, viziji i ciljevima GNK Tigar Sveta Nedelja. Klub ponosno njeguje tradiciju, zajedništvo i ljubav prema nogometu od 1973. godine."
	/>
	<link rel="canonical" href="https://gnktigarsvetanedelja.hr/o_klubu" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://gnktigarsvetanedelja.hr/o_klubu" />
	<meta property="og:title" content="O klubu - GNK Tigar Sveta Nedelja" />
	<meta
		property="og:description"
		content="Saznajte više o povijesti, viziji i ciljevima GNK Tigar Sveta Nedelja. Klub ponosno njeguje tradiciju, zajedništvo i ljubav prema nogometu od 1973. godine."
	/>
	<meta
		property="og:image"
		content="https://woop14abphufecql.public.blob.vercel-storage.com/gnk/gnktigarnobglogo.png"
	/>
	<meta property="og:site_name" content="GNK Tigar Sveta Nedelja" />
	<meta property="og:locale" content="hr_HR" />

	<!-- Twitter / X -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://gnktigarsvetanedelja.hr/o_klubu" />
	<meta name="twitter:title" content="O klubu - GNK Tigar Sveta Nedelja" />
	<meta
		name="twitter:description"
		content="GNK Tigar Sveta Nedelja – povijest, tradicija i zajedništvo u nogometu."
	/>
	<meta
		name="twitter:image"
		content="https://woop14abphufecql.public.blob.vercel-storage.com/gnk/gnktigarnobglogo.png"
	/>

	<!-- Additional SEO -->
	<meta
		name="keywords"
		content="GNK Tigar Sveta Nedelja, povijest kluba, nogometni klub, Sveta Nedelja, hrvatski nogomet, nogometna tradicija, uprava kluba"
	/>
	<meta name="author" content="GNK Tigar Sveta Nedelja" />
	<meta name="robots" content="index, follow" />

	<!-- Social Media Profiles -->
	<meta property="og:see_also" content="https://www.facebook.com/gnktigarsvetanedjelja/" />
	<meta property="og:see_also" content="https://www.instagram.com/gnk_tigar_sveta_nedelja/" />
</svelte:head>
<div class="flex h-full min-h-svh flex-col bg-gray-50 dark:bg-gray-700">
	<h1
		class="font-conthrax 3xl:px-98 bg-white px-4 pt-8 text-4xl text-gray-700 md:px-48 dark:bg-gray-800 dark:text-gray-50"
	>
		O klubu
	</h1>
	<div
		class="3xl:px-98 font-roboto bg-white px-4 pt-8 text-gray-600 md:px-48 md:text-lg dark:bg-gray-800 dark:text-gray-100"
	>
		<p>
			GNK Tigar Sveta Nedelja osnovan je s jasnom misijom – okupljati građane, a osobito mlade, koji
			žele živjeti nogomet i baviti se najpopularnijim sportom na svijetu. Klub pruža priliku za
			sportski i osobni razvoj, potiče ljubav prema nogometu te doprinosi unapređenju sportskog
			života u Gradu Sveta Nedelja. Na nogometnoj sceni Klub djeluje u okviru natjecanja pod
			ingerencijom HNS-a i NSZŽ-a, čuvajući sportski duh i promovirajući vrijednosti zajedništva i
			fair-playa.
		</p>
		<p class="pt-8">
			Naša povijest i identitet Korijeni Kluba sežu u 1973. godinu kada je osnovan pod imenom NK
			Sloga Brezje. Godine 2019. ime je promijenjeno u GNK Sveta Nedelja, a nakon ujedinjenja s HNK
			Tigar Rakitje klub dobiva današnji identitet – GNK Tigar Sveta Nedelja. Današnji naziv odaje
			počast Gradu u kojem djelujemo i slavnoj 1. gardijskoj brigadi "Tigrovi", osnovanoj upravo u
			Rakitju.
		</p>
		<p class="pt-8">
			Naša uloga u zajednici GNK Tigar Sveta Nedelja nije samo nogometni klub – on je mjesto
			okupljanja, druženja i stvaranja prijateljstava. Aktivno sudjelujemo u lokalnim natjecanjima,
			a s ponosom organiziramo turnire, kampove i društvene događaje koji jačaju zajednicu. Osim
			sportskog aspekta, posebnu pažnju posvećujemo odgoju mladih igrača, razvijanju discipline i
			timskog duha, ali i njegovanju vrijednosti poštene igre i međusobnog poštovanja.
		</p>
		<h1 class="font-conthrax pt-16 text-xl">Naša vizija i ciljevi</h1>
		<p class="pt-8">
			Naša ambicija je jasna – gradimo klub koji će biti prepoznat po kvaliteti, zajedništvu i
			strasti prema nogometu:
		</p>
		<ul class="flex list-disc flex-col px-4 py-4">
			<li>
				Kontinuirani razvoj mladih talenata – jer oni su budućnost našeg kluba i hrvatskog nogometa.
			</li>
			<li>Unapređenje infrastrukture i stvaranje uvjeta dostojnih profesionalnog rasta.</li>
			<li>Jačanje povezanosti s navijačima i lokalnom zajednicom, jer bez njih klub nema dušu.</li>
			<li>
				Pozicioniranje kao centar izvrsnosti za nogomet na zapadnom dijelu Zagrebačke županije i
				grada Zagreba.
			</li>
			<li>
				Postati drugi najbolje plasirani nogometni klub u Zagrebačkoj županiji – s ambicijom stalnog
				napretka.
			</li>
			<li>Razviti vlastiti sustav samoodrživosti koji će omogućiti stabilnost i dugoročan rast.</li>
		</ul>
		<p class="pt-8 pb-8 font-bold">
			GNK Tigar Sveta Nedelja danas je mnogo više od sportskog kolektiva – on je simbol ponosa,
			tradicije i zajedništva, mjesto gdje nogomet postaje način života.
		</p>
	</div>
	<div class="3xl:px-98 flex w-full flex-col items-start px-4 pt-4 md:px-48">
		<div class="">
			<!-- Item #1 -->
			<div class="group relative py-6 pl-8 sm:pl-32">
				<!-- Purple label -->
				<div class="font-caveat mb-1 text-2xl font-medium text-yellow-400 sm:mb-0">Osnivanje</div>
				<!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
				<div
					class="before:bg-primary after:bg-primary mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:px-px group-last:before:hidden after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]"
				>
					<time
						class="bg-primary left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full text-xs font-semibold text-gray-600 uppercase sm:absolute sm:mb-0"
						>1973</time
					>
					<div class="text-xl font-bold text-gray-600 dark:text-gray-50">
						Osnivanje NK Sloga Brezje
					</div>
				</div>
				<!-- Content -->
				<div class="text-gray-600 dark:text-gray-100"></div>
			</div>

			<!-- Item #2 -->
			<div class="group relative py-6 pl-8 sm:pl-32">
				<!-- Purple label -->
				<div class="font-caveat mb-1 text-2xl font-medium text-yellow-400 sm:mb-0">
					Škola nogometa
				</div>
				<!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
				<div
					class="before:bg-primary after:bg-primary mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:px-px group-last:before:hidden after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]"
				>
					<time
						class="bg-primary left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full text-xs font-semibold text-gray-600 uppercase sm:absolute sm:mb-0"
						>2017</time
					>
					<div class="text-xl font-bold text-gray-600 dark:text-gray-50">
						Izgradnja igrališta s umjetnom travom u Brezju i pokretanje škole nogometa pod vodstvom
						Ratka Ninkovića
					</div>
				</div>
				<!-- Content -->
				<div class="text-gray-500 dark:text-gray-100"></div>
			</div>

			<!-- Item #3 -->
			<div class="group relative py-6 pl-8 sm:pl-32">
				<!-- Purple label -->
				<div class="font-caveat mb-1 text-2xl font-medium text-yellow-400 sm:mb-0">
					Preimenovanje
				</div>
				<!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
				<div
					class="before:bg-primary after:bg-primary mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:px-px group-last:before:hidden after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]"
				>
					<time
						class="bg-primary left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full text-xs font-semibold text-gray-600 uppercase sm:absolute sm:mb-0"
						>2019</time
					>
					<div class="text-xl font-bold text-gray-600 dark:text-gray-50">
						Promjena imena u GNK Sveta Nedelja
					</div>
				</div>
				<!-- Content -->
				<div class="text-gray-500"></div>
			</div>

			<!-- Item #4 -->
			<div class="group relative py-6 pl-8 sm:pl-32">
				<!-- Purple label -->
				<div class="font-caveat mb-1 text-2xl font-medium text-yellow-400 sm:mb-0">
					Napredovanje u 4. HNL
				</div>
				<!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
				<div
					class="after:bg-primary mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-yellow-300 before:px-px group-last:before:hidden after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]"
				>
					<time
						class="bg-primary left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full text-xs font-semibold text-gray-600 uppercase sm:absolute sm:mb-0"
						>2021</time
					>
					<div class="text-xl font-bold text-gray-600 dark:text-gray-50">Osvajanje I JŽNL</div>
				</div>
				<!-- Content -->
				<div class="text-gray-500 dark:text-gray-100"></div>
			</div>
			<!-- Item #5 -->
			<div class="group relative py-6 pl-8 sm:pl-32">
				<div class="font-caveat mb-1 text-2xl font-medium text-yellow-400 sm:mb-0">
					Promjena imena
				</div>
				<!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
				<div
					class="after:bg-primary mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-yellow-300 before:px-px group-last:before:hidden after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]"
				>
					<time
						class="bg-primary left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full text-xs font-semibold text-gray-600 uppercase sm:absolute sm:mb-0"
						>2021</time
					>
					<div class="text-xl font-bold text-gray-600 dark:text-gray-50">
						Ujedinjenje s HNK Tigar Rakitje, promjena imena GNK Tigar Sveta Nedelja
					</div>
				</div>
				<!-- Content -->
				<div class="text-gray-500 dark:text-gray-100"></div>
			</div>
			<!-- Item #6 -->
			<div class="group relative py-6 pl-8 sm:pl-32">
				<div class="font-caveat mb-1 text-2xl font-medium text-yellow-400 sm:mb-0">
					Napredovanje u 3. HNL
				</div>
				<!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
				<div
					class="after:bg-primary mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-yellow-300 before:px-px group-last:before:hidden after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]"
				>
					<time
						class="bg-primary left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full text-xs font-semibold text-gray-600 uppercase sm:absolute sm:mb-0"
						>2023</time
					>
					<div class="text-xl font-bold text-gray-600 dark:text-gray-50">
						Osvajanje IV NL-u SREDIŠTE ZAGREB
					</div>
				</div>
				<!-- Content -->
				<div class="text-gray-500 dark:text-gray-100"></div>
			</div>
			<!-- Item #7 -->
			<div class="group relative py-6 pl-8 sm:pl-32">
				<div class="font-caveat mb-1 text-2xl font-medium text-yellow-400 sm:mb-0">
					Nova infrastruktura
				</div>
				<!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
				<div
					class="after:bg-primary mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-yellow-300 before:px-px group-last:before:hidden after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]"
				>
					<time
						class="bg-primary left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full text-xs font-semibold text-gray-600 uppercase sm:absolute sm:mb-0"
						>2025</time
					>
					<div class="text-xl font-bold text-gray-600 dark:text-gray-50">
						Izgradnja terena s umjetnom travom u Rakitju
					</div>
				</div>
				<!-- Content -->
				<div class="text-gray-500 dark:text-gray-100"></div>
			</div>
		</div>
	</div>

	<div class="3xl:px-98 w-full bg-white px-4 py-8 md:px-48 dark:bg-gray-800">
		<h1 class="font-conthrax text-3xl text-gray-700 dark:text-gray-50">Clanovi uprave</h1>
		<div class="flex w-full flex-col pt-8">
			<h2
				class="font-roboto border-primary border-l-4 pl-2 text-2xl font-semibold text-gray-700 dark:text-gray-100"
			>
				Predsjednik
			</h2>
			<div class="flex w-full justify-center pt-8">
				<PlayerCard
					name="Matej Vrdoljak"
					imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fapi.zapadno.hr%2Fmedia%2Fmatej-vrdoljak.jpeg&f=1&nofb=1&ipt=58c0ccdb98fa26f0d411b5d4a2e06d8bd895d96bdab8fd38bfe2d9f9608c30fe"
				/>
			</div>
			<div class="mx-2 my-8 h-0.5 w-full bg-gray-50"></div>
			<h2
				class="font-roboto border-primary border-l-4 pl-2 text-2xl font-semibold text-gray-700 dark:text-gray-100"
			>
				Dopredsjednici
			</h2>
			<div class="flex w-full justify-center gap-4 pt-8">
				{#each doPredsjednici as doPredsjednik, index (index)}
					<PlayerCard name={doPredsjednik.name} imageUrl={doPredsjednik.img} />
				{/each}
			</div>

			<div class="mx-2 my-8 h-0.5 w-full bg-gray-50"></div>

			<h2
				class="font-roboto border-primary border-l-4 pl-2 text-2xl font-semibold text-gray-700 dark:text-gray-50"
			>
				Izvršni odbor
			</h2>
			<div
				class="grid w-full grid-cols-1 place-items-center items-center justify-center gap-4 pt-4 md:grid-cols-3"
			>
				{#each izvrsniOdbor as izvrsni, index (index)}
					<div class="pt-8">
						<PlayerCard name={izvrsni.name} imageUrl={izvrsni.img} />
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
