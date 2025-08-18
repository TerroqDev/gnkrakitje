<script lang="ts">
	let { tag, name, date, imageUrl } = $props();
</script>

<div class="font-roboto flex h-full cursor-pointer flex-col bg-gray-50 dark:bg-gray-900 transition-colors ease-in duration-300">
	<img class="h-48 w-full object-cover md:h-64" src={imageUrl} alt="News" />
	<div class="px-4 pb-2">
		<p class="w-full pt-2 text-sm font-extrabold text-gray-400 dark:text-gray-200">{tag}</p>
		<h1 class="font-conthrax text-md font-bold text-gray-700 dark:text-gray-100">{name}</h1>
		<p class="text-sm text-gray-600 pt-4 dark:text-gray-200">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi minima vero perspiciatis
			tenetur repellendus minus reprehenderit quae nisi commodi? Similique odio ut commodi neque
			voluptate id suscipit corporis magni provident!
		</p>
		<div class="flex text-gray-700 dark:text-gray-50">
			<a class="font-conthrax pt-2 font-extrabold" href="/">Procitaj</a>
			<p class="font-conthrax w-full pt-2 text-right">{date}</p>
		</div>
	</div>
</div>
