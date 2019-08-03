<template>
  <div class="config">
    <div class="title">
      <section class="close" style="-webkit-app-region: no-drag">
        <el-button type="danger" icon="el-icon-close" size="mini" @click="close" circle></el-button>
      </section>
      <span>参数配置</span>
    </div>

    <div class="block">
      <span class="label">横幅内容</span>
      <el-input class="input" placeholder="请输入内容" v-model="properties.content" clearable></el-input>
    </div>

    <div class="block">
      <span class="label">字体颜色</span>
      <el-color-picker class="picker" v-model="properties.color"></el-color-picker>
    </div>

    <div class="block">
      <span class="label">背景颜色</span>
      <el-color-picker class="picker" v-model="properties.backgroundColor"></el-color-picker>
    </div>

    <div class="block">
      <span class="label">字体大小</span>
      <el-slider class="slider" v-model="properties.fontSize" show-input></el-slider>
    </div>

    <div class="block">
      <span class="label">整行高度</span>
      <el-slider class="slider" v-model="properties.lineHeight" :max="200" show-input></el-slider>
    </div>

    <div class="block">
      <span class="label">字符间距</span>
      <el-slider class="slider" v-model="properties.letterSpacing" :max="50" show-input></el-slider>
    </div>
  </div>
</template>

<script>
export default {
  // props: ["params"],
  data() {
    return {
      properties: this.$store.state.Config.properties
    };
  },
  methods: {
    close: () => {
      let ipc = require("electron").ipcRenderer;
      ipc.send("window-close");
    }
  },
  computed: {},
  watch: {
    properties: {
      handler(newValue, oldValue) {
        console.log(0, this.properties);
        this.$store.dispatch("UPDATE_PROPERTY", this.properties);
      },
      deep: true
    }
  }
};
</script>

<style scoped>
html,
body {
  background: rgba(0, 0, 0, 0);
}
.config {
  background: rgba(0, 0, 0, 0.8);
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
}
.title {
  font-size: 18px;
  height: 45px;
  text-align: center;
  color: #12e9de;
  -webkit-user-select: none;
  -webkit-app-region: drag;
  cursor: move; /* doesn't work */
}
.close {
  float: right;
  margin: 5px 0 10px 0;
}
.block {
  padding: 5px 24px;
  overflow: hidden;
  border-bottom: 1px solid #8492a6;
}
.label {
  font-size: 16px;
  color: #14cabb;
  line-height: 44px;
}

.input,
.picker,
.slider {
  float: right;
  width: 75%;
  margin-right: 20px;
}
</style>
