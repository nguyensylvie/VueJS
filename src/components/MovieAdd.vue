<template>
  <v-container>
      <v-col cols="12">
        <v-card
          class="mx-auto"
          max-width="344"
        >
          <v-card-text>
            <div class="text--primary">
              Ajouter un film
            </div>
            <v-text-field
              v-model="movieTitle"
              :rules="nameRules"
              :type="text"
              label="Titre"
            ></v-text-field>
            <v-text-field
              v-model="movieYear"
              :rules="nameRules"
              :type="number"
              label="Année"
            ></v-text-field>
            <v-text-field
              v-model="movieLanguage"
              :rules="nameRules"
              :type="text"
              label="Langue"
            ></v-text-field>
            <v-text-field
              v-model="movieDirector"
              :rules="nameRules"
              :type="text"
              label="Réalisateur"
            ></v-text-field>
            <v-text-field
              v-model="movieGenre"
              :rules="nameRules"
              :type="text"
              label="Genre"
            ></v-text-field>
            <v-text-field
              v-model="movieURL"
              :rules="nameRules"
              :type="text"
              label="URL"
            ></v-text-field>
            <v-col class="d-flex" cols="12" sm="6">
              <v-select
                v-model="movieNote"
                :items="notes"
                :type="number"
                label="Note"
              ></v-select>
            </v-col>
          </v-card-text>
          <v-card-actions>
            <v-btn
              v-on:click="add"
              text
              color="deep-blue accent-4"
            >
              Ajouter
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-container>
</template>

<script>
  export default {
      name: 'MovieAdd',
      props: ["movie"],
      methods: {
        add() {
          this.$emit("add");
        }
      }
    };
</script>
