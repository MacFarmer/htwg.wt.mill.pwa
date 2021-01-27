<template>
    <div class="rules pa-16">

        <h1 id="nine_header">Rules</h1>

        <p><a class="underlined underlined--thick">Hover over the text and find the important informations. Give it a try!</a></p>

        <p>
        <h3><b>The game proceeds in <a class="underlined underlined--thick">3 phases:</a></b></h3>
        </p>

        <ol type="1">
                <li>There are <a class="underlined underlined--thick">2 players</a> in the game.</li>
                <li>The board consists of a grid of 3 squares one inside the other, with lines connecting the <a class="underlined underlined--thick">24 intersections</a> on which pieces can be placed.</li>
                <li>Each player has <a class="underlined underlined--thick">9 pieces</a>, called “men” of a given color.</li>
                <li>Each player tries to form a <a class="underlined underlined--thick">“mill”</a>, which is 3 of their pieces in one row connected by the line. <a class="underlined underlined--thick">To form a mill, the pieces can be placed either horizontally or vertically, but not at at a 90 degree angle, and they must be connected by lines.</a></li>
                <li>The game begins when all pieces are off the board.</li>
                <li>Players decide who goes first either by agreement or by lot, such as toss of a coin.</li>
                <li>There are <a class="underlined underlined--thick">3 phases</a> to the game: </li>
                <ol type="a">
                    <li><a class="underlined underlined--thick">Phase 1:</a> Placing the men onto the board</li>
                    <ol type="i">
                        <li>The players take turns <a class="underlined underlined--thick">placing one piece at a time onto the board,</a> onto the empty dots.</li>
                        <li>During this phase each player tries to prevent the opponent from forming a mill. However, if a mill was formed anyway, then the <a class="underlined underlined--thick">player who formed a mill gets to remove one of the opponent’s pieces,</a> of their choice, from the board. The piece removed has to be not in a mill itself. If all of the opponent’s pieces form a mill, then none of the opponent’s pieces can be removed.</li>
                        <li>Players can form more than one mill in a single move by strategically placing their pieces. If they form more than one mill, then they get to remove as many of the opponent’s pieces, as the number of mills that they formed.</li>
                        <li>The act of removing an opponent’s piece after forming a mill is called, <a class="underlined underlined--thick">“pounding”</a>.</li>
                    </ol>
                    <li><a class="underlined underlined--thick">Phase 2:</a> Moving the men on the board </li>
                    <ol type="i">
                        <li>Once all of the pieces have been placed onto the board, the <a class="underlined underlined--thick">players begin moving their pieces,</a> in alternating moves, one dot at a time to try to form mills in the same fashion as in the first phase.</li>
                        <li>In the second phase pieces can only move to an adjacent dot, and pieces cannot jump over each other or skip dots if more than one are available in a row.</li>
                        <li>Players can form more than one mill in a single move by strategically placing their pieces. If they form more than one mill, then they get to remove as many of the opponent’s pieces, as the number of mills that they formed.</li>
                        <li><a class="underlined underlined--thick">A player is allowed to move a piece out of a mill and then moving it back on the next move to form the mill again.</a> If this happens it is considered as if they formed a new mill and they get to remove one of the opponent’s pieces.</li>
                    </ol>
                    <li><a class="underlined underlined--thick">Optional Phase 3:</a> Flying the men across the board </li>
                    <ol type="i">
                        <li>When one of the <a class="underlined underlined--thick">players has been reduced down to 3 last pieces, phase 2 ends</a> and phase 3 begins.</li>
                        <li>In phase 3, <a class="underlined underlined--thick">the limitation of moving only to an adjacent dot is removed,</a> and both players can move their pieces to any available dot, even if that requires skipping dots or jumping over other pieces. Such movement is called “flying”.</li>
                        <li>Phase 3 is optional and is considered a variation of the game <a class="underlined underlined--thick">to give an advantage to the losing opponent once they only have one piece left.</a> If the players agree not to play phase 3 then they continue playing phase 2 until the end of the game.</li>
                    </ol>
                </ol>
                <li><a class="underlined underlined--thick">The game ends when one of the players is reduced to two pieces, and cannot any longer form mills,</a> or if a player has no legal moves to make, making their opponent the winner in either situation.</li>
            </ol>
        </div>
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