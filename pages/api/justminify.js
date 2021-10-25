// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const minify = require('@node-minify/core');
//const gcc = require('@node-minify/google-closure-compiler');
const uglifyjs = require('@node-minify/uglify-js');

export default async (req, res) => {
  res.statusCode = 200
  let d = await minify({
    compressor: uglifyjs,
    content: req.body.js
  })
  res.end(d)
}

// python3 tools/t.py test_minifyjs