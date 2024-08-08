const express = require('express');
const app = express();
const http = require('http').createServer(app);
const path = require('path');
const { Socket } = require('socket.io');

const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


const io = require('socket.io')(http)

io.on('connection', (socket) => {
    console.log("Connected....");
    socket.on("message", (msg) => {

        socket.broadcast.emit('message', msg)
    })   
}) 