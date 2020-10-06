<template>
  <div>
    <Header></Header>
    <Ninjas></Ninjas>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import Ninjas from './components/Ninjas';

export default {
  name: 'App',
  components: {
    Header, Footer, Ninjas
  }
}

</script>

<style>
  
</style>
