<template>
  <v-footer
    color="primary lighten-1"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
        <v-btn
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          class="mx-4 white--text"
        >
          <v-icon size="24px">
            {{ item.icon }}
          </v-icon>
        </v-btn>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Marc Freibauer & Maurice Gutmann</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title:'Home', icon: 'mdi-home', to:'/'},
        { title:'Rules', icon: 'mdi-clipboard-list', to:'/rules'},
        { title:'Game', icon: 'mdi-google-controller', to:'/game'},
        { title:'History', icon: 'mdi-book-open-page-variant', to:'/history'},
        { title:'Github', icon: 'mdi-github', to:'https://github.com/MacFarmer/de.htwg.wt.muehle'},
      ],
    }),
  }
</script>