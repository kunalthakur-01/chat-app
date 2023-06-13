let io;

const onlineusers = {};

module.exports = {
    init: (httpServer) => {
        io = require('socket.io')(httpServer, {
            cors: {
              origin: '*',
            }
          });
        return io;
    },
    getIO: () => {
        if(!io) throw new Error('Socket.io not initialized');
        return io;
    },
    addOnlineUsers: (userId, socketId) => {
      if(!io) throw new Error('Socket.io not initialized');
      onlineusers[userId] = socketId;
      // console.log(onlineusers)
    },
    onlineusers,
    sendMessage: (to, data) => {
      if(!io) throw new Error('Socket.io not initialized');
      const sendUserSocket = onlineusers[to];
      if(sendUserSocket) io.to(sendUserSocket).emit('msg-sent', data);
      // console.log(sendUserSocket)
    }
};