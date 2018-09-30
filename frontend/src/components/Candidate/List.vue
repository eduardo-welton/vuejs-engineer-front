<template>
  <div>
    <div class="row" v-for="(candidate) in computedCandidateList" :key="candidate.id">
      <Item :candidate="candidate" v-on:removeCandidate="removeCandidate" v-on:favoriteCandidate="favoriteCandidate"/>
    </div>
  </div>
</template>

<script>
import Item from "./Item";
export default {
  name: "List",
  computed: {
    computedCandidateList: {
      get() {
        const result = this.candidateList;
        function compareByName(a, b) {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        }
        result.sort(compareByName);
        return result;
      }
    }
  },
  methods: {
    removeCandidate(candidateId) {
      console.log('Removi o candidato de id', candidateId);
    },
    favoriteCandidate(candidateId, isFavorite) {
      console.log('Favoritei o candidato', candidateId, isFavorite);
    }
  },
  props: {
    candidateList: {
      type: Array,
      required: false
    }
  },
  components: {
    Item
  }
};
</script>


<style scoped>
</style>

