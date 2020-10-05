<template>
    <div>
        <img class="img-fluid" v-bind:src="image" alt="">
    </div>
</template>

<script>
export default {
    name: "Avatar",
    props: ['image']
}
</script>

<style scoped>
    img{
        border-radius: 50%;
        height: 20vh;
        width: 20vw;
        object-fit: contain;
    }
</style>
