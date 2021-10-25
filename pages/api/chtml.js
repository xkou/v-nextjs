// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require('fs')
const hd = require('htmldom')
const { Parser } = require("acorn")
const compiler = require('vue-template-compiler')

let dom

function handle(e){
    for(let o of e.children){
        if(o.type=='tag' && o.name=='script') handle_script(o)
        if(o.type=='tag' && ['html', 'body'].includes(o.name) ) handle(o)
    }
}

function handle_script(o){
    if(o.attributes['d']!==undefined) return
    const ast = Parser.parse(o.textContent)
    let txt = o.textContent
    let offset = 0
    function sub(p1, p2){
        return o.textContent.substring(p1, p2)
    }
    function replace(p1, p2, str){
        p1 = p1 + offset
        p2 = p2 + offset
        txt = txt.substring(0, p1) + str + txt.substring(p2, txt.length)
        offset += str.length - (p2-p1)
    }
    for(let t of ast.body){
        let content = o.textContent.substring(t.start, t.end)
    //    console.log('!!! tt', content)
        if(content.search('Vue.component')>-1){
            handle_component(t, replace, sub)
        } else if (content.search('new Vue')>-1){
            handle_new_vue(t, replace, sub)
        }
    }
 //   fs.writeFileSync('t.js', txt)
    o.textContent = txt
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
            console.log('convert component', t.expression.arguments[0].value)
            let v = prop.value
            let vstr = sub(v.start, v.end)
            let c = compiler.compile(vstr, {delimiters:['[[', ']]']})
            rep(v.start, v.end, `null, _compiled: true, ${S(c)}, render(){ ${c.render} }`)
            break
        }
    }
}

function handle_new_vue(t, rep, sub){
    let arg
    if(t.type == 'VariableDeclaration'){
        arg = t.declarations[0].init.arguments[0].properties
    }
    else{
        arg = t.expression.arguments[0].properties
    }
    let el = arg.filter(x=>x.key.name=='el')[0]
    let elid = el.value.value
    let div = dom(elid)
    let vstr = div.outerHTML()
    let c = compiler.compile(vstr, {delimiters:['[[', ']]']})
    dom(elid).html('err')
    console.log('convert vue', elid, vstr.length)
    rep(el.value.start, el.value.end, `'${elid}', _compiled: true, ${S(c)}, ${W(c)}`)
}

export default (req, res) => {
    res.statusCode = 200
    dom = hd(req.body.html)
    console.log(dom)
    let root = dom.root()
    for(let k of root){
        handle(k)
    }
    res.end(dom.html())
}
