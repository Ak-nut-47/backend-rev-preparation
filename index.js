const express = require("express")
const cors = require("cors")
const server = express();
const port = 3000;
server.use(cors());
server.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>")
});


server.listen(port, () => {
    console.log(`App is running on port ${port}`)
})