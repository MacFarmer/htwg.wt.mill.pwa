<template>
  <div class="history">
    <HistoryText/>
    <Gallery/>
    <Footer/>

  </div>
</template>

<script>
// @ is an alias to /src
import HistoryText from '@/components/HistoryText.vue'
import Gallery from '@/components/Gallery.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Game',
  components: {
  HistoryText,
  Gallery,
  Footer
  }
}
</script>
