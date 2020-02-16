<template>
<v-container>
    <div>Variable de la route : {{ $route.params.var }}</div>
</v-container> 
</template>

<script>
    export default {
        name: "MovieEdit",
    };
</script>