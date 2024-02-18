<script setup lang=ts>
interface God {
  name: string,
}
const debugMode = process.env.NODE_ENV === "development";
const api_url = debugMode
? "http://localhost:8080/api/v2/gods/"
: "https://web-production-3593.up.railway.app/gods/";
const route = useRoute();
const godId = route.params.god;

const { data: god } = await useFetch<God>(api_url + godId);
const name = god.value == null ? null : god.value.name;

definePageMeta({
  middleware: ["god"]
})
</script>

<template>
  <div class="god-detail">
    <h2>waddup bitch, it's {{ name }}</h2>

  </div>
</template>

