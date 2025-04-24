<script lang="ts">
	let { tag, name, date, imageUrl } = $props();
</script>

<div class="font-roboto flex h-full cursor-pointer flex-col bg-gray-50">
	<img class="h-48 w-full object-cover md:h-64" src={imageUrl} alt="News" />
	<div class="px-4 pb-2">
		<p class="w-full pt-1 text-sm font-extrabold text-gray-400">{tag}</p>
		<h1 class="font-conthrax text-lg font-bold text-gray-700">{name}</h1>
		<p class="text-md text-gray-600">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi minima vero perspiciatis
			tenetur repellendus minus reprehenderit quae nisi commodi? Similique odio ut commodi neque
			voluptate id suscipit corporis magni provident!
		</p>
		<div class="flex">
			<a class="font-conthrax pt-2 font-extrabold text-gray-700" href="/">Procitaj</a>
			<p class="font-conthrax w-full pt-2 text-right text-gray-700">{date}</p>
		</div>
	</div>
</div>
