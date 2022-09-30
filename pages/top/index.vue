<template>
  <v-row align="center">
    <v-col
      cols="12"
    >
      <v-card
        v-for="(item, index) in top"
        :key="index"
        class="mx-auto my-12"
        max-width="300"
      >
        <v-img
          height="250"
          :src="item.imageUrl"
        ></v-img>

        <v-card-title class="justify-center">{{ item.name }}</v-card-title>
        <v-divider class="mx-4"></v-divider>

        <v-card-actions class="justify-center">
          <v-card-title class="justify-center">{{ index + 1 }} МЕСТО | {{ item.likes }} лайка(ов)</v-card-title>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    async asyncData({store, route}) {
      const top = await store.dispatch('subject/fetchSubjectTop', route.query);
      return {
        top
      }
    },
  }
</script>

<style scoped>

</style>
