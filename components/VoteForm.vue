<template>
  <div>
    <v-card
      class="d-flex justify-space-around mb-6 align-center"
      flat
      tile
    >
      <vote-subject :subject="pair.leftSubject" />
      <v-card
        class="pa-2 align-center"
        outlined
        tile

      >
        VS
      </v-card>
      <vote-subject :subject="pair.rightSubject" />
    </v-card>
  </div>
</template>

<script>
  import VoteSubject from "./VoteSubject";

  export default {
    name: "VoteForm",
    components: {VoteSubject},
    props: {
      pair: {
        type: Object,
        required: true,
      }
    }
  }
</script>

<style scoped>

</style>
