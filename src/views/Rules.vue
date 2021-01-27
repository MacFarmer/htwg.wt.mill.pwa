<template>
  <div class="rules">
    <Rules/>
    <Footer/>

  </div>
</template>

<script>
// @ is an alias to /src
import Rules from '@/components/Rules.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Game',
  components: {
  Rules,
  Footer
  }
}
</script>
