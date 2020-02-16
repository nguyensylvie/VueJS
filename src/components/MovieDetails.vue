<template>
  <v-container>
    <v-row class="text-center">
      <h1>Détails</h1>
      {{id}}
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: ['id'],
  };
</script>
