<template>
  <footer>
      <p>{{copyright}}</p>
  </footer>
</template>

<script>
export default {
    data(){
        return{
            copyright: 'Copyright 2020 Abdus-Samee'
        }
    }
}
</script>

<style scoped>
    footer{
        background: #222;
        padding: 6px;
    }

    p{
        text-align: center;
        color: lightgreen;
    }
</style>