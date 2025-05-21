---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Laravel-Admin"
  text: "一个可以快速构建后台管理的工具"
  tagline: 它提供的页面组件和表单元素等功能，能帮助你使用很少的代码就实现功能完善的后台管理功能
  image:
    src: /logo.png
    alt: laravel-admin
  actions:
    - theme: brand
      text: 开始
      link: /zh-CN/guide/

features:
  - icon: 📄
    title: model-grid
    details: 支持快速构建数据表格
  - icon: 📄
    title: model-form
    details: 支持快速构建数据表单
  - icon: 📄
    title: model-tree
    details: 支持快速构建树状数据
  - icon: 📄
    title: RBAC
    details: 基于角色的权限控制
  - icon: 📄
    title: 内置组件
    details: 内置40+种form元素组件、以及支持扩展组件，支持自定义图表
  - icon: 📄
    title: 高灵活性
    details: 多种模型关系，支持本地和oss文件上传，多数据库支持
---

<script setup>
import { onMounted } from 'vue';
import { fetchLatestTag } from '/.vitepress/utils/fetchLatestTag';

onMounted(() => {
  fetchLatestTag()
})
</script>
