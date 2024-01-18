<script>
    import { postData } from "./helper";
    import { formData } from './store.js';
    
    export let stage;
    
    function handleNext(){
        console.log("Sending: ", $formData)
        postData($formData, stage)
        if($formData.payment=="Now"){
            stage++
        }else{
            stage=stage+2;
        }
    }

</script>

<div class="mt-8 flex w-full lg:flex-row lg:items-start flex-col items-center">
    <div class="bg-white/20 p-5 rounded-md">
        <div class="flex flex-col w-full">
            <span class="text-white">What sports ignite your passion?</span>
            <input class="rounded-md" type="text" name="sport" id="alum-sports" bind:value={$formData.sports}>
            <span class="text-white">Would you like to pay now or on spot?</span>
            <select class="rounded-md" name="payment" id="alum-pay" bind:value={$formData.payment}>
                <option value="" selected disabled hidden>Select</option>
                <option value="Now">Now</option>
                <option value="On Spot">On Spot</option>
            </select>
            {#if $formData.payment=="On Spot"}
                <input class="p-2 mt-2 rounded-full text-white/80 bg-carrot" type="button" value="Submit" on:click={handleNext}>
            {:else if $formData.payment=="Now"}
                <input class="p-2 mt-2 rounded-full text-white/80 bg-carrot" type="button" value="Pay" on:click={handleNext}>
            {/if}
        </div>
    </div>
</div>