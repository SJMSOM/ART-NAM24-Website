<script>
    import { onMount } from 'svelte';
    import Stage_1 from "./Stage_1.svelte";
    import Stage_2 from "./Stage_2.svelte";
    import Stage_3 from "./Stage_3.svelte";
    import Stage_4 from "./Stage_4.svelte";
    import Completed from "./Completed.svelte";
    
    let stage = 0;

    onMount(() => {
        const handleCustomBack = () => {
            stage=stage-1
        };
        window.onpopstate = handleCustomBack;

        // Cleanup when the component is destroyed
        return () => {
            // Restore the default behavior when the component is destroyed
            window.onpopstate = null;
        };
    });

    let pData
</script>

{#if stage==0}
<div class="mt-8 w-full flex">
    <button on:click={() => {stage++;let cu = window.location.href;window.history.pushState({ cu }, '', cu);}} class="bg-carrot py-3 flex flex-row items-center pl-6 pr-4 rounded-full text-xl text-white/80 cursor-pointer">
        <span>Register Now</span>
        <svg class="pl-2 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
    </button>
</div>
{:else if stage==1}
<Stage_1 bind:stage bind:pData/>
{:else if stage==2}
<Stage_2 bind:stage bind:pData/>
{:else if stage==3}
<Stage_3 bind:stage bind:pData/>
{:else if stage==4}
<Stage_4/>
{:else if stage==5}
<Completed/>
{/if}

