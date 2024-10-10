const { set } = require("mongoose");
const checkLogin = require("../middlewares/common/checkLogin");
const jwt = require('jsonwebtoken');




const SocketController = (socket, io) => {

    const byNsp = io.of('/buy');
    const sellNsp = io.of('/sell');


    byNsp.on('connection', (socket) => {

        byNsp.emit('myEvent', "hello from buy")
    });



    sellNsp.on('connection', (socket) => {

        sellNsp.emit('myEvent', "hello from sell")
    });










    socket.on('disconnect', () => {
        console.log('user disconnected');
    });






}

module.exports = SocketController;