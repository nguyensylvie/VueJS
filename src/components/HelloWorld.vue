<template>
  <v-container>
    <v-row class="text-center">

      <!-- Nombre de films -->
      <v-col offset-md="5">
        <v-input>
            Nombre de films : {{ filteredMovies.length }}
        </v-input>
      </v-col>

      <!-- Champ de recherche -->
      <v-col cols="4" offset-md="4">
        <v-text-field
          v-model="search"
          label="Recherche (Titre, Année de sortie, Réalisateur)"
          placeholder="Recherche"
          outlined
        ></v-text-field>
      </v-col>

      <!-- Liste de films -->
      <v-col cols="6" class="mx-auto">
        <v-expansion-panels>
          <v-expansion-panel
            v-for="(movie, i) of filteredMovies" 
            v-bind:key="i"
          >
            <v-expansion-panel-header v-on:click="display(i)"><b>{{ movie.title }}, {{ movie.year }}</b></v-expansion-panel-header>
            <v-expansion-panel-content v-if="movie.display">

              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Note {{movie.note}}/5</v-list-item-title>
                    <v-rating
                      v-model="movie.note"
                      background-color="orange lighten-3"
                      color="orange"
                      disabled
                    ></v-rating>
                </v-list-item-content>
              </v-list-item>

              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>Langue</v-list-item-title>
                  <v-list-item-subtitle>{{movie.language}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title>Réalisateur</v-list-item-title>
                  <v-list-item-subtitle>{{movie.director}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
          
              <v-list-item four-line>
                <v-list-item-content>
                  <v-list-item-title>Genre</v-list-item-title>
                  <v-list-item-subtitle>{{movie.genre}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-list-item five-line>
                <v-list-item-content>
                  <v-list-item-title>URL</v-list-item-title>
                  <v-list-item-subtitle><a v-bind:href="movie.url">Poster</a></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <br>
              <v-btn small color="primary" v-on:click="edit(i)">Modifier</v-btn>
              <MovieItem v-bind:movie="movie" v-on:remove="removeMovie(i)"></MovieItem>
              <router-link to="/moviedetails">Voir détails</router-link>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>

      <!-- Ajouter un film -->
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
              label="Titre"
              required
            ></v-text-field>
            <v-text-field
              v-model="movieYear"
              label="Année"
              required
            ></v-text-field>
            <v-text-field
              v-model="movieLanguage"
              label="Langue"
            ></v-text-field>
            <v-text-field
              v-model="movieDirector"
              label="Réalisateur"
            ></v-text-field>
            <v-text-field
              v-model="movieGenre"
              label="Genre"
            ></v-text-field>
            <v-text-field
              v-model="movieURL"
              label="URL"
            ></v-text-field>
            <v-col class="d-flex" cols="12" sm="6">
              <v-select
                v-model="movieNote"
                :items="notes"
                label="Note"
              ></v-select>
            </v-col>
          </v-card-text>
          <v-card-actions>
            <v-btn
              v-on:click="addMovie"
              text
              color="deep-blue accent-4"
            >
              Ajouter
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  import MovieItem from '.././components/MovieItem.vue';
  import Movie from ".././Movie.js";

  export default {
    name: 'HelloWorld',
    props: ["movie"],
    components: {
      MovieItem
    },
    mounted() {
      this.sortMovies();
    },
    data() {
      return {
        movies: [
          new Movie("Titanic", 1997, "Anglais", "James Cameron", "Romance dramatique", "https://images-na.ssl-images-amazon.com/images/I/91J0KtuFMAL._AC_SL1500_.jpg", 4),
          new Movie("Avatar", 2009, "Anglais", "Christopher Nolan", "Science-fiction", "https://i.ebayimg.com/images/g/GB4AAMXQDjhQ4dGk/s-l300.jpg", 3),
          new Movie("Star Wars", 1977, "Anglais", "Frank Darabont", "Fantasy et science-fiction", "https://www.rts.ch/2019/07/31/13/54/8594323.image", 5)
        ],
        movieTitle: "",
        movieYear: null,
        movieLanguage: "",
        movieDirector: "",
        movieGenre: "",
        movieURL: "",
        movieNote: "",
        search: "",
        notes: ['1','2','3','4','5'],
      };  
    },
    methods: {
      addMovie() {
        this.movies.push(new Movie(this.movieTitle, this.movieYear, this.movieLanguage, this.movieDirector, this.movieGenre, this.movieURL, this. movieNote));
        this.sortMovies();
      },
      removeMovie(i) {
        this.movies.splice(i, 1);
      },
      sortMovies() {
        this.movies.sort((movie1, movie2) => {
          let title1 = movie1.title.toLowerCase();
          let title2 = movie2.title.toLowerCase();
          if (title1 > title2) return 1;
          else if (title1 < title2) return -1;
          else return 0;
        });
      },
      display(i) {
        this.movies[i].display = true;
      },
      edit(i) {
        this.movies[i].edit = true;
      }
    },
    computed: {
      filteredMovies() {
        return this.movies.filter(movie => (movie.title.toLowerCase().includes(this.search.toLowerCase()) ||
                                            movie.director.toLowerCase().includes(this.search.toLowerCase()) ||
                                            !this.search || movie.year.toString().startsWith(this.search)));
      }
    }
  };
</script>
