<template>
  <div>
    <div class="row" v-for="(candidate) in candidateList" :key="candidate.id">
      <div class="offset-md-1 col-md-10 candidate-container">
        <div class="row">
          <div class="col-md-4">
            <img :src="candidate.imageUrl" class="img-fluid img-avatar pull-left"/>
          </div>
          
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-12">
                <span>{{ candidate.name }}</span>
                <span>{{ candidate.newThisWeek }}</span>
              </div>
              <div class="col-md-12">
                <span>{{ candidate.career }}</span>
              </div>
              <div class="col-md-12">
                <span>{{ candidate.lastCompanies.join(',')  }}</span>
              </div>
              <div class="col-md-12">
                <span>{{ candidate.university }}</span>
              </div>

              <div class="col-md-12">
                <span>Disposta a trabalhar em:  {{ candidate.cities.join(',') }}</span>
              </div>
              
              <div class="col-md-12">
                <span>Principais habilidades:  {{ candidate.mainSkills.join(',') }}</span>
              </div>
                          
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiClient from "../apiClient";
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
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.candidate-container {
  border: solid black 1px;
  margin-bottom: 10px;
}
.img-avatar {
  max-height: 100px;
  max-width: 100px;
}
</style>
