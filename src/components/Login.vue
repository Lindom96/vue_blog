<template>
  <div>
    <div class="login-container">
      <div class="div-form">
        <el-form
          ref="loginForm"
          :rules="loginFormRules"
          :model="loginForm"
          label-width="100px"
          class="login-form"
        >
          <el-form-item label="Username" prop="username">
            <el-input v-model="loginForm.username" placeholder="Username"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input v-model="loginForm.password" type="password" placeholder="Password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit('loginForm')">立即创建</el-button>
            <el-button @click="onReset('loginForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      show: true,
      //表单验证规则对象
      loginFormRules: {
        username: [
          { required: true, message: "请输入账号！", trigger: "blur" },
          { min: 6, max: 10, message: "长度在6到10个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码！", trigger: "blur" },
          { min: 6, max: 10, message: "长度在6到10个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (!valid) return;
        this.$http.post("admin/user", this.loginForm).then(res => {
          console.log(res);
        });
      });
    },
    onReset(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.home {
  padding-top: 10rem;
  /* display: flex; */
  width: 100%;
  /* align-items: center;
  justify-content: center; */
}
.login-container {
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 30rem;
  background-color: rgba(236, 243, 252, 0.95);
  border-radius: 0.25rem;
}
.login-form {
  margin-top: 2rem;
}
.div-form .el-form {
  padding-right: 0.25rem;
}
.btn-login {
  margin-right: 1.5rem;
  float: right;
}
.div-form .form-group {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}
</style>