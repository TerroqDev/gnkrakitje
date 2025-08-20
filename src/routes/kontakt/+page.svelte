<script lang="ts">
	import Button from "../../components/Button.svelte";
</script>
<svelte:head>
  <title>Kontakt - GNK Tigar Sveta Nedelja</title>
  <meta name="title" content="Kontakt - GNK Tigar Sveta Nedelja" />
  <meta name="description" content="Kontaktirajte GNK Tigar Sveta Nedelja za sve upite o klubu, članstvu, akademiji i suradnji. Pronađite naše službene kontakte i društvene mreže." />
  <link rel="canonical" href="https://gnktigarsvetanedelja.hr/kontakt" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://gnktigarsvetanedelja.hr/kontakt" />
  <meta property="og:title" content="Kontakt - GNK Tigar Sveta Nedelja" />
  <meta property="og:description" content="Službeni kontakti GNK Tigar Sveta Nedelja – javite nam se za upite o klubu, utakmicama i članstvu." />
  <meta property="og:image" content="https://woop14abphufecql.public.blob.vercel-storage.com/gnk/gnktigarnobglogo.png" />
  <meta property="og:site_name" content="GNK Tigar Sveta Nedelja" />
  <meta property="og:locale" content="hr_HR" />

  <!-- Twitter / X -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://gnktigarsvetanedelja.hr/kontakt" />
  <meta name="twitter:title" content="Kontakt - GNK Tigar Sveta Nedelja" />
  <meta name="twitter:description" content="Kontakt informacije GNK Tigar Sveta Nedelja – klub, akademija, utakmice i suradnje." />
  <meta name="twitter:image" content="https://woop14abphufecql.public.blob.vercel-storage.com/gnk/gnktigarnobglogo.png" />

  <!-- Additional SEO -->
  <meta name="keywords" content="GNK Tigar Sveta Nedelja, kontakt, nogometni klub, Sveta Nedelja, informacije, članstvo, suradnja, akademija" />
  <meta name="author" content="GNK Tigar Sveta Nedelja" />
  <meta name="robots" content="index, follow" />

  <!-- Social Media Profiles -->
  <meta property="og:see_also" content="https://www.facebook.com/gnktigarsvetanedjelja/" />
  <meta property="og:see_also" content="https://www.instagram.com/gnk_tigar_sveta_nedelja/" />
</svelte:head>
<div class="3xl:px-98 flex flex-col md:px-48 dark:bg-gray-700">
	<h1 class="font-conthrax px-4 pt-8 text-center text-3xl md:pt-16 md:text-5xl dark:text-gray-50">
		Kontaktirajte nas!
	</h1>
	<div class="grid w-full grid-cols-1 justify-center pt-8 md:pt-16">
		<div class="px-4">
			<form class="font-roboto px-4 py-8 uppercase">
				<div class="font-conthrax text-center">
					<h1 class="pr-12 text-2xl font-bold text-gray-800 dark:text-gray-100">Kontakt</h1>
					<h1 class="pl-24 text-3xl text-yellow-400">Obrazac</h1>
				</div>
				<div class="flex flex-col pt-4">
					<label class="pl-2 text-xs text-gray-600 dark:text-gray-200 uppercase" for="email">email</label>
					<input class="bg-gray-50 dark:bg-gray-800 dark:text-gray-50" type="email" />
				</div>
				<div class="flex flex-col pt-3">
					<label class="pl-2 text-xs text-gray-600 dark:text-gray-200 uppercase" for="name">Ime i prezime</label>
					<input class="bg-gray-50 dark:bg-gray-800 dark:text-gray-50" type="text" />
				</div>
				<div class="flex flex-col pt-3">
					<label class="pl-2 text-xs text-gray-600 dark:text-gray-200 uppercase" for="message">Poruka</label>
					<textarea class="bg-gray-50 dark:bg-gray-800 dark:text-gray-50" id="message" rows="6"></textarea>
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
