---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Laravel-admin"
  text: "A tool to quickly build back-office management"
  tagline: English documentation needs to be translated, hope someone can help, thank you very much, If you'd like more language support, welcome to the new language documentation
  image:
    src: /logo.png
    alt: laravel-admin
  actions:
    - theme: brand
      text: start
      link: /en/guide

features:
  - icon: 📄
    title: model-table
    details: Data tables can be built quickly
  - icon: 📄
    title: model-form
    details: Enables rapid construction of data forms
  - icon: 📄
    title: model-tree
    details: Tree data can be built quickly
  - icon: 📄
    title: RBAC
    details: Role-based permission control
  - icon: 📄
    title: Built-in components
    details: Built-in 40+ form element components, as well as support for extension components, support for custom charts
  - icon: 📄
    title: High flexibility
    details: Multiple model relationships, local and OSS file uploads, and multi-database support
---

<script setup>
import { onMounted } from 'vue';
import { fetchLatestTag } from '/.vitepress/utils/fetchLatestTag';

onMounted(() => {
  fetchLatestTag()
});
</script>
