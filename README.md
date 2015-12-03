# chat-app
> A basic chat-app to get started with <a href="https://nodejs.org/">NodeJs</a> and <a href="socket.io">Socket.io</a>

##Resources Used
http://www.tamas.io/simple-chat-application-using-node-js-and-socket-io/ (Basic introduction of how-to-start)
https://github.com/davidmerfield/randomColor (For generating different colours for different Users)

##Installing
1. Make sure you have NodeJS installed
2. Clone the repository into your machine
`git clone https://github.com/nikhilsheoran96/chat-app.git`
3. Run the `npm install` command
`npm install`
4. To start app, set environment variables SERVER_PORT and SERVER_IFACE and run app
`SERVER_PORT=3000 SERVER_IFACE="localhost" nodejs app.js`
5. Goto the url, `http://localhost:3000/` in your browser and enjoy.

####Using on other devices in same network
You can also connect through mobile-devices on same network.
For that, you need to make sure your firewall allows incoming connections through that port.
Run ifconfig | grep -inet
Use the ip on your mobile browser along with the port running the app.

_Note: chat-app has been successfully tested on Ubuntu 14.04 LTS, it should work on others as well._
