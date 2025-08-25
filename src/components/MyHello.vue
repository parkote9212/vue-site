<template>
    <div>
        <p>test</p>
{{ message }}
</div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref("msg");
</script>

<style scoped>
p{
    background-color: yellow;
}

div {
    border: 3px solid grey;
}
</style>