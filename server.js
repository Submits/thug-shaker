const express = require('express');
const app = express();
const fetch = require("cross-fetch")

app.get('/info', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
  var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
    var response = await fetch("https://api.ipdata.co/" + ip + "?api-key=bb64be8e2517d29fa9f11891c754882ef04f5d503f2f6e97547a6dda");
    const data = await response.json()
    res.send(data)
})


app.listen(process.env.PORT || 3000, () => {
  console.log("Ready")
})


module.exports = app;
