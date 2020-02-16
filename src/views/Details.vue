<template>
  <div class="details">
    <MovieDetails/>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieDetails from '@/components/MovieDetails.vue'

export default {
  name: 'Details',
  components: {
    MovieDetails
  }
}
</script>
