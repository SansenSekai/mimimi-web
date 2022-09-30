<template>
  <v-row align="center">
    <v-col
      cols="12"
    >
      <div v-for="(item, index) in categories" :key="index" class="text-center">
        <div class="my-2 pa-3 ma-3">
          <v-btn
            @click="onCategoryClicked(item.id)"
            x-large
            color="blue"
            dark
          >
            {{ item.name }}
          </v-btn>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    async asyncData({store}) {
      const categories = await store.dispatch('subject/fetchAvailableSubjectCategories');
      return {
        categories,
      }
    },
    data() {
      return {

      }
    },
    methods: {
      onCategoryClicked(id) {
        this.$router.push({name: "vote", query: {category: id}})
      }
    }
  }
</script>

<style scoped>

</style>
