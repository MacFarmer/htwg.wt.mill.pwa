vue add pwa<template>

  <v-app id="inspire">

    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Mill
          </v-list-item-title>
          <v-list-item-subtitle>
            Menu
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

          <v-toolbar
            flat
            height="72"
          >
            <v-switch
              v-model="$vuetify.theme.dark"
              inset
              label="Dark Theme"
              persistent-hint
            ></v-switch>
          </v-toolbar>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="blue"
      dark
      src="MillBar.jpg"
      prominent
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>


      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Mill Board Game</v-app-bar-title>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>

        <router-view></router-view>

    </v-main>

  </v-app>

</template>



<script>
  export default {
    data: () => ({
        drawer: null,
            items: [
                { title: 'Home', icon: 'mdi-home', to: '/' },
                { title: 'Rules', icon: 'mdi-clipboard-list', to: '/rules' },
                { title: 'Game', icon: 'mdi-google-controller', to: '/game' },
                { title: 'History / Gallery', icon: 'mdi-book-open-page-variant', to: '/history' },
                { title: 'This Project on GitHub', icon: 'mdi-github', to:'https://github.com/MacFarmer/de.htwg.wt.muehle' },
            ],
    }),


    created() {
      if (this.$workbox) {
        this.$workbox.addEventListener("waiting", () => {
          this.showUpgradeUI = true;
        });
      }
    },

    methods: {
      async accept() {
        this.showUpgradeUI = false
        await this.$workbox.messageSW({ type: "SKIP_WAITING" });
      }
    },
  }

</script>
