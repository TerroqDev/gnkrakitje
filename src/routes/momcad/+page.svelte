<script lang="ts">
    import PlayerCard from "../../components/PlayerCard.svelte";
    // TODO: treba ici u grid vjerojatno
</script>
<div class="flex h-full min-h-svh flex-col 3xl:px-98 px-4 md:px-48 pb-16">
    <h1 class="text-4xl font-bold text-gray-700 font-conthrax pt-8 uppercase">Prva momcad</h1>
    <div class="pt-4">
        <h2 class="uppercase border-l-4 pl-2 border-primary font-conthrax text-xl  text-gray-600">vratari</h2>
        <div class="flex items-center flex-col mt-2 md:flex-row gap-4 justify-center">
            {#each {length:4} as _, i (i)}
                <PlayerCard name="Ivan Razum" imageUrl="https://img.a.transfermarkt.technology/portrait/header/626609-1606854554.jpg?lm=1"/>
            {/each}
        </div>
    </div>
    <div class="pt-8">
        <h2 class="uppercase border-l-4 pl-2 border-primary font-conthrax text-xl text-gray-600">branici</h2>
        <div class="flex flex-col items-center mt-2 md:flex-row gap-4 justify-center">
            {#each {length:4} as _, i (i)}
                <PlayerCard name="Ivan Kegelj" imageUrl="https://img.a.transfermarkt.technology/portrait/header/1081278-1691833678.jpg?lm=1"/>
            {/each}
        </div>
        <div class="flex flex-col items-center md:flex-row gap-4 justify-center pt-4">
            {#each {length:4} as _, i (i)}
                <PlayerCard name="Ivan Kegelj" imageUrl="https://img.a.transfermarkt.technology/portrait/header/1081278-1691833678.jpg?lm=1"/>
            {/each}
        </div>
    </div>
    <div class="pt-4">
        <h2 class="uppercase font-conthrax text-xl border-l-4 border-primary pl-2 text-gray-600">napadaci</h2>
        <div class="flex mt-2 flex-col items-center md:flex-row gap-4 justify-center">
            {#each {length:4} as _, i (i)}
                <PlayerCard name="Ivan Kegelj" imageUrl="https://img.a.transfermarkt.technology/portrait/header/357806-1679587312.png?lm=1"/>
            {/each}
        </div>
        <div class="flex flex-col md:flex-row items-center gap-4 justify-center pt-4">
            {#each {length:4} as _, i (i)}
                <PlayerCard name="Ivan Kegelj" imageUrl="https://img.a.transfermarkt.technology/portrait/header/357806-1679587312.png?lm=1"/>
            {/each}
        </div>
    </div>
</div>
