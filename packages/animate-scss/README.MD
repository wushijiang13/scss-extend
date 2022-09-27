
# animate.css 的 scss 实现

<p>
    <a href="https://www.npmjs.com/package/@scss-extend/animate-scss">
        <img src="https://img.shields.io/badge/version-1.0.0-brightgreen.svg" alt="npm">
    </a>
</p>

支持自由组合 和重写，可无缝引入`vite` 、 `webpack` scss 构建的样式中体系中。  

内部使用 `@minix` 实现，保留 `class` 触发动画同时，支持 `scss` `@extend` 、 `@include` 方式复用重写等。  

[animate.css 传送门](https://github.com/animate-css/animate.css)

# 开始 

## 下载
```
pnpm install  @scss-extend/animate-scss
```


## vite 引入

```js
css: {
    preprocessorOptions: {
        scss: {
            additionalData: `@use "@scss-extend/animate-scss/animate.scss" as *;`
        },
    },
}
```

## webpack 引入

```js
import '@scss-extend/animate-scss/animate.scss';
```

# 使用

三种使用方式

1.`class` 使用

```html
<button class="bounce">bounce</button>
```

2.@extend 使用
```html
<button class="minix-bounce">minix-bounce</button>
<style lang="scss">
    .minix-bounce{
        @extend .bounce;
    }
</style>
```
3.自由组合使用 
 *可自行调配动画速度及动画效果*

```html
<button class="minix-bounce">minix-bounce</button>
<style lang="scss">
    .minix-bounce{
        @include animated;
        @include bounce;
    }
</style>
```

目前支持动画

|  key   | label  |
|  ----  | ----  |
| bounce  | 弹跳 |
| flash  | 闪光 |
| headShake  | 摇头 |
| heartBeat  | 心跳 |
| jello  | 果冻 |
| pulse  | 脉冲 |
| rubberBand  | 橡皮筋 |
| shakeX  | 摇晃X |
| shakeY  | 摇晃Y |
| swing  | 摇摆 |
| tada  | 放肆 |
| wobble  | 摇晃 |

# 覆盖样式

可新建一个`index.scss` 在后续引入，覆盖掉内部 `@minix` 的样式。即可达到自定义。


