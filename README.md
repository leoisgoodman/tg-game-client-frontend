# lottery

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### webp 生成命令

```
node src/build/webp.mjs
```

### webp 页面使用

```
 <img v-webp src="../assets/lb.png" />
```

### webp 背景图片

```
<div v-webpg class="lb"></div>
```

css

```
.webpbg('@/assets/lb.png');
```
