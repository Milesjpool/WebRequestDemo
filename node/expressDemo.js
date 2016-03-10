const express = require('express')
module.exports = function(){return server}

var server = express()
server.type = 'express'

server.get('/', handleRequest)
server.post('/', returnError)


function handleRequest(req, res){
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello World')
}

function returnError(req, res){
  res.writeHead(400, { 'Content-Type': 'text/plain' })
  res.end('Not allowed')
}
