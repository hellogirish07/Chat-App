// server.js
const http = require('http');
const express = require('express');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

// Handle socket connections
io.on('connection', (socket) => {
    console.log('A user connected');

    // Prompt for username
    socket.on('set username', (username) => {
        socket.username = username;
        io.emit('chat message', { msg: `${username} joined the chat`, user: 'system' });
    });

    // Broadcast messages to all users
    socket.on('chat message', ({ msg, user }) => {
        io.emit('chat message', { msg, user });
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        if (socket.username) {
            io.emit('chat message', { msg: `${socket.username} left the chat`, user: 'system' });
        }
        console.log('A user disconnected');
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});