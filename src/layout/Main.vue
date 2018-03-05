<template>
  <div id="app">
    <navigation></navigation>
    <blog-title>
      <slot name="main"></slot>
      <slot name="sub"></slot>
    </blog-title>
    <index-post-list></index-post-list>
    <foot></foot>
  </div>
</template>

<script>
/* 基础组件 */
import Navigation from "./components/Navigation.vue";
import BlogTitle from "./components/BlogTitle.vue";
import Foot from "./components/Foot.vue";

/* 页面组件 */
import IndexPostList from "./components/IndexPostList.vue";

export default {
  name: "app",
  components: {
    /* 基础组件 */
    navigation: Navigation,
    blogTitle: BlogTitle,
    foot: Foot,
    /* 页面组件 */
    indexPostList: IndexPostList
  },
  data() {
    return {};
  }
};
</script>

<style>
@import url("../css/style.css");
</style>
