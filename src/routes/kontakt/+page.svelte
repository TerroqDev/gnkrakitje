<script lang="ts">
	import Button from "../../components/Button.svelte";
</script>

<div class="3xl:px-98 flex flex-col md:px-48">
	<h1 class="font-conthrax px-4 pt-8 text-center text-3xl md:pt-16 md:text-5xl">
		Kontaktirajte nas!
	</h1>
	<div class="grid w-full grid-cols-1 justify-center pt-8 md:pt-16">
		<div class="px-4">
			<form class="font-roboto px-4 py-8 uppercase">
				<div class="font-conthrax text-center">
					<h1 class="pr-12 text-2xl font-bold text-gray-800">Kontakt</h1>
					<h1 class="pl-24 text-3xl text-yellow-400">Obrazac</h1>
				</div>
				<div class="flex flex-col pt-4">
					<label class="pl-2 text-xs text-gray-600 uppercase" for="email">email</label>
					<input class="bg-gray-50" type="email" />
				</div>
				<div class="flex flex-col pt-3">
					<label class="pl-2 text-xs text-gray-600 uppercase" for="name">Ime i prezime</label>
					<input class="bg-gray-50" type="text" />
				</div>
				<div class="flex flex-col pt-3">
					<label class="pl-2 text-xs text-gray-600 uppercase" for="message">Poruka</label>
					<textarea class="bg-gray-50" id="message" rows="6"></textarea>
				</div>
				<div class="flex justify-end pt-4">
					<Button>Posalji</Button>
				</div>
			</form>
		</div>
	</div>
	<div class="pt-8 pb-16">
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.932030803953!2d15.779947277418442!3d45.79258941146629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765cd8d9bb97187%3A0x801328854575064b!2sGNK%20Tigar%20Sveta%20Nedelja!5e0!3m2!1shr!2shr!4v1747226972386!5m2!1shr!2shr"
			width="100%"
			height="450"
			style="border:0;"
			allowfullscreen=""
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe>
	</div>
</div>
