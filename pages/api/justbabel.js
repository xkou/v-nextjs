// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const babel = require("@babel/core");

const options = {
    "presets": [
      [
        "@babel/preset-env",
        {
            "targets": {
                "browsers": [ "last 1 version", "ie >= 11" ],
                "node": "6.10"
            }
        }
      ]
    ],
    "sourceType": "script",
    "plugins": [
        "@babel/plugin-transform-object-assign",
        "@babel/plugin-proposal-object-rest-spread",
        "babel-plugin-array-includes",
        "transform-es2017-object-entries"
    ]

  }
export default (req, res) => {
  res.statusCode = 200
  let c = babel.transformSync(req.body.js, options)
  res.json(c)
}
