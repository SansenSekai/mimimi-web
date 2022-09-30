export const state = () => ({})

export const mutations = {
}

export const actions = {
  async register({commit, state}, data) {
    return await this.$axios.$post('/proxy/api/auth/register', data );
  },
}

export const getters = {
}
