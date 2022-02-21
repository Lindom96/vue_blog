<template>
  <div id="homepage">
    <div id="tou">
      <a href="#"><Icon type="md-planet" /> <span>主页</span></a>
      <Input
        class="search-ipt"
        search
        enter-button
        placeholder="Enter something..."
      />
    </div>
    <div class="main-container">
      <div class="artic-list">
        <artic-card :templates="templates"></artic-card>
      </div>
      <div class="r-content">
        <div class="tags">
          <h4>标签</h4>
          <div>
            <div v-for="(item, id) in Labellist" :key="id" class="tag-item">
              <Button type="primary">{{ item.labelname }}</Button>
            </div>
          </div>
        </div>
        <div class="cats">
          <h4>分类</h4>
          <div class="labels">
            <div v-for="(item, id) in serieslist" :key="id" class="series">
              <router-link
                class="series-a"
                exact-active-class="series"
                :to="{ path: '/list', query: { seriesid: item.id } }"
                ><i class="iconfont">&#xe644;</i>&ensp;{{
                  item.name
                }}</router-link
              >
            </div>
          </div>
        </div>
        <div class="personal">
          <h4>个人信息</h4>
          <div class="logo-p">
            <img src="../../assets/img/bg0503.jpg" alt="" />
            <a href="https://blog.csdn.net/" target="“_blank”"
              >&ensp;&ensp;https://blog.csdn.net/</a
            >
          </div>
          <div class="logo-p">
            <span style="color:'Dodgerblue'"><i class="fab fa-qq"></i></span>&ensp;&ensp;1601514271
          </div>
          <div class="logo-p">
            <img src="../../assets/img/bg0503.jpg" alt="" />
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
export default {
  name: "home",
  components: {
    Button,
    ArticCard,
  },
  data() {
    return {
      search: "",
      Labellist: [
        { id: 1, labelname: "PHP" },
        { id: 2, labelname: "Ajax" },
        { id: 3, labelname: "mysql" },
        { id: 4, labelname: "JavaScript" },
      ],
      serieslist: [
        { id: 1, name: "PHP日志" },
        { id: 2, name: "技术" },
        { id: 3, name: "感想" },
      ],
      timelist: ["2020-07", "2020-08", "2020-09"],
      templates: [],
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
    //获取标签的方法
    getlabel() {
      this.$axios({
        method: "get",
        url: "/json/label",
        params: {},
      }).then(
        (res) => {
          this.Labellist = res.data.data;
        },
        (err) => {
          console.log(err);
        }
      );
    },
    //获取专栏的方法
    getcolumn() {
      this.$axios({
        method: "get",
        url: "/json/column",
        params: {},
      }).then(
        (res) => {
          this.serieslist = res.data.data;
        },
        (err) => {
          console.log(err);
        }
      );
    },
    /**
     * 获取文章列表
     */
    getArticleList() {
      let _this = this;
      setTimeout(() => {
        _this.$set(_this, "templates", _this.fakeData);
      }, 500);
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
    seek() {
      if (this.search) {
        this.$router.push({ path: "/list", query: { search: this.search } });
        this.search = "";
      }
    },
    onSubmit() {
      return false;
    },
    btnLoginClick() {
      this.$router.push("/login").catch((err) => {
        $router.push("/home");
      });
    },
  },
  mounted() {
    // this.getlabel()
    // this.getcolumn()
    //  this.gettime()
    this.getArticleList();
  },
};
</script>
<style lang="scss" scoped>
#tou {
  position: sticky;
  z-index: 100;
  top: 0;
  background-color: white;
  padding-top: 25px;
  padding-right: 100px;
  padding-left: 30px;
  padding-bottom: 30px;
  height: 80px;
  display: flex;
  a {
    flex: 1;
    color: #000;
  }
  .search-ipt {
    width: 20%;
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
    .tags {
      height: 155px;
      & > div {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        .tag-item {
          margin: 2px;
        }
      }
    }
    .cats {
      height: 200px;
    }
    .personal {
      height: 200px;
    }
  }
}
.logo-p img {
  height: 20px;
  vertical-align: middle;
}
</style>
