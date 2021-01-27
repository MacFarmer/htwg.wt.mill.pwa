<template>
  <div class="history pa-16">
      <h1 id="nine_header">History</h1>

      <p><a class="underlined underlined--thick">Hover over the text and find the important informations. Give it a try!</a></p>

         <p>
         <h3><b>Here you can find more information about one of the oldest games of humankind: <a class="underlined underlined--thick">Mill or Nine men's morris</a></b></h3>
         </p>

                    <p>
                        <br>Nine Men’s Morris is an ancient game, popular in <a class="underlined underlined--thick">Ancient Rome and the medieval period.</a>
                        <br>No one really knows where and when the game originated.
                        <br>The oldest building that has a Nine Men’s Morris board carved into its stones is an Egyptian temple at Kurna, Egypt, which <a class="underlined underlined--thick">dates to roughly 1400 BCE.</a>
                        <br>However, it is not known when the game board itself was carved into the Kurna temple’s roofing slabs; was it at the time of the construction or much later in history.
                        <br>There are many Nine Men’s Morris <a class="underlined underlined--thick">carved into various buildings’ stones</a> through out the Roman Empire and in the seats of many medieval cathedrals.
                        <br>This game is known by many names, such as Mill or Windmill, most probably, because <a class="underlined underlined--thick">the shape of the board looks like a windmill,</a> and Merrels, from the Latin word merellus, which means “gaming piece”.
                        <br>The name Nine Men’s Morris seems to have been originated by <a class="underlined underlined--thick">Shakespeare in his play, A Midsummer Night’s Dream</a> (Act II, Scene I), in which Titania refers to such a board by saying, “The nine men’s morris is filled up with mud”.
                        <br>The rules of the game are well known, mostly because <a class="underlined underlined--thick">the game has been played continuously in Europe since the Roman period.</a>

                    </p>
  </div>
</template>

<style lang="scss" scoped>
@import './HeaderStyle.css';

// Now that is interesting
.underlined {
  flex: 1;
  font-size: 1em;
  line-height: 1.2;
  text-decoration: none;
  background-image: linear-gradient(to right, #ffcc66 0, #ffcc66 100%);
  background-position: 0 1.2em;
  background-size: 0 100%;
  background-repeat: no-repeat;
  transition: background .5s;
  &:hover, {
    background-size: 100% 100%;
  }
  &--thin {
    background-image: linear-gradient(to right, black 0, black 100%);
  }
  &--thick {
    background-position: 0 -0.1em;
  }
  &--offset {
    background-position: 0 0.2em;
    //didn't find another solution than mask the underline shape by a box shadow with the same color than the bg
    box-shadow: inset 0 -.5em 0 0 white;
  }
  &--gradient {
    background-position: 0 -0.1em;
    background-image: linear-gradient(to right, yellow 0, lightgreen 100%);
  }
  &--reverse {
    background-position: 100% -0.1em;
    transition: background 1s; //yep, that's a long link
    background-image: linear-gradient(to right, yellow 0, yellow 100%);
  }
}

</style>