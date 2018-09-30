<template>
    <div>
        <button class="btn button" style="margin-right: 10px;" @click="favoriteCandidate">
          <i class="fas fa-star" v-if="isFavorited"/>
          <i class="far fa-star" v-else/>
        </button>
        <div class="dropdown">
          <button class="btn button " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span>...</span>
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#" @click="removeCandidate">Remover</a>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Actions",
  data() {
    return {
      isCandidateFavorite: false
    };
  },
  created() {
    if (this.candidate.isFavorite) {
      this.isCandidateFavorite = true;
    }
  },
  computed: {
    isFavorited: {
      get() {
        return this.isCandidateFavorite;
      }
    }
  },
  methods: {
    favoriteCandidate() {
      this.isCandidateFavorite = !this.isCandidateFavorite;
      this.$emit("favoriteCandidate", this.candidate.id, this.isCandidateFavorite);
    },
    removeCandidate(e) {
      this.$emit("removeCandidate", this.candidate.id);
      e.preventDefault();
    }
  },
  props: {
    candidate: {
      type: Object,
      required: true
    }
  }
};
</script>


<style scoped>
.dropdown {
  display: inline;
}
.button {
  border-radius: 1px;
  background-color: white;
  border: 1px #e4e4e4 solid;
  padding-top: 3px;
  padding-bottom: 3px;
  font-size: 16px;
}
</style>

