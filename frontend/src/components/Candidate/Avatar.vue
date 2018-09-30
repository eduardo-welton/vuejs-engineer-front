<template>
  <img :src="imgSrc" class="img-fluid img-avatar pull-left"/>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    imgSrc: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.img-avatar {
  height: 100px;
  object-fit: cover;
  object-position: center top;
  width: 120px;
}
</style>