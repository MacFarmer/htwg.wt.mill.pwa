<template>
  <v-app>
    <v-main>
      <git-hub />
      <grid />
      <timer />
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
// @ is an alias to /src

import Grid from "@/components/Grid";
import Timer from "@/components/Timer";
import Footer from '@/components/Footer.vue'


export default {
  name: "App",
  components: {
    Grid,
    Timer,
    Footer
  },
  data: () => ({
    //
  })
};
</script>
<style>
#app {
  background: #232222;
}
</style>

/**
app background
card theme
on hover card
 */