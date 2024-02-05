<script setup>
import { computed } from "vue";

const debugMode = process.env.NODE_ENV === "development";

const props = defineProps(["god"]);
const god = props.god;
const name = god.name;
const winRate = god.win_rate.toFixed(2);
const banRate = god.ban_rate.toFixed(2);
const role = god.role;
const hotItems = god.hot_items;

const getWinRateColorCssClass = computed(() => {
  if (winRate < 46) {
    return "text-red-500";
  } else if (winRate >= 46 && winRate <= 52) {
    return "text-amber-500";
  } else {
    return "text-green-500";
  }
});

const rateClass = (rate) => {
  if (rate < 46) {
    return "negative";
  } else if (rate <= 52) {
    return "neutral";
  } else {
    return "positive";
  }
}

const getRoleIcon = () => {
  const roleLowerCase = role.toLowerCase();
  return "/images/" + roleLowerCase + ".png"
};

const getItemBorderClass = computed(() => {
  return "border-solid border border-" + role.toLowerCase();
});

const getImageFileName = (image) => {
  let name = image;
  name = name.replace(/ /g, "_");
  name = name.replace(/'/g, "");
  name = name.replace(/-/g, "_");
  let api_url = debugMode
    ? "http://localhost:8080/static/images/"
    : "/static/images/";

  return api_url + name.toLowerCase() + ".jpg";
};
</script>

<template>
  <tr
    v-once
    @click="setGodDetailModel(god)"
  >
    <!--  God Name  -->
    <td colspan="1" class="god-cell">
      <a href="/">{{ name }}</a>
    </td>
    <!--  Win Rate  -->
    <td colspan="1" class="rate-cell">
      <span :class="rateClass(winRate)">
        {{ winRate }}
      </span>
    </td>
    <!--  Role  -->
    <td colspan="1" class="rate-cell">
      <span :class="rateClass(banRate)">
        {{ banRate }}
      </span>
      <!-- <img :src="getRoleIcon(role)" :alt="role" /> -->
    </td>
    <!--  Hot Items  -->
    <td colspan="2" class="hot-items-cell">
      <img
          :class="role.toLowerCase()"
          v-for="item in hotItems"
          :src="getImageFileName(item)"
          :alt="item.name"
        />
      <!-- <span class="hot-items-container">
        
      </span> -->
    </td>
  </tr>
</template>

<style scoped></style>
