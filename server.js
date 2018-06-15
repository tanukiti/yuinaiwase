const express = require("express")
const app = express()


app.use(express.static('public'));

app.get("*",(req, res) => {
	res.sendfile("index.html")
})

app.listen(4000, () => {
	console.log("listen on http://localhost:4000")
})