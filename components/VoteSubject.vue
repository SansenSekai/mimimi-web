<template>
  <v-card
    class="mx-auto my-12"
    max-width="300"
  >
    <v-img
      height="250"
      :src="subject.imageUrl"
    ></v-img>

    <v-card-title class="justify-center">{{ subject.name }}</v-card-title>
    <v-divider class="mx-4"></v-divider>

    <v-card-actions class="justify-center">
      <v-btn
        icon
        x-large
        color="pink"
        @click="onLikeClicked"
      >
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: "VoteSubject",
    props: {
      subject: {
        type: Object,
        required: true
      },
    },
    methods: {
      onLikeClicked() {
        console.log("onLike")
        this.$emit('liked', this.subject.id);
      }
    }
  }
</script>

<style scoped>

</style>
