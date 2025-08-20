<script lang="ts">
	let { name, imageUrl } = $props();
</script>

<div class="relative flex w-56 flex-col bg-white">
	<img src={imageUrl} alt={name} class="h-auto w-full" />
	<h2 class="font-conthrax text-md absolute bottom-0 w-full bg-white py-2 text-center">
		{name}
	</h2>
</div>
