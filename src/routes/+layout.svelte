<script lang="ts">
	import '../app.css';
	import Navigation from '../components/Navigation.svelte';

	let { children } = $props();
</script>

<div>
	<Navigation />
	{@render children()}
</div>
