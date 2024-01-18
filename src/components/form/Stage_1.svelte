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
            <span class="text-white">Name</span>
            <input class="rounded-md" type="text" name="name" id="alum-name" bind:value={$formData.name}>
            <span class="text-white">Batch (Passing Year)</span>
            <input class="rounded-md" type="text" placeholder="1998" name="batch" id="alum-batch" bind:value={$formData.batch}>
            <span class="text-white">Program</span>
            <select class="rounded-md" name="program" id="alum-program" bind:value={$formData.program}>
                <option value="" selected disabled hidden>Select</option>
                <option value="MBA">M.Mgt/MBA</option>
                <option value="PhD">PhD</option>
                <option value="EMBA">EMBA</option>
            </select>
            <input class="p-2 mt-2 rounded-full text-white/80 bg-carrot" type="button" value="Next" on:click={handleNext}>
        </div>
        <p class="text-white/50 text-xs p-2">*Only for SJMSOM Alumni</p>
    </div>
</div>