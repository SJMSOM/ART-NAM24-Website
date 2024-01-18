<script>
    import { formData } from './store.js';
    import { onMount } from 'svelte';
    import QRious from 'qrious'

    let payment_url = `upi://pay?pa=iitbombaydonationaccount@icici&pn=SJMSOM%20-%20NAM%202024&am=${1000*$formData.tnom}&tr=${$formData.uid}tn=NAM2024%20-SOM&cu=INR`;
    let size = 200;
    let qr

    onMount(() => {
            qr = new QRious({
            element: qr,
            value: payment_url,
            size,
        });
    });
</script>

<div class="mt-8 flex w-full lg:flex-row lg:items-start flex-col items-center">
    <div class="bg-white/20 p-5 rounded-md">
        <div class="flex flex-col w-full">
            <canvas bind:this={qr}></canvas>
            <a href="{payment_url}" class="p-2 mt-2 rounded-full text-white/80 bg-carrot">Pay using UPI</a>
        </div>
    </div>
</div>