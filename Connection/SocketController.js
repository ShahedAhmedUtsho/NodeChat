const { set } = require("mongoose");
const checkLogin = require("../middlewares/common/checkLogin");
const jwt = require('jsonwebtoken');
const Message = require("../Models/message");




const SocketController = (socket, io) => {

    console.log('A user connected:', socket.id);

    // Join the room for a specific chat ID
    socket.on('join-room', (chatId) => {
        console.log(`User joined room: ${chatId}`);
        socket.join(chatId);
    });

    // Listen for incoming messages
    socket.on('send-message', async (messageData) => {
        const { message, chatId, senderId, receiverId } = messageData;

        // Save message to DB
        const newMessage = new Message({
            ChatId: chatId,
            sender: senderId,
            receiver: receiverId,
            message: message,
        });
        await newMessage.save();
        console.log("newMessage", "to room", messageData.chatId)
        // Emit the message to the specific room
        io.to(chatId).emit('receive-message', newMessage);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });






}

module.exports = SocketController;