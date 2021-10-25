import requests

d = {
    'html': '<div @click="test">111</div>'
}

r = requests.post('http://localhost:3000/api/vuecompile', json=d)
print(r.text)