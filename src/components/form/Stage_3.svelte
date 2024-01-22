<script>
    import { postData } from "./helper";
    import { formData } from './store.js';
    
    export let stage;
    let fam;
    
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
            <span class="text-white">Are your family/friends accompanying you?</span>
            <select class="rounded-md" name="fam" id="alum-fam" bind:value={fam}>
                <option value="" selected disabled hidden>Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
            {#if fam=="Yes" | $formData.tnom>1}
            <span class="text-white">Number of people (Other than you)</span>
            <div class="flex flex-row items-center">
                <button class="py-2 px-4 mt-2 rounded-md text-white/80 bg-carrot" on:click={() => {if($formData.tnom-1!=0){$formData.tnom -= 1;}}}>-</button>
                <span class="text-white text-2xl px-4">{ $formData.tnom-1 }</span>
                <button class="py-2 px-4 mt-2 rounded-md text-white/80 bg-carrot" on:click={() => $formData.tnom += 1}>+</button>
            </div>
            {/if}
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