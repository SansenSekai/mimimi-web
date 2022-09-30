<template>
  <v-row align="center">
    <v-col
      cols="12"
    >
      <div class="text-center">
          <div class="my-2 pa-10 ma-5">
          <v-btn
            @click="onVoteClicked"
            x-large
            color="blue-grey"
            dark
          >
            Голосование за мимимишность
          </v-btn>
        </div>
      </div>
      <div class="text-center">
        <div class="my-2">
          <v-btn
            @click="onTopClicked"
            x-large
            color="blue"
            dark
          >
            Рейтинг мимимишности
          </v-btn>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    onVoteClicked() {
      this.$router.push({path: "/vote/choice"})
    },
    onTopClicked() {
      this.$router.push({path: "/top/choice"})
    }
  }
}
</script>
