<template>
  <div class="doo-art-detail">
    <h3 class="doo-art-title">{{ article.title }}</h3>
    <div class="doo-art-info">
      <span
        >发布时间：<i>{{ article.created_date }}</i></span
      ><span
        >作者：<i>{{
          article && article.authors ? article.authors.name : "匿名"
        }}</i></span
      >
    </div>
    <div class="contBody">
      <div
        class="card-cover"
        :style="{
          background: `url(${
            article && article.cover ? article.cover : picDef
          }) no-repeat center center`,
        }"
      ></div>
      <!-- <img
        style="width: 530px;height: 230px;margin: 15px 0;"
        :src="article.cover"
        alt="article.title"
      /> -->
      <div class="markdown-body" v-html="compiledMarkdown"></div>
    </div>
    <el-backtop target=".contBody" style="bottom:100px;"></el-backtop>
  </div>
</template>
<script>
import Utils from "@/utils/util";
import Article from "@/store/Modules/article";
import { marked } from "marked";
import PicDef from "../../assets/img/nasa_the_blue_marble.jpg";
import hljs from "highlight.js";
import "highlight.js/styles/googlecode.css"; //样式文件
export default {
  data() {
    return {
      picDef: PicDef,
      articleDetail: "",
      articleId: "",
      article: {},
    };
  },
  methods: {
    markDown() {
      //   marked.setOptions({
      //     renderer: new marked.Renderer(),
      //     gfm: true,
      //     tables: true,
      //     breaks: false,
      //     pedantic: false,
      //     sanitize: true,
      //     smartLists: true,
      //     smartypants: false,
      //     highlight: function(code) {
      //       return hljs.highlightAuto(code).value;
      //     },
      //   });
    },
    /**
     * 取得文章列表
     */
    async getArticles() {
      let { articleId } = this;
      try {
        let article = await Article.getArticle({ id: articleId });
        article.map((v) => {
          v.created_date = Utils.timestampToTime(v.created_date);
          v.authors = v.authors[0];
        });
        this.$set(this, "article", article[0]);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    },
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.article.content || "", {
        sanitize: true,
      });
    },
  },
  created() {
    this.articleId = this.$route.query.id;
  },
  mounted() {
    this.markDown();
    this.getArticles();
  },
  watch: {
    // $route: "getArticledetail",
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../assets/css/github-markdown.css";
// @import "../../assets/css/atom-one-dark.min.css";
.card-cover {
  width: 100%;
  height: 230px;
}
.contBody {
  margin-top: 10px;
  padding: 5px 5px 0px 5px;
  max-height: 800px;
  min-height: 500px;
  min-width: 1400px;
  overflow: hidden;
  overflow-y: auto;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
.doo-art-detail {
  background: rgba(255, 255, 255, 1);
  border-radius: 5px;
  padding: 15px;
}
.doo-art-title,
.doo-art-info {
  text-align: center;
}
.doo-art-title {
  color: #444;
}
.doo-art-info {
  color: #999;
  font-size: 12px;
  border: 1px dashed #ccc;
  padding: 8px 0;
  margin-top: 10px;
}
.doo-art-info span {
  padding: 0 10px;
}
.markdown-body {
  padding: 10px;
}
.markdown-body img {
  margin: auto;
}
ul {
  list-style: square !important;
}
</style>
