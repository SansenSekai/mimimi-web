export const state = () => ({})

export const mutations = {
}

export const actions = {
  async fetchSubjectCategories({commit, state}) {
    return await this.$axios.$get('/proxy/api/subject/categories');
  },
  async fetchAvailableSubjectCategories({commit, state}) {
    return await this.$axios.$get('/proxy/api/subject/categories/available');
  },
  async fetchSubjectTop({commit, state}, payload) {
    return await this.$axios.$get('/proxy/api/subject/top', {params: payload});
  },
}

export const getters = {
}
