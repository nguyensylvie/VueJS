<template>
<v-container>
    <div v-if="movie.edit">
        <v-col cols="12">
            <v-card
                class="mx-auto"
                max-width="344"
            >
                <v-card-text>
                <div class="text--primary">
                    Modifier le film
                </div>
                <v-text-field
                    v-model="movie.title"
                    label="Titre"
                ></v-text-field>
                <v-text-field
                    v-model="movie.year"
                    label="Année"
                ></v-text-field>
                <v-text-field
                    v-model="movie.language"
                    label="Langue"
                ></v-text-field>
                <v-text-field
                    v-model="movie.director"
                    label="Réalisateur"
                ></v-text-field>
                <v-text-field
                    v-model="movie.genre"
                    label="Genre"
                ></v-text-field>
                <v-text-field
                    v-model="movie.url"
                    label="URL"
                ></v-text-field>
                <v-col class="d-flex" cols="12" sm="6">
                    <v-select
                    v-model="movie.note"
                    :items="notes"
                    label="Note"
                    ></v-select>
                </v-col>
                </v-card-text>
                <v-card-actions>
                <v-btn small color="primary" v-on:click="movie.edit = false">Enregistrer</v-btn>
                <v-btn small color="error" v-on:click="remove">Supprimer</v-btn>
                </v-card-actions>
            </v-card> 
        </v-col>
    </div>
</v-container> 
</template>

<script>
    export default {
        name: "MovieItem",
        props: ["movie"],
        methods: {
            remove() {
                this.$emit("remove");
            }
        },
        data() {
            return {
                notes: ['1','2','3','4','5'],
            };
        }
    };
</script>