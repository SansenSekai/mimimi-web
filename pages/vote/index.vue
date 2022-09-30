<template>
  <div>
    <vote-form v-if="!finished" :pair="currentPair" @voted="onVoted"
               :key="currentPair.leftSubject.id + currentPair.rightSubject.id"/>
    <end-vote-card v-else-if="success !== null" :result="success ? 'success' : 'failure'"/>
  </div>
</template>

<script>
  import VoteForm from "../../components/VoteForm";
  import EndVoteCard from "../../components/EndVoteCard";

  export default {
    components: {EndVoteCard, VoteForm},
    async asyncData({store, route}) {
      const votePairs = await store.dispatch('vote/fetchVotePairs', route.query);
      return {
        votePairs,
        currentPair: votePairs[0]
      }
    },
    data() {
      return {
        currentPairIndex: 0,
        finished: false,
        success: null,
      }
    },
    methods: {
      onVoted(pair) {
        this.votePairs[this.currentPairIndex++] = pair;
        if (this.currentPairIndex === this.votePairs.length) {
          this.finished = true;
          this.$store.dispatch('vote/sendVote', this.votePairs)
            .then(() => {
              this.success = true
            })
            .catch(() => {
              this.success = false
            });
        } else {
          this.currentPair = this.votePairs[this.currentPairIndex];
        }
        this.$forceUpdate();
      }
    }
  }
</script>

<style scoped>

</style>
