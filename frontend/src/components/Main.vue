<template>
  <div>
    <CandidateList  :candidateList="candidateList" v-on:removeCandidate="removeCandidate" v-on:favoriteCandidate="favoriteCandidate"/>
  </div>
</template>

<script>
import apiClient from "../apiClient";
import CandidateList from "./Candidate/List";
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
  },
  methods: {
    async removeCandidate(candidateId) {
      // Apagamos localmente primeiro (para o usuário ter uma experiência mais fluida)
      var newList = this.candidateList.filter(
        candidate => candidate.id != candidateId
      );
      this.candidateList = newList;

      // Agora vamos mandar a requisição para a API...
      await apiClient.deleteCandidate(candidateId);
    },
    async favoriteCandidate(candidateId, isFavorite) {
      const newCandidateList = this.candidateList.filter(
        candidate => candidate.id == candidateId
      );

      const candidateToChange = newCandidateList[0];
      console.log('candidateToChange', candidateToChange)
      candidateToChange.isFavorite = isFavorite;

      await apiClient.updateCandidate(candidateToChange);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>