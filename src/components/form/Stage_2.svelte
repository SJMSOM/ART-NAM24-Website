<script>
    import { postData } from "./helper";
    import { formData } from './store.js';

    export let stage;
    
    function handleNext(){
        console.log("Sending: ", $formData)
        postData($formData, stage)
        stage++
    }
</script>

<div class="mt-8 flex w-full lg:flex-row lg:items-start flex-col items-center">
    <div class="bg-white/20 p-5 rounded-md">
        <div class="flex flex-col w-full">
            <span class="text-white">Phone</span>
            <input class="rounded-md" type="text" name="phone" id="alum-phone" bind:value={$formData.phone}>
            <span class="text-white">Email</span>
            <input class="rounded-md" type="text" name="email" id="alum-email" bind:value={$formData.email}>
            <span class="text-white">Current Work Domain</span>
            <select class="rounded-md" name="domain" placeholder="Please Select" id="alum-domain" bind:value={$formData.domain}>
                <option value="" selected disabled hidden>Select</option>
                <option value="Consulting">Consulting</option>
                <option value="Finance">Finance</option>
                <option value="HR">HR</option>
                <option value="Operations">Operations</option>
                <option value="Sales and Marketing">Sales and Marketing</option>
                <option value="Others">Others</option>
            </select>
            <input class="p-2 mt-2 rounded-full text-white/80 bg-carrot" type="button" value="Next" on:click={handleNext}>
        </div>
    </div>
</div>