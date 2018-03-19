<template>
  <div id="app">
    <main-layout></main-layout>
  </div>
</template>

<script>
/* 加载布局 */
import MainLayout from "./layout/Main.vue";

/* 基础组件 */
import Navigation from "./components/Navigation.vue";
import BlogTitle from "./components/BlogTitle.vue";
import Foot from "./components/Foot.vue";

/* 页面组件 */
import IndexPostList from "./components/IndexPostList.vue";

export default {
  name: "app",
  components: {
    /* 基础布局 */
    mainLayout: MainLayout,
    /* 基础组件 */
    navigation: Navigation,
    blogTitle: BlogTitle,
    foot: Foot,
    /* 页面组件 */
    indexPostList: IndexPostList
  },
  data() {
    return {
    };
  }
};
</script>

<style>
@import url("./css/style.css");
</style>
