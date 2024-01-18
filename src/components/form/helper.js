export function postData(data, stage) {
    // Make a POST request to the desired URL
    return fetch('https://infiujnpdyjdaellzsvg.supabase.co/functions/v1/save-form-data'+'?sheetName=Stage_'+stage, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response)
    .then(data => {
        // Handle the response if needed
        console.log('Success:', data);
        stage++;
    })
    .catch((error) => {
        alert("Some error occured!");
        console.error('Error:', error);
    });
}