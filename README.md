## BeYourSelf
联合项目代码仓库

### 项目简介
**习惯养成类web-app**

#### 仓库地址 ：
***https://github.com/wanghao97522/BeYourSelf.git***

### 前端开发模块分配
* 主页&成长 ： 仇明珠 、 浦文卓
* 旅程 ： 王浩
* 登录注册 ： 张智博
* 我的 ： 郭钢

### 技术栈
* react
* react-router 
* antd-mobile
* redux 
* styled-components

### 说明
* 入口文件 ： ./beyourself/src/index.js
* css样式使用styled-components进行组件化的编写
* 关于antd-mobile组件库（按需加载）的说明 ：
  - 引入了 react-app-rewired 并修改 package.json 里的启动配置。
  - 在项目的根目录里创建一个 config-overrides.js 用于修改默认配置。
  - 使用了 babel-plugin-import用于按需加载组件代码和样式
  - 引用方式，如例 ：***import { Button } from 'antd-mobile'*** 
 