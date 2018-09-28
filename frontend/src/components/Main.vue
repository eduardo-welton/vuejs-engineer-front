<template>
  <div>
    <div class="row" v-for="(candidate) in candidateList" :key="candidate.id">
      <div class="offset-md-1 col-md-10 candidate-container">
        <div class="row">
          <div class="col-md-2">
            <img :src="candidate.imageUrl" class="img-fluid img-avatar pull-left"/>
          </div>
          
          <div class="col-md-8 float-left">
            <div class="row">
              <div class="col-md-12">
                <span class="candidate-name">
                  {{ candidate.name }}
                  
                  <div v-if="candidate.newThisWeek" class="newThisWeek">
                    <span>Novo essa semana</span>
                  </div>
                </span>
              </div>

              <div class="col-md-12 candidate-career">
                <span>{{ candidate.career }}</span>
              </div>

              <ItemDescription :labelText="candidate.lastCompanies.join(',')" icon="fas fa-briefcase icon" />
              <!-- <div class="col-md-12">
                <Icon iconImg="fas fa-briefcase icon" />
                <span>{{ candidate.lastCompanies.join(',')  }}</span>
              </div> -->

              <ItemDescription :labelText="candidate.university" icon="fas fa-graduation-cap icon" />
              <!-- <div class="col-md-12">
                <Icon iconImg="fas fa-graduation-cap icon" />
                <span>{{ candidate.university }}</span>
              </div> -->

              <ItemDescription :labelText="`Disposto a trabalhar em: ${candidate.cities.join(', ')}`" icon="fas fa-map-marker-alt icon" />
              <!-- <div class="col-md-12">
                <Icon iconImg="fas fa-map-marker-alt icon" />
                <span>Disposta a trabalhar em:  {{ candidate.cities.join(',') }}</span>
              </div> -->
              
              <ItemDescription :labelText=" `Principais Habilidades: ${candidate.mainSkills.join(', ')}`" icon="fas fa-wrench icon" />
              <!-- <div class="col-md-12">
                <Icon iconImg="fas fa-wrench icon" />
                <span>Principais habilidades:  {{ candidate.mainSkills.join(', ') }}</span>
              </div> -->
                          
            </div>
          </div>

          <div class="col-md-2">
            <button class="btn" style="margin-right: 10px;">
              <i class="fas fa-star"></i>
            </button>
            <button class="btn">...</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiClient from "../apiClient";
import Icon from "./Icon";
import ItemDescription from "./ItemDescription"
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
  },
  components: {
    Icon,
    ItemDescription
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.candidate-container {
  border: solid black 1px;
  margin-bottom: 10px;
  padding-top: 20px;
  padding-bottom: 10px;
}
.img-avatar {
  height: 100px;
  object-fit: cover;
  object-position: center top;
  width: 100px;
}
.candidate-name {
  display: flex;
  font-size: 18px;
  font-weight: bold;
}
.newThisWeek {
  display: unset;
  border: #ec1111 solid 1px;
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
.newThisWeek span {
  font-size: 12px;
  font-weight: bold;
  color: #ec1111;
}
.candidate-career {
  font-weight: bold;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.icon {
  margin-right: 10px;
}
</style>

