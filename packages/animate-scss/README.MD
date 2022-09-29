
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
> 如果是 sfc 需要对当前组件进项样式scss 设置 否则会解析为css 无法正确触发。`<style lang="scss">`

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

### attention_seekers

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

### back_entrances

|  key   | label  |
|  ----  | ----  |
| backInDown  | 后退向下进入 |
| backInLeft  | 后退向左进入 |
| backInRight  | 后退向右进入 |
| backInUp  | 后退向上进入 |

### back_exits

|  key   | label  |
|  ----  | ----  |
| backOutDown  | 后退向下离开 |
| backOutLeft  | 后退向左离开 |
| backOutRight  | 后退向右离开 |
| backOutUp  | 后退向上离开 |

### bouncing_entrances

|  key   | label  |
|  ----  | ----  |
| bounceIn  | 弹回进入 |
| bounceInDown  | 向下反弹进入 |
| bounceInLeft  | 向左反弹进入 |
| bounceInRight  | 向右反弹进入 |
| bounceInUp  | 向上反弹进入 |

### bouncing_exits

|  key   | label  |
|  ----  | ----  |
| bounceOut  | 弹回离开 |
| bounceOutDown  | 向下反弹离开 |
| bounceOutLeft  | 向左反弹离开 |
| bounceOutRight  | 向右反弹离开 |
| bounceOutUp  | 向上反弹离开 |

### fading_entrances

|  key   | label  |
|  ----  | ----  |
| fadeIn  | 淡入 |
| fadeInBottomLeft  | 在底部向左淡入淡出 |
| fadeInBottomRight  | 在底部向右淡入淡出 |
| fadeInDown  | 淡入淡出 |
| fadeInDownBig  | 淡入下大 |
| fadeInLeft  | 向左淡入 |
| fadeInLeftBig  | 淡入左侧大 |
| fadeInRight  | 淡入右侧 |
| fadeInRightBig  | 淡入右侧大 |
| fadeInTopLeft  | 向左上方淡入淡出 |
| fadeInTopRight  | 淡入顶部右侧 |
| fadeInUp  | 淡入淡出 |
| fadeInUpBig  | 淡入放大 |

### fading_exits

|  key   | label  |
|  ----  | ----  |
| fadeOut  | 淡出 |
| fadeOutBottomLeft  | 从底部向左淡出 |
| fadeOutBottomRight  | 淡出右下角 |
| fadeOutDown  | 淡出向下 |
| fadeOutDownBig  | 淡出向下大 |
| fadeOutLeft  | 淡出左侧 |
| fadeOutLeftBig  | 淡出左侧大 |
| fadeOutRight  | 淡出右侧 |
| fadeOutRightBig  | 淡出右大 |
| fadeOutTopLeft  | 淡出顶部向左 |
| fadeOutTopRight  | 淡出顶部右侧 |
| fadeOutUp  | 淡出向上 |
| fadeOutUpBig  | 淡出放大 |

### flippers

|  key   | label  |
|  ----  | ----  |
| flip  | 轻弹 |
| flipInX  | 翻转进入X |
| flipInY  | 翻转进入Y |
| flipOutX  | 翻转退出X |
| flipOutY  | 翻转退出Y |

### lightspeed

|  key   | label  |
|  ----  | ----  |
| lightSpeedInLeft  | 左侧灯光速度 |
| lightSpeedInRight  | 灯光向右速度 |
| lightSpeedOutLeft  | 灯光向左速度 |
| lightSpeedOutRight  | 灯光速度向右输出 |

### rotating_entrances

|  key   | label  |
|  ----  | ----  |
| rotateIn  | 旋转进入 |
| rotateInDownLeft  | 向左向下旋转 |
| rotateInDownRight  | 向下向右旋转 |
| rotateInUpLeft  | 旋转左上角 |
| rotateInUpRight  | 旋转右上角 |

### rotating_exits  

|  key   | label  |
|  ----  | ----  |
| rotateOut  | 向外旋转 |
| rotateOutDownLeft  | 向外向下向左旋转 |
| rotateOutDownRight  | 旋转向外向下向右 |
| rotateOutUpLeft  | 向外向上向左旋转 |
| rotateOutUpRight  | 向外向右旋转 |

### sliding_entrances 

|  key   | label  |
|  ----  | ----  |
| slideInDown | 向下滑动 |
| slideInLeft | 向左滑动 |
| slideInRight | 向右滑动 |
| slideInUp | 向上滑动 |

### sliding_exits

|  key   | label  |
|  ----  | ----  |
| slideOutDown | 向下滑出 |
| slideOutLeft | 向左滑出 |
| slideOutRight | 向右滑出 |
| slideOutUp | 向上滑出 |

### specials

|  key   | label  |
|  ----  | ----  |
| hinge | 铰链 |
| jackInTheBox | 盒子中的插孔 |
| rollIn | 滚入 |
| rollOut | 滚出 |

### zooming_entrances

|  key   | label  |
|  ----  | ----  |
| zoomIn | 放大 |
| zoomInDown | 向下放大进入 |
| zoomInLeft | 向左放大进入 |
| zoomInRight | 向右放大进入 |
| zoomInUp | 向上放大进入 |

### zooming_exits

|  key   | label  |
|  ----  | ----  |
| zoomOut | 缩小 |
| zoomOutDown | 向下缩小退出 |
| zoomOutLeft | 向左缩小退出 |
| zoomOutRight | 向右缩小退出 |
| zoomOutUp | 向上缩小退出 |

# 覆盖样式

可新建一个`index.scss` 在后续引入，覆盖掉内部 `@minix` 的样式。即可达到自定义。


