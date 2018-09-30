<template>
  <div class="offset-md-1 col-md-10 candidate-container">

    <div class="row">
      
      <div class="col-md-2 text-center">
        <avatar :imgSrc="candidate.imageUrl" />
      </div>

      <div class="col-md-8 float-left">
        <div class="row">
          <div class="col-md-12">
            <Title :text="candidate.name" />
            <Advice text="Novo essa semana" />
          </div>

          <div class="col-md-12">
            <Subtitle :text="candidate.career" />
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
</template>

<script>
import Avatar from "./Avatar"
import Icon from "./Icon";
import ItemDescription from "./ItemDescription";
import Title from "./Title";
import Advice from "./Advice";
import Subtitle from "./Subtitle";
export default {
  name: "Item",
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
    favoriteCandidate(candidate) {
      candidate.isFavorite = !candidate.isFavorite;
    }
  },
  props: {
    candidate: {
      type: Object,
      required: true
    }
  },
  components: {
    Avatar,
    Icon,
    ItemDescription,
    Title,
    Advice,
    Subtitle
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

