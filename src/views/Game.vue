<template>
  <div class="game">
    <morrisgame/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import morrisgame from '@/components/morris-game.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Game',
  components: {
  morrisgame,
  Footer
  }
}
</script>