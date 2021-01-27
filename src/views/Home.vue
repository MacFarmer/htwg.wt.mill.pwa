
<template>

  <div class="home">

        <Google/>
        <StartGame/>
        <Windmill/>
        <FightMills/>
        <Footer/>

  </div>

</template>

<script>
// @ is an alias to /src
import Google from '@/components/Google.vue'
import StartGame from '@/components/StartGame.vue'
import Windmill from '@/components/Windmill.vue'
import FightMills from '@/components/FightMills.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Google,
    StartGame,
    Windmill,
    FightMills,
    Footer
  }
}
</script>
