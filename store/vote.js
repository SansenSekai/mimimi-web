export const state = () => ({})

export const mutations = {
}

export const actions = {
  async fetchVotePairs({commit, state}, payload) {
    return await this.$axios.$get('/proxy/api/vote/pairs', {params: payload});
  },
  async sendVote({commit, state}, data) {
    return await this.$axios.$post('/proxy/api/vote', data);
  },
}

export const getters = {
}
