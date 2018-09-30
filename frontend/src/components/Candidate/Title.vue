<template>
    <span class="title">
        {{ text }}
    </span>
</template>

<script>
export default {
  name: "Title",
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.title {
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
}
</style>

