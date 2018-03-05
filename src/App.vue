<template>
  <div id="app">
    <navigation></navigation>
    <blog-title></blog-title>
    <index-post-list></index-post-list>
    <foot></foot>
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
    main: MainLayout,
    /* 基础组件 */
    navigation: Navigation,
    blogTitle: BlogTitle,
    foot: Foot,
    /* 页面组件 */
    indexPostList: IndexPostList
  },
  data() {
    return {
      title: "Home Title"
    };
  }
};
</script>

<style>
@import url("./css/style.css");
</style>
