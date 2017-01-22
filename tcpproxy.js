var tcpProxy = require('tcp-proxy');
 
var server = tcpProxy.createServer({
  target: {
    host: 'ptt.cc',
    port: 23
  }
});
 
server.listen(8800);
