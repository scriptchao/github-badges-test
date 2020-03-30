[![Build Status](https://img.shields.io/travis/com/scriptchao/github-badges-test/master?logo=travis)](https://travis-ci.com/scriptchao/github-badges-test)
[![Codecov branch](https://img.shields.io/codecov/c/github/scriptchao/github-badges-test/master?logo=codecov)](https://codecov.io/gh/scriptchao/github-badges-test)
![](https://img.shields.io/github/license/scriptchao/github-badges-test?logo=github)
![](https://img.shields.io/github/languages/top/scriptchao/github-badges-test?logo=github)
![](https://img.shields.io/github/languages/count/scriptchao/github-badges-test?logo=github)
![](https://img.shields.io/github/languages/code-size/scriptchao/github-badges-test?logo=github)
![](https://img.shields.io/github/repo-size/scriptchao/github-badges-test?logo=github)
![](https://img.shields.io/github/forks/scriptchao/github-badges-test?logo=github&style=social)
![](https://img.shields.io/github/stars/scriptchao/github-badges-test?logo=github&style=social)
![](https://img.shields.io/github/watchers/scriptchao/github-badges-test?logo=github&style=social)
![](https://img.shields.io/github/commit-activity/m/scriptchao/github-badges-test?logo=github)

## GitHub项目徽标集成
该项目集成了持续集成状态、单测覆盖率以及一些常用的徽标。


## 持续集成状态（Travis CI）

### 简介
<a href="https://travis-ci.com/" target="_blank">Travis CI</a>提供持续集成服务（Continuous Integration，简称 CI）。支持接入GitHub项目，需要满足以下条件：
- 拥有GitHub帐号
- 该帐号下面有一个项目
- 该项目里面有可运行的代码
- 该项目还包含构建或测试脚本

### 使用方式
在项目的根目录新增.travis.yml文件，内容如下：
```
# 语言
language: node_js
# 版本
node_js: node
# 缓存
cache:
  directories:
    - node_modules
# 构建生命周期
install:
  - npm install
```
每次向GitHub提交代码的时，Travis CI就会自动运行.travis.yml里面的脚本进行构建。  
更多Travis CI教程请参考<a href="https://docs.travis-ci.com/user/tutorial/" target="_blank">这里</a>   
本项目的Travis CI地址：<a href="https://travis-ci.com/scriptchao/github-badges-test" target="_blank">github-badges-test</a>   

### 徽标输出
![](https://raw.githubusercontent.com/scriptchao/github-badges-test/master/images/wx-travis.png)


## 单测覆盖率（Codecov）

### 简介
<a href="https://codecov.io/" target="_blank">Codecov</a>是一个开源的单元测试结果展示平台，将测试结果可视化。支持接入GitHub项目，并且可以与Travis CI无缝对接。

### 使用方式
- 安装依赖
```
npm install codecov -D
```
- package.json的script脚本中添加如下命令
```
 "codecov": "npm run coverage && codecov"
```
- .travis.yml中加入如下构建步骤
```
# 构建脚本
script:
  - npm run codecov
```
本项目的Codecov地址：<a href="https://codecov.io/gh/scriptchao/github-badges-test" target="_blank">github-badges-test</a> 

### 徽标输出
![](https://raw.githubusercontent.com/scriptchao/github-badges-test/master/images/wx-codecov.png)

### 常用徽标集成 (Shields.io)

### 简介
<a href="https://shields.io/" target="_blank">Shields.io</a>是GitHub徽标的官方网站，支持常用类型的徽标并且还能个性化配置徽标的样式。

### 使用方式
- 通过修改url的方式来生成自定义徽标
```
https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>
```
LABEL: 徽标左半部分的文本  
MESSAGE: 徽标右半部分的文本  
COLOR: 徽标右半部分背景颜色  

更多使用方式请参考<a href="https://shields.io/" target="_blank">官网</a>。
