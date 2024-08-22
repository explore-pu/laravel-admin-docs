---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Laravel-admin"
  text: "A tool to quickly build back-office management"
  tagline: It provides features such as page components and form elements that help you implement full-fledged backend management with very little code
  image:
    src: /logo.png
    alt: laravel-admin
  actions:
    - theme: brand
      text: start
      link: /markdown-examples

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
import { fetchReleaseTag } from '/.vitepress/utils/fetchReleaseTag';

onMounted(() => {
  fetchReleaseTag()
});
</script>
