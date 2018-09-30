<template>
  <div>
    <div class="row" v-for="(candidate) in computedCandidateList" :key="candidate.id">
      <Item :candidate="candidate" />
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

