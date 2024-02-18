# exert react

```bash
# 创建 react 裸项目
npx create-react-app my-app
# 或者 npm
npm init react-app my-app
# 指定 ts
npx create-react-app my-app --template typescript

# 使用 vite 创建，这样可以使用 编译期 vite 的方法。
npm create vite@latest

# 创建基于 next.js 后端框架 的 react 项目
npx create-next-app@latest

# 创建基于 remix 后端框架 的 react 项目
npx create-remix

# TODO 被墙没有测试
# 创建基于 gatsby 后端 的 react 项目
# 这个集成了多种 CMS 的风格代码（会拉到 github 有被墙的问题）
npx create-gatsby

# 基于 expo 的 react 项目（原生） react native
# android 需要提前打开模拟器或者 连上真机
# ios 没机器
# web 这个直接打不开。
npx create-expo-app
```

## 提示

useState 类似 remember var
useMemo  类似 computed 和 remember val
useCallback 类似 remember val


没有类似 vue 注册组件 vue.component() 方式。所有组件都是 import 后使用。

## 参考书籍

[创建一个React App](https://create-react-app.dev/)
