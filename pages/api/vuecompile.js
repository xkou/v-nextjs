// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const compiler = require('vue-template-compiler')

export default (req, res) => {
  res.statusCode = 200
  let j = req.body
  console.log(j.html)
  let options = {}
  if(j.delimiters) options.delimiters = j.delimiters
  let c = compiler.compile(j.html, options)
  res.json(c)
}

// python3 tools/t.py test_vuecompile