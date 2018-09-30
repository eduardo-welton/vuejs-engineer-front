<template>
    <div class="advice">
        <span>{{ text }}</span>
    </div>
</template>

<script>
export default {
  name: "Advice",
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.advice {
  display: initial !important;
  border: #ff1f46 solid 1px;
  border-radius: 20px;
  margin-top: 2px;
  margin-bottom: 4px;
  margin-left: 10px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  justify-content: center; /* align horizontal */
  align-items: center;
}
.advice span {
  font-size: 12px;
  font-weight: bold;
  color: #ff1f46;
}
</style>

