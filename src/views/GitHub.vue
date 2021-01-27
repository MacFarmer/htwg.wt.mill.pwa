<template>
  <div class="GitHub">
    <GitHub/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import GitHub from '@/components/GitHub.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Game',
  components: {
  GitHub,
  Footer
  }
}
</script>