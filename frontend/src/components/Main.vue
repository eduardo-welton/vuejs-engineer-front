<template>
  <div>
    <CandidateList  :candidateList="candidateList"/>
  </div>
</template>

<script>
import apiClient from "../apiClient";
import CandidateList from "./Candidate/List"
export default {
  name: "Main",
  data() {
    return {
      candidateList: []
    };
  },
  async created() {
    this.candidateList = await apiClient.getCandidates();
  },
  components: {
    CandidateList
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

