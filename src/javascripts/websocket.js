import store from '../assets/data.js'

global.jQuery = require('jquery');

let $ = global.jQuery;
window.$ = $;


//connects to a websocket
// ws://localhost:9000/websocket should be the url to the play server
function connectWebSocket(url) {
    let websocket = new WebSocket(url);
    websocket.setTimeout

    websocket.onopen = function () {
        console.log("Connected to Websocket");
    }

    websocket.onclose = function (code) {
        console.log(code)
        console.log('Connection with Websocket Closed!');
        connectWebSocket(url)
    };

    websocket.onerror = function (error) {
        console.log('Error in Websocket Occured: ' + error);
    };

    websocket.onmessage = function (e) {
        if (typeof e.data === "string") {
            let result = JSON.parse(e.data)
            console.log(result)
            // let grid_size = Object.keys(result.gameField.grid.cells).length
            // My_grid.fill(result.gameField.grid.cells, grid_size)
            if (result.Event === "GameFieldChanged()") {
                loadjson().then(function Json(result) {
                    store.commit("fill", {json: result, size:result.gameField.grid.cells.length})
                })
            }
            if (result.Event === "GridSizeChanged()") {
                loadjson().then(function Json(result) {
                    store.commit("fill", {json: result, size:result.gameField.grid.cells.length})
                })
            }
            if (result.Event === "CardsChanged()") {
                loadjson().then(function Json(result) {
                    store.commit("fill", {json: result, size:result.gameField.grid.cells.length})
                })
            }
        }
    };
}

function loadjson() {
    return new Promise(function (resolve, reject) {
        $.ajax({
            method: "GET",
            url: "https://ancient-savannah-40407.herokuapp.com/json",
            dataType: "json",
            success: function (result) {
                resolve(result)
            },
            error: function (result) {
                reject(result)
            }
        })
    })
}

export default connectWebSocket