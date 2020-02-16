<template>
  <div class="edit">
    <MovieEdit/>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieEdit from '@/components/MovieEdit.vue'

export default {
  name: 'Edit',
  components: {
    MovieEdit
  }
}
</script>
