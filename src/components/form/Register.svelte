<script>
    let stage = 0;

    function postData(stage, data) {
        // Make a POST request to the desired URL
        fetch('https://script.google.com/macros/s/AKfycbyyHrsKiQ3aqRZWDtARDkxdDk7y-e-6mnXMPKRMBKR6fCxiZVfYVeuyyPSPhX91Ks4VQQ/exec'+'?sheetName='+stage, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response if needed
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    function handleNext(){
        // Get the input values
        const name = document.getElementById('alum-name').value;
        const batch = document.getElementById('alum-batch').value;
        const program = document.getElementById('alum-program').value;

        // Create a JSON object with the data
        const data = {
            name: name,
            batch: batch,
            program: program
        };

        postData("Stage_1", data)
    }


</script>

{#if stage==0}
<div class="mt-8 w-full flex">
    <div on:click={() => stage++} class="bg-carrot py-3 flex flex-row items-center pl-6 pr-4 rounded-full text-xl text-white/80 cursor-pointer">
        <span>Register Now</span>
        <svg class="pl-2 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
    </div>
</div>
{:else if stage==1}
<div class="mt-8 flex w-full lg:flex-row lg:items-start flex-col items-center">
    <div class="bg-white/20 p-5 rounded-md">
        <div class="flex flex-col w-full">
            <span class="text-white">Name</span>
            <input class="rounded-md" type="text" name="name" id="alum-name">
            <span class="text-white">Batch (Passing Year)</span>
            <input class="rounded-md" type="text" placeholder="1998" name="batch" id="alum-batch">
            <span class="text-white">Program</span>
            <select class="rounded-md" name="program" id="alum-program">
                <option value="mba">M.Mgt/MBA</option>
                <option value="phd">PhD</option>
                <option value="emba">EMBA</option>
            </select>
            <input class="p-2 mt-2 rounded-full text-white/80 bg-carrot" type="button" value="Next" on:click={handleNext}>
        </div>
        <p class="text-white/50 text-xs p-2">*Only for SJMSOM Alumni</p>
    </div>
</div>
{/if}

