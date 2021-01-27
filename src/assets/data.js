import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const point = {
    "=": 1,
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 3,
    "1": 1,
    "2": 1,
    "3": 2,
    "4": 2,
    "5": 3,
    "6": 2,
    "7": 4,
    "8": 2,
    "9": 2,
    "0": 1
}

function fill(json,size) {
    let data = []
    let cells = []
    for (let j = 0; j < size; j++) {
        for (let i = 0; i < size; i++) {
            data[i] = json[i][j].value
        }
        cells[j] = data
        data = []
    }
    return cells
}

function fillKind(json,size) {
    let data = []
    let kind = []
    for (let j = 0; j < size; j++) {
        for (let i = 0; i < size; i++) {
            data[i] = json[i][j].kind
        }
        kind[j] = data
        data = []
    }
    return kind
}

function fillHand(json) {
    let list = []
    json.forEach(card =>
        list.push(card.value)
    )
    return list
}

function fillPlayer(json) {
    if(json.status === "pA" || json.status === "fc"){
        return "A"
    }else{
        return "B"
    }
}

function fillHandSize(json) {
    if(store.state.currentPlayer === "A"){
        return json.gameField.playerList.A.hand.length
    }else{
        return json.gameField.playerList.B.hand.length
    }
}


const store = new Vuex.Store({
    state: {
        cells: [],
        kind: [],
        size: 15,
        currentPlayer: "",
        selectedPlayer:"Choose",
        handSize:0,
        handA: [],
        handB: [],
        points: point,
        playerPointsA: 0,
        playerPointsB: 0,
        ncards:0,
    },
    mutations: {
        setSize(state,size) {
            state.size = size
        },
        fill(state,payload) {
            state.size = payload.size
            state.cells = fill(payload.json.gameField.grid.cells,state.size)
            state.kind = fillKind(payload.json.gameField.grid.cells,state.size)
            state.handA = fillHand(payload.json.gameField.playerList.A.hand)
            state.handB = fillHand(payload.json.gameField.playerList.B.hand)
            state.currentPlayer = fillPlayer(payload.json)
            state.handSize = fillHandSize(payload.json)
            state.playerPointsA = payload.json.gameField.playerList.A.point
            state.playerPointsB = payload.json.gameField.playerList.B.point
            state.ncards = payload.json.gameField.pile.tilepile.length
        },
        setPlayer(state,player){
            state.selectedPlayer = player
        },
    }
})


export default store