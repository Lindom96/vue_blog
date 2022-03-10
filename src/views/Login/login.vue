<template>
  <div class="login">
    <div class="overlay"></div>
    <el-card
      class="card"
      v-loading="loading"
      element-loading-background="rgba(0, 0, 0, 0)"
    >
      <header class="logo"></header>
      <!-- <form class="form-box" @submit.prevent="throttleLogin">
        <div class="form-item">
          <input
            type="text"
            v-model="form.authorname"
            autocomplete="off"
            placeholder="用户名"
          />
        </div>
        <div class="form-item">
          <input
            type="password"
            v-model="form.password"
            autocomplete="off"
            placeholder="密码"
          />
        </div>
      </form> -->
      <el-form :model="form" label-position="left" ref="form" class="form-box">
        <el-form-item
          label="账号"
          label-width="50px"
          prop="authorname"
          :rules="[{ required: true, message: '账号不能为空' }]"
        >
          <el-input
            v-model.number="form.authorname"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          label-width="50px"
          prop="password"
          :rules="[{ required: true, message: '密码不能为空' }]"
        >
          <el-input
            type="password"
            v-model.number="form.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <div class="form-btn">
            <el-button circle class="home-btn" @click="btnToPage"
              ><Icon type="ios-home"
            /></el-button>
            <el-button circle class="submit-btn" @click="throttleLogin"
              >Login</el-button
            >
          </div>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import Utils from "@/utils/util";
import Author from "@/store/Modules/author";
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      loading: false,
      wait: 2000,
      throttleLogin: null,
      form: {
        authorname: "admin110",
        password: "123456",
      },
    };
  },
  methods: {
    login() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          this.signinSys();
        }
      });
    },
    /**
     * 登录系统
     */
    async signinSys() {
      const { authorname, password } = this.form;
      try {
        this.loading = true;
        const author = await Author.signIn(authorname, password);
        if (!author) {
          this.loading = false;
          return this.$message.success("登录失败");
        }
        this.setAuthorAndState(author);
        this.loading = false;
        this.$router.push("/admin/about");
        this.$message.success("登录成功");
      } catch (e) {
        this.loading = false;
        // eslint-disable-next-line no-console
        console.log(e);
      }
    },
    /**
     * 点击跳转home页面
     */
    btnToPage() {
      this.$router.push("/home").catch((err) => {
        $router.push("/login");
      });
    },
    ...mapActions(["setAuthorAndState"]),
  },
  created() {
    this.throttleLogin = Utils.throttle(this.login, this.wait);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url("../../assets/img/uni_bg.gif") no-repeat center center;
  background-size: cover;
  // .overlay {
  //   position: fixed;
  //   top: 0;
  //   right: 0;
  //   bottom: 0;
  //   left: 0;
  //   background-color: rgba(0, 0, 0, 0.3);
  // }
  .card {
    transform: translateY(-40%);
    border: none;
    border-radius: 8%;
    background: url("../../assets/img/earth_bg.jpg") no-repeat
      center center;
    background-size: cover;
  }
}
.logo {
  padding: 10px 0;
  font-size: 26px;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
}
.form-box {
  width: 350px;
  ::v-deep .el-input__inner {
    border: none;
    border-bottom: 1px solid #dcdfe6;
  }
  ::v-deep .el-form-item__label{
    color: #fff;
  }
  .form-item {
    margin-top: 20px;
    input {
      box-sizing: border-box;
      // width: 100%;
      // height: 48px;
      font-size: $font-size-base;
      color: $font-color-base;
      line-height: normal;
      outline: none;
      border-width: 0 0 1px 0;
      border-style: solid;
      border-color: $border-color-base;
      transition: all 0.3s;
      &:hover,
      &:focus {
        border-color: $border-color-dark;
      }
    }
  }
  .form-btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .home-btn {
      padding: 0px;
      border: none;
      height: 54px;
      width: 54px;
      background-color: #fb7299;
      color: #fff;
    }
    .home-btn:hover,
    .home-btn:focus {
      background-color: #fc8bab;
      border-color: none;
    }
    .submit-btn {
      // width: 80%;
      // height: 36px;
      height: 54px;
      width: 54px;
      margin: 10px 10px 10px;
      padding: 0;
      border: none;
      font-size: $font-size-base;
      color: #fff;
      text-align: center;
      outline: none;
      // border-radius: 4px;
      cursor: pointer;
      background-color: #57a3f3;
      transition: all 0.5s;
    }
    .submit-btn:hover,
    .submit-btn:focus {
      background: #66b1ff;
      border-color: #66b1ff;
      color: #fff;
    }
  }
}
</style>
