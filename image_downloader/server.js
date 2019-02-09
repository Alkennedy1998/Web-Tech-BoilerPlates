var express = require('express');
var app = require("./app.js")

var port = 4000;

app.listen(port, () => console.log(`Image downloader listening on port ${port}!`))