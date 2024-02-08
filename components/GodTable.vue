<script setup>
import GodTableRow from "@/components/GodTableRow.vue";
const debugMode = process.env.NODE_ENV === "development";
const api_url = debugMode
    ? "http://localhost:8080/api/v2/gods"
    : "https://web-production-3593.up.railway.app/gods/";

const { data: gods } = await useFetch(api_url);
const filter = ref("");
const sortingKey = ref("name");
const sortDescend = ref(true);


const filteredGods = computed(() => {
  const filterValue = filter.value.toLowerCase();
  const key = sortingKey.value;

  let filteredGods = gods.value.filter(
    (god) =>
      god.name.toLowerCase().includes(filterValue) ||
      god.role.toLowerCase().includes(filterValue),
  );
  if (key === "win_rate") {
    return filteredGods.sort((a, b) =>
      sortDescend.value
        ? b[key].toFixed(2) - a[key].toFixed(2)
        : a[key].toFixed(2) - b[key].toFixed(2),
    );
  } else {
    return filteredGods.sort((a, b) =>
      stringComparator(a[key], b[key]) ? 1 : -1,
    );
  }
});

const stringComparator = (string1, string2) => {
  if (sortDescend.value) {
    return string1 > string2;
  } else {
    return string1 < string2;
  }
};

const setColumnSort = (column) => {
  if (sortingKey.value === column) {
    sortDescend.value = !sortDescend.value;
  } else {
    sortingKey.value = column;
    sortDescend.value = true;
  }
};


</script>

<template>

  <table id="god-table">
    <thead>
      <tr class="table-header god-table-row">
        <!-- God -->
        <th>
        <span class="sort-button-container" 
            @click="setColumnSort('name')">
            God
            <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            >
            <path
                d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"
            />
            </svg>
        </span>
        </th>

        <!-- Win Rate -->
        <th class="rate-th">
          <span class="sort-button-container"
            @click="setColumnSort('win_rate')">
            <span class="rate-th-full">Win Rate</span>
            <span class="rate-th-short">WR</span>
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"
              />
            </svg>
          </span>
        </th>

        <!-- Ban Rate -->
        <th class="rate-th ban-rate">
          <span class="sort-button-container"
            @click="setColumnSort('ban_rate')">
            <span class="rate-th-full">Ban Rate</span>
            <span class="rate-th-short">BR</span>
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"
              />
            </svg>
          </span>
        </th>

        <!-- Pick Rate -->
        <th class="rate-th pick-rate">
          <span class="sort-button-container"
            @click="setColumnSort('pick_rate')">
            <span class="rate-th-full">Pick Rate</span>
            <span class="rate-th-short">PR</span>
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"
              />
            </svg>
          </span>
        </th>

        <!-- Hot Items -->
        <th scope="col" class="hot-items-th">
            <div>
                <span>Hot Items</span>
                <span class="hot-items-icon"> 🔥</span>
            </div>
          <input
            id="table-search"
            v-model="filter"
            type="search"
            placeholder="Search"
            tabindex="1"
          />
        </th>

        <!-- Search -->
        <th>
          
        </th>
      </tr>
    </thead>

    <tbody>
      <GodTableRow v-for="god in filteredGods"
        :key="god.name"
        :god="god"
      >
      </GodTableRow>
    </tbody>
  </table>

</template>