<template>
  <div id="app">
    <navigation></navigation>
    <blog-title></blog-title>
    <index-post-list></index-post-list>
    <foot></foot>
  </div>
</template>

<script>
/* 基础组件 */
import navigation from "./components/navigation.vue";
import blogTitle from "./components/blog-title.vue";
import foot from "./components/foot.vue";

/* 页面组件 */
import indexPostList from "./components/index-post-list.vue";

export default {
  name: "app",
  components: {
    /* 基础组件 */
    navigation: navigation,
    blogTitle: blogTitle,
    foot: foot,
    /* 页面组件 */
    indexPostList: indexPostList
  },
  data() {
    return {
      title: "Home Title"
    };
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: Gotham, "Microsoft YaHei", "Open Sans", "Helvetica Neue",
    Helvetica, Arial, "Microsoft YaHei", sans-serif;
  background-color: #f7f7f7
}
</style>
