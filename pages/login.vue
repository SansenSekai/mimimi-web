<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" dense>
      <v-col cols="12" sm="8" md="4" lg="4">
        <v-card elevation="0">
          <div class="text-center">
            <h1 class="mb-2">Login</h1>
          </div>
          <v-card-text>
            <v-form>
              <v-text-field v-model="login.username" label="Введите логин" name="login"
                            prepend-inner-icon="mdi-account"
                            type="email" class="rounded-0" outlined></v-text-field>
              <v-text-field v-model="login.password" label="Введите пароль" name="password"
                            prepend-inner-icon="mdi-lock"
                            type="password"
                            class="rounded-0" outlined></v-text-field>
              <v-btn class="rounded-0" color="#000000" x-large block @click="onLoginClick">Войти</v-btn>
              <v-btn class="rounded-0 mt-4" color="blue" large block @click="onRegisterClick">Зарегистрироваться</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        login: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      async onLoginClick() {
        await this.$auth.loginWith('local', {
          data: this.login
        }).then(response => {
          this.$axios.setToken(response.accessToken, 'Bearer');
          console.log(this.$auth.loggedIn)
          this.$router.push({path: '/'});
        }).catch((err) => {
          alert(err)
        })
      },
      onRegisterClick() {
        this.$store.dispatch('login/register', this.login)
          .then(() => this.onLoginClick())
          .catch(() => alert("Ошибка регистрации"))
      }
    }
  }
</script>

<style scoped>

</style>
