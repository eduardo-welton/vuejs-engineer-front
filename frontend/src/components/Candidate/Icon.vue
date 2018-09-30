<template>
  <div class="icon-container text-center">
    <i :class="`${iconImg} icon`"></i>
  </div>
</template>

<script>
export default {
  name: "Icon",
  props: {
    iconImg: {
      type: String,
      required: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon {
  margin-right: 10px;
  width: 20px;
  height: 20px;
}
.icon-container {
 display: unset;
}
</style>

