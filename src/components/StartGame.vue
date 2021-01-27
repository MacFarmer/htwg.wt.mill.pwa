<template>

<div align="center" style="margin:70px;">

      <div class="center" style="margin-Bottom:70px; font-weight:300; font-size:20px; font-family:'Roboto';" >
          <p>
              <strong style="  color:#ffa500">
                  Welcome to Mill in the lecture Webtechnologies at HTWG Konstanz. Enjoy!
              </strong>
          </p>
      </div>

    <button class="pulse-button">
       <a style="  color:#ffffff; font-weight:300; font-size:20px; font-family:'Roboto';" v-on:click="$router.push('game');">
          PLAY
       </a>
    </button>
</div>

</template>

<style scoped>

.pulse-button {

  position: relative;
  width: 100px;
  height: 100px;
  border: none;
  box-shadow: 0 0 0 0 rgba(255, 165, 0, 0.7);
  border-radius: 50%;
  background-color: #ffa500;
  background-size:cover;
  background-repeat: no-repeat;
  cursor: pointer;
  -webkit-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  -moz-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  -ms-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
}
.pulse-button:hover
{
  -webkit-animation: none;-moz-animation: none;-ms-animation: none;animation: none;
}

@-webkit-keyframes pulse {to {box-shadow: 0 0 0 45px rgba(255, 165, 0, 0);}}
@-moz-keyframes pulse {to {box-shadow: 0 0 0 45px rgba(255, 165, 0, 0);}}
@-ms-keyframes pulse {to {box-shadow: 0 0 0 45px rgba(255, 165, 0, 0);}}
@keyframes pulse {to {box-shadow: 0 0 0 45px rgba(255, 165, 0, 0);}}

</style>