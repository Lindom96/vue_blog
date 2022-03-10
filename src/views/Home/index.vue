<template>
  <div id="homepage">
    <div id="top-main">
      <div class="top-left">
        <span class="slogan">忠于自己，热爱生活</span>
      </div>
      <Input
        v-model="search"
        class="search-ipt"
        search
        enter-button
        @on-search="query"
        placeholder="Enter something..."
      />
      <div class="login-div">
      <el-button type="primary" circle style="padding:9px;" @click="btnToPage" ><Icon type="md-log-in" /></el-button>
      </div>
    </div>
    <div class="main-container">
      <div class="artic-list">
        <artic-card :articleLst="articleLst || fakeData"></artic-card>
      </div>
      <div class="r-content">
        <div class="tags">
          <h4>标签</h4>
          <div>
            <div v-for="(item, id) in tagList" :key="id" class="tag-item">
              <el-tag
                :disable-transitions="false"
                :hit="selecTagId === item.id"
                @click="selectTagOrCat('selecTagId', item.id)"
                >{{ item.name }}</el-tag
              >
            </div>
          </div>
        </div>
        <div class="cats">
          <h4>分类</h4>
          <div>
            <div v-for="(item, id) in catList" :key="id" class="tag-item">
              <el-tag
                :disable-transitions="false"
                :hit="selecCatId === item.id"
                type="success"
                @click="selectTagOrCat('selecCatId', item.id)"
                >{{ item.name }}</el-tag
              >
            </div>
          </div>
        </div>
        <div class="personal">
          <h4>个人信息</h4>
          <div class="logo-p">
            <img title="CSDN首页" :src="csdnLogo" />
            <a
              href="https://blog.csdn.net/qq_41901534?type=blog/"
              target="“_blank”"
              >&ensp;&ensp;https://blog.csdn.net/qq_41901534?type=blog/</a
            >
          </div>
          <div class="logo-p">
            <span style="color:'Dodgerblue'"
              ><i class="fab fa-github fa-fw"></i
            ></span>
            <a href="https://github.com/Lindom96/" target="“_blank”"
              >&ensp;&ensp;https://github.com/Lindom96/</a
            >
          </div>
          <div class="logo-p">
            <span style="color:'Dodgerblue'"
              ><i class="fab fa-qq fa-fw"></i></span
            >&ensp;&ensp;1601514271
          </div>
          <div class="logo-p">
            <span style="color:'Dodgerblue'"
              ><i class="fa fa-envelope fa-fw"></i
            ></span>
            &ensp;&ensp;1601514271@qq.com
          </div>
        </div>
      </div>
    </div>
    <el-backtop target=".artic-list"></el-backtop>
  </div>
</template>

