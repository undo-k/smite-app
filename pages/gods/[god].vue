<script setup lang=ts>

const debugMode = process.env.NODE_ENV === "development";
const api_url = debugMode
? "http://localhost:8080/api/v2/gods/"
: "https://web-production-3593.up.railway.app/gods/";
const route = useRoute();
const godId = route.params.god;

const { data: god } = await useFetch(api_url + godId);

definePageMeta({
  middleware: ["god"]
})
</script>

<template>
  <div class="god-detail">
    <h2>waddup bitch, it's {{ god.name }}</h2>

  </div>
</template>

