// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

var { Readability } = require('@mozilla/readability');
var { JSDOM } = require('jsdom');

function tinyHtml(src, url){
  var doc = new JSDOM(src, {
    url
  });
  let reader = new Readability(doc.window.document);
  let article = reader.parse();
  return article
}

function test(){
  var src = "<body>Look at this cat: <img src='./cat.jpg'></body>"
  var url = "https://www.example.com/the-page-i-got-the-source-from"
  return tinyHtml(src, url)
}

export default (req, res) => {
  res.statusCode = 200
  var r = {}
  if(req.query.test){
    r = test()
  } else {
    r = tinyHtml(req.body, req.query.url)
  }
  res.json(r)
}
