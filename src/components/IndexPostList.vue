<template>
  <div id="index" class="index-list container">
    <div class="index-item">
      <div class="date">2018-01-21</div>
      <a href="./git_repo_non22.html">
        <h1>如何在非 22 端口的主机上创建 git 仓库并共享</h1>
      </a>
      <div class="description">
        很多情况下，我们需要在我们自建的远程主机上面创建在线 git 仓库。同时，由于安全原因，目标主机的 ssh 端口往往被设置成非 22 端口。这给我们创建 git仓库带来了一定的麻烦，需要一些特殊手段才能满足我们的需求。
        <div class="read-more">
          <a href="">阅读原文...</a>
        </div>
      </div>
      <div class="tag-list">
        <div class="tag-item">
          <a href="./tag.html?tag=Git">Git</a>
        </div>
        <div class="tag-item">
          <a href="./tag.html?tag=SSH">SSH</a>
        </div>
        <div class="tag-item">
          <a href="./tag.html?tag=Repository">Repository</a>
        </div>
        <div class="tag-item">
          <a href="./tag.html?tag=Server">Server</a>
        </div>
      </div>
    </div>
    <div class="index-item">
      <div class="date">2017-06-07</div>
      <a href="./DataMiningReport.html">
        <h1>FP-Growth 和 K-Means 学习报告</h1>
      </a>
      <div class="description">
        最近学习了数据挖掘常用的两种算法：FP-Growth 和 K-Means。现在把我的学习结果分享给大家。
        <div class="read-more">
          <a href="">阅读原文...</a>
        </div>
      </div>
      <div class="tag-list">
        <div class="tag-item">
          <a href="./tag.html?tag=Java">Java</a>
        </div>
        <div class="tag-item">
          <a href="./tag.html?tag=DataMining">DataMining</a>
        </div>
        <div class="tag-item">
          <a href="./tag.html?tag=FP-Growth">FP-Growth</a>
        </div>
        <div class="tag-item">
          <a href="./tag.html?tag=K-Means">K-Means</a>
        </div>
        <div class="tag-item">
          <a href="./tag.html?tag=Speed">Speed</a>
        </div>
      </div>
    </div>
    <div class="index-item">
      <div class="date">2017-05-29</div>
      <a href="./Java_Developer_Handbook.html">
        <h1>阿里巴巴 Java 开发手册</h1>
      </a>
      <div class="description">
        这是阿里巴巴 Java 开发手册的文字版，与现有的 PDF 版本完全一致，供大家在开发 Java 程序时参考。
        <div class="read-more">
          <a href="">阅读原文...</a>
        </div>
      </div>
      <div class="tag-list">
        <div class="tag-item">
          <a href="./tag.html?tag=Java">Java</a>
        </div>
        <div class="tag-item">
          <a href="./tag.html?tag=Alibaba">Alibaba</a>
        </div>
        <div class="tag-item">
          <a href="./tag.html?tag=Developer">Developer</a>
        </div>
        <div class="tag-item">
          <a href="./tag.html?tag=HandBook">HandBook</a>
        </div>
      </div>
    </div>
    <div class="index-item">
      <div class="date">2017-01-01</div>
      <a href="./summary_for_developing_storm_js.html">
        <h1>storm.js 开发总结</h1>
      </a>
      <div class="description">
        记录了开发 storm.js 中所遇到的一些要点和坑点，分享给大家。
        <div class="read-more">
          <a href="">阅读原文...</a>
        </div>
      </div>
      <div class="tag-list">
        <div class="tag-item">
          <a href="./tag.html?tag=javascript">javascript</a>
        </div>
        <div class="tag-item">
          <a href="./tag.html?tag=Developer">Developer</a>
        </div>
        <div class="tag-item">
          <a href="./tag.html?tag=summary">summary</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};

</script>

<style scoped>
@import url("../css/style.css");

h1 {
  color: #3f51b5;
  font-weight: 400;
  margin: 0.5rem 0;
}

.index-list {
  margin: 2rem auto;
  min-height: calc(100vh - 360.451px);
}

.index-item {
  margin-bottom: 2rem;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #ffffff;
  box-shadow: 0 1px 2px rgba(151,151,151,.58);
  border-radius: 2px;
}

.description {
  padding-bottom: 0.5rem;
  line-height: 1.8rem;
}

.date {
  text-align: left;
  color: #727272;
  font-weight: 700;
  margin: 0 inherit;
  display: inline;
}

.read-more {
  display: inline;
  padding: 0.3rem;
  color: #3f51b5;
  border-radius: 2px;
}

.read-more:hover {
  background-color: #eaecf7
}

.tag-list {
  border-top: 1px solid #bebebe;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.tag-list:last-child {
  margin-right: 0;
}

.tag-item {
  display: inline-block;
  color: #ffffff;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  border-radius: 2px;
}

.tag-item:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,.26);
}

.tag-item a {
  color: #ffffff;
}

.tag-item:nth-child(1) {
  background: #8bc34a;
}

.tag-item:nth-child(2) {
  background: #673ab7;
}

.tag-item:nth-child(3) {
  background: #ff9800;
}

.tag-item:nth-child(4) {
  background: #f44336;
}

.tag-item:nth-child(5) {
  background: #00abc0;
}

</style>