<script>
import { Button } from "view-design";
import ArticCard from "./components/ArticCard";
import Article from "@/store/Modules/article";
import Tag from "@/store/Modules/tag";
import Category from "@/store/Modules/category";
import Utils from "@/utils/util";
import CsdnLogo from "../../assets/img/csdn_logo.png";
export default {
  name: "home",
  components: {
    Button,
    ArticCard,
  },
  data() {
    return {
      search: "",
      csdnLogo: CsdnLogo,
      tagList: [{ id: 0, name: "全部" }],
      catList: [{ id: 0, name: "全部" }],
      selecCatId: 0,
      selecTagId: 0,
      timelist: ["2020-07", "2020-08", "2020-09"],
      articleLst: [],
      fakeData: [
        {
          id: "1",
          modelName: "你好",
          title: "文本标题",
          modelType: "1",
          content:
            "如果实现单行文本的溢出显示省略号同学们应该都知道用text-overflow:ellipsis属性。",
          img: "",
        },
        {
          id: "2",
          modelName: "你好",
          title: "文本标题",
          modelType: "1",
          content:
            "如果实现单行文本的溢出显示省略号同学们应该都知道用text-overflow:ellipsis属性。",
          img: "",
        },
        {
          id: "3",
          modelName: "你好",
          title: "文本标题",
          modelType: "2",
          content:
            "如果实现单行文本的溢出显示省略号同学们应该都知道用text-overflow:ellipsis属性。",
          img:
            "//33e9-test-upload.oss-cn-shenzhen.aliyuncs.com/material/6c/6cfeff6008d7e11a8eb8c84f2b9ed4cd.png",
        },
        {
          id: "4",
          modelName: "你好",
          title: "文本标题",
          modelType: "2",
          content:
            "如果实现单行文本的溢出显示省略号同学们应该都知道用text-overflow:ellipsis属性。",
          img:
            "http://33e9-test-upload.oss-cn-shenzhen.aliyuncs.com/material/df/df35f90ee575cd2a7ff9d8cfdd3debef.png",
        },
        {
          id: "5",
          modelName: "你好",
          title: "文本标题",
          modelType: "2",
          content:
            "如果实现单行文本的溢出显示省略号同学们应该都知道用text-overflow:ellipsis属性。",
          img:
            "http://33e9-test-upload.oss-cn-shenzhen.aliyuncs.com/material/df/df35f90ee575cd2a7ff9d8cfdd3debef.png",
        },
        {
          id: "6",
          modelName: "你好",
          title: "文本标题",
          modelType: "2",
          content:
            "如果实现单行文本的溢出显示省略号同学们应该都知道用text-overflow:ellipsis属性。",
          img:
            "http://33e9-test-upload.oss-cn-shenzhen.aliyuncs.com/material/df/df35f90ee575cd2a7ff9d8cfdd3debef.png",
        },
      ],
    };
  },
  methods: {
    // 刷新/获取标签
    async getTags() {
      try {
        let tags = await Tag.getTags();
        let { tagList } = this;
        this.$set(this, "tagList", [...tagList, ...tags]);
      } catch (e) {
        // eslint-disable-next-line no-console
      }
    },
    // 刷新/获取分类
    async getCategories() {
      try {
        let cats = await Category.getCategories();
        let { catList } = this;
        this.$set(this, "catList", [...catList, ...cats]);
      } catch (e) {}
    },
    /**
     * 取得文章列表
     */
    async getArticles() {
      let { search, selecCatId, selecTagId } = this;
      try {
        let params = {
          categoryId: selecCatId || 0,
          authorId: 0,
          tagId: selecTagId || 0,
          publicId: 0,
          statusId: 0,
          starId: 0,
          page: 0,
        };
        if (search) {
          params = { search, ...params };
        }

        let articles = await Article.getArticles(params);
        articles.forEach((v) => {
          v.created_date = Utils.timestampToTime(v.created_date);
        });
        this.$set(this, "articleLst", articles);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    },
    /**
     * 点击标签/分类
     */
    selectTagOrCat(type, id) {
      switch (type) {
        case "selecTagId":
          this.selecTagId = id;
          break;
        case "selecCatId":
          this.selecCatId = id;
          break;
      }
      this.getArticles();
    },
    //获取时间的方法
    gettime() {
      this.$axios({
        method: "get",
        url: "/json/article/getDate",
        params: {},
      }).then(
        (res) => {
          this.timelist = res.data.data;
        },
        (err) => {
          console.log(err);
        }
      );
    },
    /**
     * 查询框查询
     */
    query() {
      this.getArticles();
    },
    onSubmit() {
      return false;
    },
    /**
     * 点击跳转login页面
     */
    btnToPage() {
      this.$router.push("/login").catch((err) => {
        $router.push("/home");
      });
    },
  },
  mounted() {
    this.getArticles();
    this.getTags();
    this.getCategories();
    //  this.gettime()
  },
};
</script>
<style lang="scss" scoped>
#top-main {
  position: sticky;
  z-index: 100;
  top: 0;
  background-color: white;
  padding-top: 25px;
  padding-right: 40px;
  padding-left: 30px;
  padding-bottom: 30px;
  height: 80px;
  min-width: 1421px;
  // background-image: url('../../assets/img/science-blue-header.png');
  background: url("../../assets/img/helian.jpg") no-repeat;
  background-size: cover;
  display: flex;
  .top-left {
    flex: 1;
    height: 25px;
    .slogan {
      font-size: 1rem;
      font-weight: bold;
      color: #f9f9f5;
      font-family: fangsong;
    }
  }
  .search-ipt {
    width: 20%;
  }
  .login-div{
    margin-left: 24px;
  }
}
/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: 5px;
  padding: 0;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.3);
  border-radius: 25px;
  margin: 5px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 25px;
  background: rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: inset006pxrgba(0, 0, 0, 0.5);
}
::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(255, 0, 0, 0.4);
}
.main-container {
  top: 50px;
  height: 100%;
  min-width: 1400px;
  display: flex;
  flex-direction: row;
  /* align-items: flex-end; */
  background: white;
  margin-top: 5px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 16px 10px 10px 10px;
  border: 1px dashed lightgrey;
  border-radius: 10px;
  .artic-list {
    flex: 1;
    max-height: 800px;
    overflow: hidden;
    overflow-y: auto;
  }
  .r-content {
    width: 410px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 5px;
    margin-left: 5px;
    & > div {
      border-radius: 15px;
      justify-content: center;
      width: 100%;
      margin: 3px;
      opacity: 0.9;
      background-color: #f9f9f5;
      h4 {
        text-align: center;
      }
    }
    .tags,
    .cats {
      height: 155px;
      & > div {
        cursor: pointer;
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        .tag-item {
          margin: 2px;
        }
      }
    }
    .personal {
      height: 200px;
      padding: 10px;
      .logo-p {
        margin: 10px;
        & > img {
          height: 20px;
          width: 37px;
          vertical-align: middle;
        }
        & > span i {
          width: 37px;
        }
      }
    }
  }
}
</style>
