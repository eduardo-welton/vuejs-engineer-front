<template>
  <div class="subtitle-container">
    <span class="subtitle">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "Subtitle",
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.subtitle-container {
  margin-bottom: 15px;
  margin-top: 5px;
}

.subtitle {
  font-weight: bold;
  font-size: 14px;
}
</style>