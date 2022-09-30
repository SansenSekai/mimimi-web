<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <n-link to="/">
        <v-toolbar-title v-text="title" />
      </n-link>
      <v-spacer />
      <v-toolbar-title v-show="$auth.loggedIn" class="mr-4">{{getUserName}}</v-toolbar-title>
      <v-btn
        v-show="$auth.loggedIn"
        rounded
        color="blue-grey"
        @click="onLogoutClicked"
      >Выйти</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  middleware: 'auth',
  name: 'DefaultLayout',
  head() {
    return {
      title: 'Мимимеметр',
    }
  },
  data() {
    return {
      clipped: false,
      fixed: false,
      title: 'Мимимиметр',
    }
  },
  computed: {
    getUserName() {
      if(!this.$auth.loggedIn) {
        return ""
      }
      return JSON.parse(Buffer.from(this.$auth.strategy.token.get().split(".")[1], 'base64').toString()).sub.split(",")[1]
    }
  },
  methods: {
    onLogoutClicked() {
      this.$auth.logout()
    }
  }
}
</script>
