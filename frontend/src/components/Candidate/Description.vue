<template>
  <div class="col-md-12 item-description">
    <Icon :iconImg="icon" />
    <span class="label">{{ labelText }}</span>
    <Tag v-for="(tag,idx) in computedTags" :key="idx" :text="tag" v-if="tags"/>
    <Locations :items="locations" :limit="3" v-if="locations"/>
  </div>
</template>

<script>
import Icon from "@/components/Candidate/Icon";
import Tag from "@/components/Candidate/Tag";
import Locations from "@/components/Candidate/Locations";
export default {
  name: "Description",
  computed: {
    computedTags: function() {
      if (!this.tags) {
        return [];
      }

      // Filtrando as tags apenas
      var result = this.tags.filter(function(value, index, self) {
        return self.indexOf(value) === index;
      });

      return result;
    }
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    labelText: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: false
    },
    locations: {
      type: Array,
      required: false
    }
  },
  components: {
    Icon,
    Tag,
    Locations: Locations
  }
};
</script>

<style scoped>
.item-description {
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 2px;
}
</style>

