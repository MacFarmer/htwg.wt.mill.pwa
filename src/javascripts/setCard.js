import store from '../assets/data.js'

global.jQuery = require('jquery');

let $ = global.jQuery;
window.$ = $;



function setCard() {
    const current_player = store.state.currentPlayer
    const selected_player = store.state.selectedPlayer
    console.log(current_player,selected_player)
    if(current_player === selected_player) {
        if ((current_player) === "A") {
            setCardcurrPlayer()
        } else if ((current_player) === "B") {
            setCardcurrPlayer()
        }
    }else{
        alert("wait your turn")
        return
    }
}

function setCardcurrPlayer() {
    let active = isActive($(".inHand"))
    if (active[0]) {
        for (let i = 0; i < $(".myRow").length; i++) {
            let row = $(".myRow").get(i)
            let cells = row.getElementsByClassName("myCell")
            let activerow = isActive(cells)
            if (activerow[0]) {
                let activeCard = active[1]
                let url = "https://ancient-savannah-40407.herokuapp.com/scrabble/set/" + (activerow[1] - 1) + "/" +  (i-1) +"/" + activeCard
                console.log(url)
                $.ajax({
                    method: "GET",
                    url: url,
                    success: function () {
                        console.log("card set!")
                    }
                });

            }
        }
    }
}


function isActive(array) {
    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        if (element.classList.contains("active")) {
            return [true, i]
        }
    }
    return false

}

export default setCard