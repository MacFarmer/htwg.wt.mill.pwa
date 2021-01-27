<template>

  <div>

    <div id="controls">

      <v-card
        flat
        class="py-1"
        colour="blue"
      >
        <v-card-text>
          <v-row
            align="center"
            justify="center"
          >
            <v-col cols="12">
              <p class="text-center">
                Game Center
              </p>
            </v-col>
            <v-btn-toggle
              v-model="toggle_exclusive"
              mandatory
            >
              <v-btn color="orange lighten-1" v-on:click="$router.push('rules');"> Rules
                <v-icon color="orange lighten-1" >mdi-help-circle</v-icon>
              </v-btn>
              <v-btn color="orange lighten-1" @click="reset"> New Game
                <v-icon color="orange lighten-1" >mdi-gamepad</v-icon>
              </v-btn>
              <v-btn color="orange lighten-1" @click="undo"> Undo
                <v-icon color="orange lighten-1" >mdi-arrow-left-circle</v-icon>
              </v-btn>
              <v-btn color="orange lighten-1" @click="resetWinStats"> Clear Stats
                <v-icon color="orange lighten-1" >mdi-close-box</v-icon>
              </v-btn>
              <v-btn color="orange lighten-1" v-on:click="$router.push('/');"> Quit
                <v-icon color="orange lighten-1" >mdi-emoticon-angry </v-icon>
              </v-btn>
            </v-btn-toggle>
          </v-row>
        </v-card-text>
      </v-card>

      <div class="level">
        <div class="level-left">
          <player-area
            :numberOfWins='numberOfWins[0]'
            :isThinking='isThinking[0]'
            :is-active='activePlayer == 0'
            playerName="Player 1"
            />
        </div>

        <div class="level-item">
          <canvas id="gameboard"></canvas>

          <transition name="fade">
            <div v-show="showDrawMessage" class="over-canvas has-centered-text notification is-warning">
              <button class="delete" @click="showDrawMessage=false"></button>
              The game ended in a <strong>draw</strong>.

              <div v-if="drawType=='position-wise'">
                The same position was encountered 3 times.
              </div>

              <div v-if="drawType=='move-wise'">
                No mill has been closed within the last 50 moves.
              </div>

              <div v-if="drawType=='no-move'">
                Neither of both players can move.
              </div>

              <div class="buttons">
                <span class="is-pulled-right button is-small is-outlined" @click="reset">
                  <span class="icon is-medium">
                    <i class="fa fa-fast-backward"></i>
                  </span>
                  <span>New Game</span>
                </span>
              </div>
            </div>
          </transition>

        </div>

        <div class="level-right">
          <player-area
            :numberOfWins='numberOfWins[1]'
            :isThinking='isThinking[1]'
            :is-active='activePlayer == 1'
            playerName="Player 2"
            />
        </div>
      </div>
    </div>
  </div>

</template>




<script src="./morris-game.js"></script>



<style lang="scss" scoped>
@import './fade.scss';
.button_draw
{
  margin:0 auto;
}
.over-canvas
{
  position:absolute;
  opacity: 0.97;
  top: 490px;
  width: 500px;
}
</style>
