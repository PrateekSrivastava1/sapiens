const io = require("socket.io")(6000, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
    console.log("user has been connected");
})