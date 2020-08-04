<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: "App",
  data() {
    return {
      eventBus: new Vue()
    };
  },
  components: {
    // Login
  },
  mounted() {
    // document.getElementById("loader").style.display = "none";
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  }
};
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
  /* min-height: 400px;
  display: flex;
  background-image: url("assets/img/bg0503.jpg") !important; */
}
</style>
