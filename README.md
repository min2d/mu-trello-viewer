# mu-trello-viewer

> My scrumtrulescent Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


# 仕様
## List
Apiキー、トークン、ユーザ名、ボード指定済みでlistsページをロードしたときに取得

## Member
ボード指定時に追加取得、displayNameを上書き可能、削除は全削除をMembersページで押す

## Label
ボード指定時、Listロード時にクリアしてから取得

## docsフォルダについて
generateしたdistの中身と同じです(コピペ）