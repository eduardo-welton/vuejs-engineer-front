<template>
  <div class="offset-md-1 col-md-10 candidate-container">

    <div class="row">
      
      <div class="col-md-2 text-center">
        <Avatar :imgSrc="candidate.imageUrl" />
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

          <Description :labelText="candidate.lastCompanies.join(',')" icon="fas fa-briefcase" />
          <Description :labelText="candidate.university" icon="fas fa-graduation-cap" />
          <Description labelText="Disposto a trabalhar em: " :locations="candidate.cities" icon="fas fa-map-marker-alt" />
          <Description labelText="Principais Habilidades:" :tags="candidate.mainSkills" icon="fas fa-wrench" />
        </div>
      </div>

      <div class="col-md-2">
        <Actions :candidate="candidate" v-on:removeCandidate="removeCandidate" v-on:favoriteCandidate="favoriteCandidate"/>
      </div>

    </div>

  </div>
</template>

<script>
import Avatar from "./Avatar";
import Icon from "./Icon";
import Description from "./Description";
import Title from "./Title";
import Advice from "./Advice";
import Subtitle from "./Subtitle";
import Actions from "./Actions";
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
  props: {
    candidate: {
      type: Object,
      required: true
    }
  },
  methods: {
    removeCandidate() {

    },
    favoriteCandidate() {
      
    }
  },
  components: {
    Actions,
    Avatar,
    Icon,
    Description,
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
</style>

