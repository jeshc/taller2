

var socketServer = require('socket.io').listen(8082);


socketServer.on('connect', function(socketClient) {
  console.log('Cliente conectado al taller 2');
  socketServer.emit('respServer','Estas conectado al servidor principal');

  // cuando el cliente manda el evento 'saluda'
  socketClient.on('saluda',function(data){
      console.log(data);
  });


});
