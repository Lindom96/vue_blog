<template>
  <div>
    <transition-group tag="div" name="el-fade-in-linear"  class="template-main">
      <div v-for="item in articleLst" :key="item.id">
        <div class="template-item">
          <img
            style="width: 100%; height: 138px"
            :src="item &&item.cover ? item.cover : picDef"
            alt=""
          />
          <div class="template-item-title">{{ item.title }}</div>
          <div class="template-item-content">{{ item.description }}</div>
        </div>
        <!-- <div class="template-item-hover">
        <Button style="margin: 5px" @click="useTemp(item.id)"
          ><Icon
            type="md-create"
            size="16"
            style="margin-right: 3px"
          />使用模板</Button
        >
        <Button style="margin: 5px" @click="preview(item.id)"
          ><Icon
            type="md-eye"
            size="16"
            style="margin-right: 3px"
          />预览模板</Button
        >
      </div> -->
      </div>
    </transition-group>
  </div>
</template>

<script>
import PicDef from "../../../assets/img/bg0503.jpg";
import PicText from "../../../assets/img/bg0503.jpg";
export default {
  components: {},
  data() {
    return {
      picDef: PicDef,
      picText: PicText,
    };
  },
  props: {
    articleLst: {
      type: Array,
    },
  },
  methods: {
    useTemp(id) {
      console.log("use", id);
      this.$router.push({
        path: "/artic",
        query: { id: 10046, isLibrary: true },
      });
      // let p = window.location.href.split("#")[0];
      // window.open(p + "#/five/template/update?id=" +10046 /**id*/);
    },
    preview(id) {
      return;
      console.log("preview", id);
      this.$emit("preview", id);
    },
  },
};
</script>

<style scoped>
.template-main {
  margin: 10px 5px 0 5px;
  max-width: 1421px;
  display: flex;
  flex-wrap: wrap;
  justify-items: flex-start;
}
.template-item {
  overflow: hidden;
  z-index: 100;
  width: 460px;
  height: 242px;
  margin: 3px;
  border-radius: 10px;
  border: 1px solid #f0f0f0;
}
/* .template-item:hover + .template-item-hover,
.template-item-hover:hover {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
} */
.template-item-hover {
  position: absolute;
  transform: translate(0px, -248px);
  z-index: 101;
  width: 244px;
  height: 242px;
  margin: 3px;
  background-color: black;
  display: none;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
.template-item-title {
  font-weight: 400;
  color: #333333;
  font-size: 14px;
  font-family: Microsoft YaHei;
  margin-top: 10px;
  margin-left: 15px;
}
.template-item-content {
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 10px;
  padding-bottom: 10px;
  font-size: 12px;
  border-bottom: 1px solid #e3e8ee;
  font-weight: 400;
  color: #999999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.template-item-name {
  font-weight: 400;
  color: #333333;
  font-size: 14px;
  font-family: Microsoft YaHei;
  margin-top: 10px;
  text-align: center;
}
</style>
