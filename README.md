
## next.js

### test cli
`
curl https://mazzzystar.github.io/2022/12/29/Run-CLIP-on-iPhone-to-Search-Photos/ | curl localhost:3001/api/readability -H 'Content-Type: application/x'  -d @-  | jq
`

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## notice

npx yarn install before commit

### docker 
docker run -it -v $PWD:/w -w /w -p 3003:3003 --rm --name babel node:20 /usr/local/bin/node node_modules/next/dist/bin/next dev --port 3003

docker run -d -v $PWD:/w -w /w -p 3003:3003 --name babel node:20 /usr/local/bin/node node_modules/next/dist/bin/next dev --port 3003