<script setup>
import { computed } from "vue";

const debugMode = process.env.NODE_ENV === "development";

const props = defineProps(["god"]);
const god = props.god;
const name = god.name;
const winRate = (god.win_rate * 100).toFixed(1);
const banRate = god.ban_rate;
const pickRate = god.pick_rate;
const role = god.role;
const hotItems = god.hot_items;


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
  let name = image.name;
  name = name.replace(/ /g, "_");
  name = name.replace(/'/g, "");
  name = name.replace(/-/g, "_");
  // let api_url = debugMode
  //   ? "http://localhost:8080/static/images/"
  //   : "/static/images/";

  return "/images/" + name.toLowerCase() + ".jpg";
  // return api_url + name.toLowerCase() + ".jpg";
};
</script>

<template>
  <tr class="god-table-row"
    v-once
    @click="setGodDetailModel(god)"
  >
    <!--  God Name  -->
    <td colspan="1" class="god-cell">
      <a :href="'/gods/' + name">{{ name }}</a>
    </td>

    <!--  Win Rate  -->
    <td colspan="1" class="rate-cell">
      <span :class="rateClass(winRate)">
        {{ winRate }}
      </span>
    </td>

    <!--  Ban Rate  -->
    <td colspan="1" class="rate-cell ban-rate">
      <span :class="rateClass(banRate)">
        {{ banRate }}
      </span>
    </td>

    <!--  Pick Rate  -->
    <td colspan="1" class="rate-cell pick-rate">
      <span :class="rateClass(pickRate)">
        {{ pickRate }}
      </span>
    </td>

    <!--  Hot Items  -->
    <td colspan="2" class="hot-items-cell">
      <img
          :class="role.toLowerCase()"
          v-for="item in hotItems"
          :src="getImageFileName(item)"
          :alt="item.name"
        />
    </td>
  </tr>
</template>

<style scoped></style>
