<script lang="ts">
    import { page } from '$app/stores';
    import { browser } from '$app/environment';

    $: if (browser) document.body.classList.toggle("noscroll", isMenuOpen);
	$: href = $page.url.pathname;

    let isMenuOpen = false;

    function toggleMenu(){
        isMenuOpen = !isMenuOpen
    }

    const navItems = [
        "vijesti",
        "momcad",
        "info",
        "o klubu",
        "natjecanje",
        "akademija",
        "kontakt"
    ]
</script>
<nav class="px-4 md:px-16 border-b border-accent">
      <div class="flex items-center justify-between w-full">
        <a href="/" class="text-primary px-4 min-w-24 text-xl z-20" on:click={() => isMenuOpen=false}>
            <img class="max-h-12 full" src="https://woop14abphufecql.public.blob.vercel-storage.com/gnk/gnk%20tigar%20sveta%20nedelja_logo.pdf-image-001-dTebxHxyBMMVrUSU11ViJlgGeHYfpf.png" alt="Logo" /> 
        </a>
        <div class="text-text uppercase tracking-widest hidden md:max-[4200px]:block md:text-md z-20">
          <ul class="flex h-full">
            {#each navItems as item }
                <li class="px-2 py-6">
                  <a href="/{item}" class={`transition-all duration-300 ease-in hover:text-gray-700 ${href.includes(item) ?
                  "text-primary" : ""}`}>{item}</a>
                </li>
            {/each}
          </ul>
        </div>
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <button
          name="Contact call to action"
          class={`md:hidden m-4 flex top-0 right-0 z-50 relative w-10 h-10 text-textcol focus:outline-none ${isMenuOpen ? "fixed" : "fixed"}`}
          on:click={toggleMenu}
        >
          <div class="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <span
              class={`absolute h-0.5 w-5 transform transition duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45  delay-200 bg-text" : "-translate-y-1.5 bg-text"
              }`}
            ></span>
            <span
              class={`absolute h-0.5 bg-text transform transition-all duration-200 ease-in-out ${
                isMenuOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
              }`}
            ></span>
            <span
              class={`absolute h-0.5 w-5 transform transition duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 bg-text delay-200" : "translate-y-1.5 bg-text"
              }`}
            ></span>
          </div>
        </button>
      </div>

    <nav
        class={`fixed flex top-0 left-0 w-full z-40 h-screen bg-text bg-opacity-100 transform delay-100 transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-full"
        }`}
      >
        <ul class="flex flex-col w-5/6 justify-center align-middle text-center text-gray-50 z-50">
            {#each navItems as item }
              <li class="text-3xl font-bold border-r-4 border-primary uppercase tracking-widest my-2 py-2 px-4 w-full flex ">
                <a on:click={() => isMenuOpen = false}
                  href="/{item}"
                >{item}
                </a>
              </li>
            {/each}
        </ul>
        <div class="bg-white bottom-0 py-10 flex flex-col justify-center">
            <a href="/" class="text-primary px-4 min-w-24 text-xl z-20" on:click={() => isMenuOpen=false}>
                <img class="" src="https://woop14abphufecql.public.blob.vercel-storage.com/gnk/gnk%20tigar%20sveta%20nedelja_logo.pdf-image-001-dTebxHxyBMMVrUSU11ViJlgGeHYfpf.png" alt="Logo" /> 
            </a>
            <a href="/" class="text-primary p-10 z-20" on:click={() => isMenuOpen=false}>
                <img class="" src="https://woop14abphufecql.public.blob.vercel-storage.com/gnk/0000050025-rOGLPB3PGnCZilsVx3ykbyH01MQRd9.png" alt="Logo" /> 
            </a>
        </div>
      </nav>
    </nav>
