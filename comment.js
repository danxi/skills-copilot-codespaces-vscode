// create web server
var http = require('http');
var url = require('url');
var fs = require('fs');
var ROOT_DIR = "html/";
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/test';

http.createServer(function (req, res) {
  var urlObj = url.parse(req.url, true, false);
    console.log(urlObj);
  });
