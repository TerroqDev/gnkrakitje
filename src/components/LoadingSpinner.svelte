<script lang="ts">
	import { onMount } from "svelte";
	import { animate, stagger } from "motion";

	onMount(() => {
		const dots = document.querySelectorAll(".dot");

		animate(
			dots,
			{ y: -30 },
			{
				duration: 0.6,
				repeat: Infinity,
				repeatType: "mirror",
				ease: "easeInOut",
				times: [0, 0.5, 1],
				delay: stagger(0.2, { startDelay: -0.5 })
			}
		);
	});
</script>

<div class="flex items-center justify-center gap-2">
	<div class="dot"></div>
	<div class="dot"></div>
	<div class="dot"></div>
</div>

<style>
	.dot {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: #fff200;
		will-change: transform;
	}
</style>
