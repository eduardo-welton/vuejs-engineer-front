<template>
  <div class="location-container">
    <span class="location" v-for="(item, idx) in items" :key="item" v-if="idx < limit"> 
      {{ (idx > 0)  ? "," : "" }}
      {{ item }} 
    </span>
    <span class="complement" v-if="items.length > limit">
      e mais {{ items.length - limit }} cidades
    </span>
  </div>
</template>

<script>
export default {
  name: "Locations",
  props: {
    items: {
      type: Array,
      required: false
    },
    limit: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped>
.location-container {
  display: inline;
}
.location {
  color: #868686;
}
.complement {
  color: #0e0e0e;
  font-weight: bold;
}
</style>