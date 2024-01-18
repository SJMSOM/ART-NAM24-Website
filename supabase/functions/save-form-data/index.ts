// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.131.0/http/server.ts"

const targetUrl = "https://script.google.com/macros/s/AKfycbwJ2aV2EhOIzH-hhYSuM4I4HSclJB6ytc8ti4IM-RU9QOeFQ9gCnyxz3JJyjdQZlolFOA/exec";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {

  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  const { url, method, headers } = req;
  const body = await req.text();

  const queryString = url.split('?')[1];

  // Create a new URL with the target URL
  const finalUrl = targetUrl.concat("?", queryString)
  const newUrl = new URL(finalUrl);

  // Create a new request with the modified URL, method, headers, and body
  const newReq = new Request(newUrl.toString(), {
    method,
    headers,
    body,
  });

  // Fetch the response from the target URL
  const response = await fetch(newReq);

  // Get the response body
  const responseBody = await response.text();

  // Return the response from the target URL
  return new Response(responseBody, {
    status: response.status,
    headers: response.headers,
  });
})
