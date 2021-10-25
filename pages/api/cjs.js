// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const fs = require('fs')
const { Parser } = require("acorn")
const compiler = require('vue-template-compiler')

function handle_script(js){
    const ast = Parser.parse(js)
    let txt = js
    let offset = 0
    function sub(p1, p2){
        return js.substring(p1, p2)
    }
    function replace(p1, p2, str){
        p1 = p1 + offset
        p2 = p2 + offset
        txt = txt.substring(0, p1) + str + txt.substring(p2, txt.length)
        offset += str.length - (p2-p1)
    }
    for(let t of ast.body){
        let content = js.substring(t.start, t.end)
        if(content.search('Vue.component')>-1){
            handle_component(t, replace, sub)
        } else if (content.search('new Vue')>-1){

        }
    }
 //   fs.writeFileSync('t.js', txt)
    return txt
}


function W(c){
    return `render(){ ${c.render} }`
}

function S(c){
    let s = c.staticRenderFns.map(x=>`function(){ ${x} }`)
    return `staticRenderFns:[${s.join(',')}]`
}
function handle_component(t, rep, sub){
    let n = t.expression.arguments[1]
    for(let prop of n.properties){
        if(prop.key.name=='template'){
            console.error('convert component', t.expression.arguments[0].value)
            let v = prop.value
            let vstr = sub(v.start, v.end)
            let c = compiler.compile(vstr)
            rep(v.start, v.end, `null, _compiled: true, ${S(c)}, render(){ ${c.render} }`)
            break
        }
    }
}

export default (req, res) => {
  res.statusCode = 200
  let js = handle_script(req.body.js)
  res.end(js)
}

// python3 tools/t.py test_cjs