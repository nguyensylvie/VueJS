<template>
  <div class="add">
    <MovieAdd/>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieAdd from '@/components/MovieAdd.vue'

export default {
  name: 'Add',
  components: {
    MovieAdd
  }
}
</script>
