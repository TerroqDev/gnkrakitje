<script lang="ts">
	import PlayerCard from "../../components/PlayerCard.svelte";
</script>

<div class="3xl:px-98 flex h-full min-h-svh flex-col px-4 pb-16 md:px-48 dark:bg-gray-800 transition-colors ease-in duration-300">
	<h1 class="font-conthrax pt-8 text-4xl font-bold text-gray-700 uppercase dark:text-gray-50">Prva momcad</h1>
	<div class="pt-4">
		<h2 class="border-primary font-conthrax border-l-4 pl-2 text-xl text-gray-600 uppercase dark:text-gray-100">
			vratari
		</h2>
		<div class="mt-2 flex flex-col items-center justify-center gap-4 md:flex-row">
			{#each { length: 4 } as _, i (i)}
				<PlayerCard
					name="Ivan Razum"
					imageUrl="https://img.a.transfermarkt.technology/portrait/header/626609-1606854554.jpg?lm=1"
				/>
			{/each}
		</div>
	</div>
	<div class="pt-8">
		<h2 class="border-primary font-conthrax border-l-4 pl-2 text-xl text-gray-600 uppercase dark:text-gray-100">
			branici
		</h2>
		<div class="mt-2 flex flex-col items-center justify-center gap-4 md:flex-row">
			{#each { length: 4 } as _, i (i)}
				<PlayerCard
					name="Ivan Kegelj"
					imageUrl="https://img.a.transfermarkt.technology/portrait/header/1081278-1691833678.jpg?lm=1"
				/>
			{/each}
		</div>
		<div class="flex flex-col items-center justify-center gap-4 pt-4 md:flex-row">
			{#each { length: 4 } as _, i (i)}
				<PlayerCard
					name="Ivan Kegelj"
					imageUrl="https://img.a.transfermarkt.technology/portrait/header/1081278-1691833678.jpg?lm=1"
				/>
			{/each}
		</div>
	</div>
	<div class="pt-8">
		<h2 class="font-conthrax border-primary border-l-4 pl-2 text-xl text-gray-600 uppercase dark:text-gray-100">
			napadaci
		</h2>
		<div class="mt-2 flex flex-col items-center justify-center gap-4 md:flex-row">
			{#each { length: 4 } as _, i (i)}
				<PlayerCard
					name="Ivan Kegelj"
					imageUrl="https://img.a.transfermarkt.technology/portrait/header/357806-1679587312.png?lm=1"
				/>
			{/each}
		</div>
		<div class="flex flex-col items-center justify-center gap-4 pt-4 md:flex-row">
			{#each { length: 4 } as _, i (i)}
				<PlayerCard
					name="Ivan Kegelj"
					imageUrl="https://img.a.transfermarkt.technology/portrait/header/357806-1679587312.png?lm=1"
				/>
			{/each}
		</div>
	</div>
</div>
