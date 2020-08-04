<template>
  <div class="home">
    <div class="international-header">
      <div class="mini-header m-header">
        <div class="mini-header-content mini-header-login">
          <div class="nav-link">
            <ul class="nav-link-ul">
              <li class="nav-link-item">
                <a href="#" class="link">
                  <i class="bilifont bili-icon_dingdao_zhuzhan"></i>主站
                </a>
              </li>
            </ul>
          </div>
          <div class="nav-search-box">
            <div class="nav-search">
              <form id="nav_searchform">
                <input
                  type="text"
                  autocomplete="off"
                  accesskey="s"
                  x-webkit-speech
                  x-webkit-grammar="builtin:translate"
                  placeholder="搜索你想要的~~~"
                  class="nav-search-keyword"
                />
                <div class="nav-search-btn">
                  <button type="button" class="bilifont bili-icon_dingdao_sousuo nav-search-submit"></button>
                </div>
              </form>
              <!---->
              <!---->
            </div>
          </div>
          <div class="nav-user-center">
            <div class="user-con search-icon">
              <a href="//search.bilibili.com/" target="_blank">
                <i class="bilifont bili-icon_dingdao_sousuo"></i>
              </a>
            </div>
            <div class="user-con signin">
              <div data-v-cba1b22a class="item">
                <div data-v-7adc35f6 data-v-cba1b22a class="nav-item">
                  <div data-v-7adc35f6 class="t">
                    <!---->
                    <!---->
                    <a
                      data-v-cba1b22a
                      data-v-7adc35f6
                      href="//message.bilibili.com/new"
                      target="_blank"
                    >
                      <span data-v-cba1b22a data-v-7adc35f6 class="name">消息</span>
                    </a>
                  </div>
                  <!---->
                  <div data-v-7adc35f6 class="i-frame" style="display: none;">
                    <iframe data-v-7adc35f6 src frameborder="0" width="100%" height="100%"></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-31cc0059>
              <span data-v-31cc0059>
                <div
                  role="tooltip"
                  id="van-popover-7990"
                  aria-hidden="true"
                  class="van-popover van-popper van-popper-upload"
                  style="width:304px;display:none;"
                  tabindex="0"
                ></div>
                <span
                  class="mini-upload van-popover__reference"
                  data-v-31cc0059
                  aria-describedby="van-popover-7990"
                  tabindex="0"
                  @click="btnLoginClick"
                >登录</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    btnLoginClick() {
      this.$router.push("/login").catch(err => {
        $router.push("/home");
      });
    }
  }
};
</script>

<style lang="less" scoped>
.nav-div {
  margin: 0.25rem;
  display: flex;
  justify-content: flex-end;
}

.international-header {
}
.mini-header {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 6rem;
  background-color:rgb(205, 230, 245);
}
.mini-header-content {
  box-sizing: border-box;
  padding: 10px 24px;
  line-height: 30px;
  position: relative;
  margin: 0 auto;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
/**nav导航栏菜单 */
.nav-link{
  padding: 0;
}
.nav-link .nav-link-ul {
  height: 36px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
.international-header ul {
  list-style: none;
}
ol,
ul {
  list-style: none;
}
.nav-link .nav-link-ul .nav-link-item {
  margin-right: 12px;
}
.nav-link .nav-link-ul .nav-link-item .link {
  font-size: 14px;
  color: rgb(90, 150, 240);
  text-shadow: 0 1px 1px rgba(142, 190, 235, 0.795);
  display: inline-block;
  white-space: nowrap;
  display: -ms-flexbox;
  display: flex;
}
/**searchbar */
.international-header .nav-search-box {
  margin: 0 10px;
  width: 500px;
  transition: width 0.3s;
}
.bili-header-m .nav-search,
.international-header .nav-search {
  position: relative;
}
.international-header * {
  box-sizing: border-box;
}
.bili-header-m .nav-search #nav_searchform,
.international-header .nav-search #nav_searchform {
  display: block;
  padding: 0 38px 0 16px;
  border: 1px solid hsla(0, 0%, 100%, 0);
  border-radius: 2px;
  background-color: #fff;
}
.bili-header-m .nav-search .nav-search-keyword,
.international-header .nav-search .nav-search-keyword {
  overflow: hidden;
  width: 100%;
  height: 34px;
  border: none;
  background-color: transparent;
  box-shadow: none;
  color: #999;
  font-size: 14px;
  line-height: 34px;
  transition: all 0.2s;
}
.bili-header-m .nav-search .nav-search-btn,
.international-header .nav-search .nav-search-btn {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  width: 48px;
  height: 36px;
  border: none;
  border-radius: 2px;
  background: #e7e7e7;
  line-height: 26px;
  cursor: pointer;
}
.bili-header-m .nav-search .nav-search-submit,
.international-header .nav-search .nav-search-submit {
  position: absolute;
  top: 8px;
  right: 16px;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  color: #505050;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  transition: all 0.2s;
}
/** user nav */
.nav-user-center {
  display: flex;
  flex-shrink: 0;
}
.user-con.signin {
  display: flex;
}
.nav-user-center .user-con {
  align-items: center;
}
.nav-user-center .user-con.search-icon {
  display: none;
}
.nav-user-center .user-con .item {
  position: relative;
  display: flex;
  margin-left: 12px;
  cursor: pointer;
}
.van-popover.van-popper.van-popper-upload {
  padding: 0;
  border: none;
  top: 44px !important;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2) !important;
}
.mini-upload[data-v-31cc0059] {
  cursor: pointer;
  position: relative;
  color: #fff;
  font-size: 14px;
  display: block;
  width: 100px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  background: #fb7299;
  border-radius: 2px;
  margin-left: 14px;
}
</style>