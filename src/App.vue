<template>
  <v-app>

    <v-app-bar
      app
      color="secondary"
      dark
    >
      <div class="d-flex align-center">
        <h1>{{message}}</h1>
      </div>
    </v-app-bar>

    <v-content>
      <router-link to="/">Accueil</router-link>
      <router-link to="/movieadd">Ajouter un film</router-link>
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    message: "Films"
  }),
};
</script>
