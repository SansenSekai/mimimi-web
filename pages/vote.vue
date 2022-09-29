<template>
  <vote-form :pair="currentPair"/>
</template>

<script>
  import VoteForm from "../components/VoteForm";

  export default {
    components: {VoteForm},
    async asyncData({store}) {
      const votePairs = await store.dispatch('vote/fetchVotePairs', {subjectCategory: "Кошки" });
      return {
        votePairs,
        currentPair: votePairs[0]
      }
    },
  }
</script>

<style scoped>

</style>
