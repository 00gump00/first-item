<template>
  <div id="app">
<Header></Header>
<router-view></router-view>
<Footer v-show="$route.path=='/home'|$route.path=='/search' " ></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import 'swiper/css/swiper.min.css'


export default {
  name: 'App',
  components: {
     Header,
     Footer
  },
  mounted(){
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
}
</style>
