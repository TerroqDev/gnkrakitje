<script lang="ts">
	let tableData = [
		{ name: 'GNK TIGAR RAKITJE', games: '5', goals: '10', points: '30' },
		{ name: 'SAMOBOR', games: '5', goals: '2', points: '28' },
		{ name: 'SPANSKO', games: '6', goals: '1', points: '27' },
		{ name: 'SLAVEN BELUPO', games: '5', goals: '10', points: '15' },
		{ name: 'BREZJE', games: '6', goals: '2', points: '10' },
		{ name: 'LUCKO', games: '5', goals: '4', points: '6' }
	];
</script>

<div class="font-roboto bg-gray-900">
	<h1 class="font-conthrax px-4 py-4 text-lg font-bold tracking-widest text-gray-50">
		Sezona 2024./2025.
	</h1>
	<div
		class="relative flex h-full w-full flex-col overflow-scroll bg-gray-800 bg-clip-border py-4 text-gray-100"
	>
		<table class="w-full min-w-max table-auto text-left">
			<thead>
				<tr>
					<th class="px-2">
						<p
							class="text-blue-gray-900 block text-sm leading-none font-normal antialiased opacity-70"
						>
							#
						</p>
					</th>
					<th class="">
						<p
							class="text-blue-gray-900 block text-sm leading-none font-normal antialiased opacity-70"
						>
							Klub
						</p>
					</th>
					<th class="pr-2 text-center">
						<p
							class="text-blue-gray-900 block text-sm leading-none font-normal antialiased opacity-70"
						>
							Ut
						</p>
					</th>
					<th class="pr-2 text-center">
						<p
							class="text-blue-gray-900 block text-sm leading-none font-normal antialiased opacity-70"
						>
							G+/-
						</p>
					</th>
					<th class="">
						<p
							class="text-blue-gray-900 block text-sm leading-none font-normal antialiased opacity-70"
						>
							Bodovi
						</p>
					</th>
				</tr>
			</thead>
			<tbody class="pt-8">
				{#each tableData as tdata, index}
					<tr>
						<td class="px-2">
							<p class="font-thin">
								{index + 1}.
							</p>
						</td>
						<td class="">
							<p class="py-1 font-bold">
								{tdata.name}
							</p>
						</td>
						<td class="">
							<p class="text-center">
								{tdata.games}
							</p>
						</td>
						<td class="">
							<p class="text-center">
								{tdata.goals}
							</p>
						</td>
						<td class="">
							<p class="text-center font-extrabold">
								{tdata.points}
							</p>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
