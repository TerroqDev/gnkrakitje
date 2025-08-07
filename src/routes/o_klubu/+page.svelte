<script lang="ts">
	import PlayerCard from "../../components/PlayerCard.svelte";
</script>

<div class="flex h-full min-h-svh flex-col">
	<h1 class="font-conthrax 3xl:px-98 px-4 pt-8 text-4xl text-gray-700 md:px-48">O klubu</h1>
	<div class="3xl:px-98 font-roboto px-4 pt-8 text-gray-600 md:px-48 md:text-lg">
		<p>
			Nogometni klub Tigar Rakitje osnovan je s ciljem promicanja sporta, zajedništva i zdravog
			načina života u lokalnoj zajednici. Smješten u mjestu Rakitje, klub okuplja zaljubljenike u
			nogomet svih uzrasta – od najmlađih kategorija do seniorske momčadi. Kroz godine, NK Tigar
			Rakitje postao je prepoznatljivo ime u županijskom nogometu, poznat po borbenosti, timskom
			duhu i predanom radu. Klub aktivno sudjeluje u lokalnim natjecanjima te organizira brojne
			turnire, kampove i društvene događaje. Osim sportskog razvoja, klub posebnu pažnju posvećuje
			odgoju mladih igrača, poticanju fair-play vrijednosti i stvaranju pozitivnog okruženja za sve
			članove. Naši ciljevi su: kontinuirani razvoj mladih talenata, unapređenje infrastrukture te
			jačanje veza s navijačima i lokalnom zajednicom.
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
						>2001</time
					>
					<div class="text-xl font-bold text-gray-600">Osnovan NK Rakitje</div>
				</div>
				<!-- Content -->
				<div class="text-gray-600">
					Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu
					neque aliquam vestibulum morbi blandit cursus risus.
				</div>
			</div>

			<!-- Item #2 -->
			<div class="group relative py-6 pl-8 sm:pl-32">
				<!-- Purple label -->
				<div class="font-caveat mb-1 text-2xl font-medium text-yellow-400 sm:mb-0">
					Prva zupanijska liga
				</div>
				<!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
				<div
					class="before:bg-primary after:bg-primary mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:px-px group-last:before:hidden after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]"
				>
					<time
						class="bg-primary left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full text-xs font-semibold text-gray-600 uppercase sm:absolute sm:mb-0"
						>2022</time
					>
					<div class="text-xl font-bold text-gray-600">Sezona 2022/2023.</div>
				</div>
				<!-- Content -->
				<div class="text-gray-500">
					Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu
					neque aliquam vestibulum morbi blandit cursus risus.
				</div>
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
						>2023</time
					>
					<div class="text-xl font-bold text-gray-600">Nk Rakitje postaje GNK Sveta Nedjelja</div>
				</div>
				<!-- Content -->
				<div class="text-gray-500">
					Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu
					neque aliquam vestibulum morbi blandit cursus risus.
				</div>
			</div>

			<!-- Item #4 -->
			<div class="group relative py-6 pl-8 sm:pl-32">
				<!-- Purple label -->
				<div class="font-caveat mb-1 text-2xl font-medium text-yellow-400 sm:mb-0">
					Ulazak u 4. HNL
				</div>
				<!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
				<div
					class="after:bg-primary mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-yellow-300 before:px-px group-last:before:hidden after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-slate-50 sm:flex-row sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem]"
				>
					<time
						class="bg-primary left-0 mb-3 inline-flex h-6 w-20 translate-y-0.5 items-center justify-center rounded-full text-xs font-semibold text-gray-600 uppercase sm:absolute sm:mb-0"
						>2024</time
					>
					<div class="text-xl font-bold text-gray-600">Ulazak u 4. HNL</div>
				</div>
				<!-- Content -->
				<div class="text-gray-500">
					Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu
					neque aliquam vestibulum morbi blandit cursus risus.
				</div>
			</div>
		</div>

		<div class="w-full py-8">
			<h1 class="font-conthrax text-3xl text-gray-700">Clanovi uprave</h1>
			<div class="flex w-full flex-col pt-8">
				<h2 class="font-roboto border-primary border-l-4 pl-2 text-2xl font-semibold text-gray-700">
					Predsjednik
				</h2>
				<div class="flex w-full justify-center pt-2">
					<PlayerCard
						name="Matej Vrdoljak"
						imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fapi.zapadno.hr%2Fmedia%2Fmatej-vrdoljak.jpeg&f=1&nofb=1&ipt=58c0ccdb98fa26f0d411b5d4a2e06d8bd895d96bdab8fd38bfe2d9f9608c30fe"
					/>
				</div>
				<div class="mx-2 my-8 h-0.5 w-full bg-gray-50"></div>
				<h2 class="font-roboto border-primary border-l-4 pl-2 text-2xl font-semibold text-gray-700">
					Dopredsjednik
				</h2>
				<div class="flex w-full justify-center pt-4">
					<PlayerCard
						name="Matej Vrdoljak"
						imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fapi.zapadno.hr%2Fmedia%2Fmatej-vrdoljak.jpeg&f=1&nofb=1&ipt=58c0ccdb98fa26f0d411b5d4a2e06d8bd895d96bdab8fd38bfe2d9f9608c30fe"
					/>
				</div>

				<div class="mx-2 my-8 h-0.5 w-full bg-gray-50"></div>

				<h2 class="font-roboto border-primary border-l-4 pl-2 text-2xl font-semibold text-gray-700">
					Izvrsni odbor
				</h2>
				<div
					class="flex w-full flex-col items-center justify-center gap-4 pt-4 md:flex-row md:justify-center"
				>
					{#each { length: 3 }, _}
						<PlayerCard
							name="Matej Vrdoljak"
							imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fapi.zapadno.hr%2Fmedia%2Fmatej-vrdoljak.jpeg&f=1&nofb=1&ipt=58c0ccdb98fa26f0d411b5d4a2e06d8bd895d96bdab8fd38bfe2d9f9608c30fe"
						/>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
