<template>
  <div  class="text-center tag">
    <span>
      {{ text }}
    </span>
  </div>
</template>

<script>
export default {
  name: "Tag",
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
.tag {
  color: #5a5a5a;
  background-color: #e4e4e4;
  padding-left: 7px;
  padding-right: 10px;
  padding-top: 3px;
  padding-bottom: 3px;
  border-radius: 15px;
  margin-left: 5px;
  font-weight: 600;
  border: 1px #d0d0d0 solid;
  display: inline;
}
</style>

