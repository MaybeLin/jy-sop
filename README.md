[TOC]

# sop

# 运行

- npm install
- npm run dev

# 目录结构

- src 开发目录
  - api 接口目录

    - config 请求配置
  - common

    - img 公共图片
    - stylus 
      - base.styl 公用样式
      - reset.styl 清除默认样式
      	 variable.styl	统一页面样式变量
  - components 所有页面通用组件

    - Header 头部组件
    - Page-title title组件
  - page 所有页面
  - router 路由
  - App.vue 入口组件
  - main.js  入口js

# 问题

- `el-popover弹出框后 自定义取消按钮无法隐藏掉`

  ~~~javascript
   <template slot-scope="scope" >
                          <el-popover placement="top" class="shoushi" v-model="scope.row.popover">
                              <el-input autofocus="true" v-model="scope.row.poMoney"></el-input>
                              <div class="tr  block-child-mg">
                                  <el-button size="small" @click="scope.row.popover = false">取消</el-button>
                                  <el-button type="primary" size="small">确认</el-button>
                              </div>
                              <div slot="reference" class="name-wrapper">
                                  <el-tag size="medium">{{ scope.row.poMoney }}</el-tag>
                              </div>
                          </el-popover>
  </template>
  ~~~

- 金额居中的样式 //保留
-   

  