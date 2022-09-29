export const state = () => ({})

export const mutations = {
}

export const actions = {
  async fetchVotePairs({commit, state}, payload) {
    return await this.$axios.$get('/proxy/vote/pairs', {params: payload});
  },
}

export const getters = {
}
