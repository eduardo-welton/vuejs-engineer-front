<template>
  <div>
    <div class="row" v-for="(candidate) in candidateList" :key="candidate.id">
      <div class="offset-md-1 col-md-10 candidate-container">
        <div class="row">
          <div class="col-md-2 text-center">
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
              <ItemDescription :labelText="candidate.university" icon="fas fa-graduation-cap icon" />
              <ItemDescription labelText="Disposto a trabalhar em: " :locations="candidate.cities" icon="fas fa-map-marker-alt icon" />
              <ItemDescription labelText="Principais Habilidades:" :tags="candidate.mainSkills" icon="fas fa-wrench icon" />
            </div>
          </div>

          <div class="col-md-2">
            <button class="btn button" style="margin-right: 10px;" @click="favoriteCandidate(candidate)">
              <i v-bind:class="{
                'far fa-star': !candidate.isFavorite, 
                'fas fa-star': candidate.isFavorite
                }" :key="`${candidate.id}_${candidate.isFavorite}`"/>
            </button>
            <div class="dropdown">
              <button class="btn button " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                ...
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Remover</a>
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
import Icon from "./Icon";
import ItemDescription from "./ItemDescription";
export default {
  name: "Main",
  data() {
    return {
      candidateList: []
    };
  },
  async created() {
    function compareByName(a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    }
    this.candidateList = await apiClient.getCandidates();
    this.candidateList.sort(compareByName);
  },
  methods:{
    favoriteCandidate(candidate) {
      candidate.isFavorite = !candidate.isFavorite
    }
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
  border: solid #e4e4e4 1px;
  margin-bottom: 10px;
  padding-top: 20px;
  padding-bottom: 10px;
}
.img-avatar {
  height: 100px;
  object-fit: cover;
  object-position: center top;
  width: 120px;
}
.candidate-name {
  display: flex;
  font-size: 18px;
  font-weight: bold;
}
.newThisWeek {
  display: unset;
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
.newThisWeek span {
  font-size: 12px;
  font-weight: bold;
  color: #ff1f46;
}
.candidate-career {
  font-weight: bold;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 15px;
}
.icon {
  margin-right: 10px;
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

