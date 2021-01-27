<template>
  <v-container class="pa-4 text-center">
    <v-row
      class="fill-height"
      align="center"
      justify="center"
    >
      <template v-for="(item, i) in items">
        <v-col
          :key="i"
          cols="12"
          md="4"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
            >
              <v-img
                :src="item.img"
                height="400px"
              >
                <v-card-title class="title white--text">
                  <v-row
                    class="fill-height flex-column"
                    justify="space-between"
                  >
                    <p class="mt-4 subheading text-left">
                      {{ item.title }}
                    </p>

                    <div>
                      <p class="ma-0 body-1 font-weight-bold font-italic text-left">
                        {{ item.text }}
                      </p>
                      <p class="caption font-weight-medium font-italic text-left">
                        {{ item.subtext }}
                      </p>
                    </div>

                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                        style="height: 100%;"
                      >
                        {{ item.place }}
                      </div>
                    </v-expand-transition>


                    <div class="align-self-center">

                    </div>
                  </v-row>
                </v-card-title>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          title: 'Mill Game from ...',
          text: `Nine Men’s Morris, carved on the floor of the platform between the Bell Tower and the Dome of Diocletian’s Mausoleum in Split, Croatia.`,
          subtext: 'Photo: Helen Goodchild, June 29, 2009.',
          place: 'Croatia' ,
          img: 'Mill1.jpg',
        },
        {
          title: 'Mill Game from ...',
          text: 'Nine Men’s Morris carved into stone in the ruins of Byzantine church, St. John’s Basilica, Selçuk, Turkey.',
          subtext: 'Photo: Tolka Rover, October 22, 2009.',
          place: 'Turkey' ,
          img: 'Mill2.jpg',
        },
        {
          title: 'Mill Game from ...',
          text: 'Wooden Nine Men’s Morris from medieval Velikiy Novgorod, Russia. Novgorod State United Museum. ',
          subtext: 'Photo: Professor Michael Fuller, St. Louis Community College, 2006.',
          place: 'Russia' ,
          img: 'Mill3.jpg',
        },
        {
          title: 'Mill Game from ...',
          text: 'Nine Men’s Morris in Hadrian’s Library, Athens, Greece.',
          subtext: 'Photo taken: March 4, 2011.',
          place: 'Greece' ,
          img: 'Mill4.jpg',
        },
        {
          title: 'Mill Game from ...',
          text: 'Nine Men’s Morris on the south wall window ledge of the Church of St. John the Baptist in Northorpe Lincolnshire, England.',
          subtext: 'Photo taken: June 8, 2017.',
          place: 'England' ,
          img: 'Mill5.jpg',
        },
      ],
      transparent: 'rgba(255, 255, 255, 0)',
    }),
  }
</script>

<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
 }

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>