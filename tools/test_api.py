import requests
import sys

def test_vuecompile():

    d = {
        'html': '<div @click="test">111</div>'
    }

    r = requests.post('http://localhost:3000/api/vuecompile', json=d)
    print(r.text)

def test_babel():

    d = {
        'js': """
            async function test(){
                return 1
            }

            function *next(){
                for(let i=0; i<10; i++){
                    yield i
                }
            }

            let a = [1, 2, 3]
            a.filter(x=>x==1)

        """
    }

    r = requests.post('http://localhost:3000/api/justbabel', json=d)
    print(r.text)


def test_cjs():

    d = {
        'js': """
Vue.component('p_trialreg-bp',{
    template:`
        <div>
            <a-switch :d="ap" text="是否同意员工转正" required update k="agreeendtrial2" ></a-switch>
            <div v-if="ap.agreeendtrial2=='t'" >同意后, 员工将于{{ap.endtrialday2}} 起转正</div>
            <div v-if="ap.agreeendtrial2=='f'">
                <a-mulinput :d="ap" text='原因' required k="newendtrialreason2" ></a-mulinput>
            </div>
        </div>`,
    data(){
        return { ap:ap0.adata, username:username, ap0:ap0 }
    }
})
        """
    }

    r = requests.post('http://localhost:3000/api/cjs', json=d)
    print(r.text)


def test_chtml():

    d = {
        'html': """
<div id="app" >
    <span>111</span>
</div>

<script>
    new Vue({
        el:"#app",
        data(){
            return {}
        }
    })
</script>
        """
    }

    r = requests.post('http://localhost:3001/api/chtml', json=d)
    print(r.text)


def test_minifyjs():

    d = {
        'js': """
    function test(){
        let a = 1
        let b = 2
        console.log(a+b)
    }
        """
    }

    r = requests.post('http://localhost:3000/api/justminify', json=d)
    print(r.text)


def test_cjs_babel():
    r = requests.get('http://10.1.1.16/hrtest/assets/js/ue.js')
    d = {
        'js': r.text
    }
    r = requests.post('http://localhost:3000/api/cjs', json=d)
    d = {
        'js': r.text
    }
    r = requests.post('http://localhost:3000/api/justbabel', json=d)
    print(r.text)

def test_readability():
    r = requests.get('http://localhost:3001/readability?test=1')
    print(r.text)

if __name__=='__main__':
    globals()[sys.argv[1]]()