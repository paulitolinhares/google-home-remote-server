const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', function(socket){
  socket.on('command', data => {
    console.log('command', { data });
    io.emit('command', data)
  })
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});