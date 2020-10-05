<template>
  <div id="app" class="center">
    <h1 class="display-1">Vue Routing Example</h1>
    <a href="/home" class="btn btn-primary mr-3">Home</a>
    <a href="/user" class="btn btn-info">User</a>
    <hr>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    font-family: Arial, Helvetica, san-serif;
    line-height: 1.4;
  }

  .center{
    text-align: center;
  }
</style>
