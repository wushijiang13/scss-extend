import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default () => {
    //由于vite 中不支持在配置文件中获取import.meta的环境变量的注入，所以使用此种方法提前获取。详情查看
    return {
        root:'src/main.ts', //根据注入的环境变量判断项目加载启动url
        plugins: [
            vue()
        ],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "@scss-extend/animate-scss/animate.scss" as *;`,
                },
            },
        },
        base:"./",
    }
}

