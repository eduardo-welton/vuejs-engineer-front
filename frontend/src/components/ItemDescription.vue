<template>
  <div class="col-md-12">
    <Icon :iconImg="icon" />
    <span class="label">{{ labelText }}</span>
  </div>
</template>

<script>
import Icon from "./Icon";
export default {
  name: "ItemDescription",
  props: {
    icon: {
      type: String,
      required: true
    },
    labelText: {
      type: String,
      required: true
    }
  },
  components: {
    Icon
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

