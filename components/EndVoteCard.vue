<template>
  <v-card
    class="mx-auto"
    max-width="500"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          {{ messages[result].title }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ messages[result].description }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      >
        <v-img
          :src="messages[result].image"
        ></v-img>
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions class="justify-center">
      <v-btn
        @click="onFinalButtonClicked"
        outlined
        rounded
        text
      >
        {{ messages[result].button }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    props: {
      result: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        messages: {
          success: {
            title: "Ваши голоса учтены!",
            description: "Вы так же можете ознакомиться с результатами голосования",
            image: "https://papik.pro/uploads/posts/2021-12/thumbs/1639194281_31-papik-pro-p-galochka-klipart-33.jpg",
            button: "Посмотреть результаты",
          },
          failure: {
            title: "Произошла ошибка.",
            description: "Очень жаль, но голоса не были учтены, попробуйте снова.",
            image: "https://papik.pro/uploads/posts/2021-12/thumbs/1639305029_5-papik-pro-p-klipart-krestik-5.jpg",
            button: "На главную"
          }
        }
      }
    },
    methods: {
      onFinalButtonClicked(id) {
        if(this.result === "success") {
          this.$router.push({name: "top", query: {category: this.$route.query.category}})
        } else {
          this.$router.push({name: "index"})
        }
      }
    }
  }
</script>

<style scoped>

</style>
