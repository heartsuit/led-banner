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
      <span class="label">字体样式</span>
      <el-select class="select" v-model="properties.fontFamily" filterable placeholder="请选择字体">
        <el-option
          :style="{fontFamily:item.value}"
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>

    <div class="block">
      <span class="label">字体颜色</span>
      <el-color-picker
        show-alpha
        :predefine="predefineColors"
        class="picker"
        v-model="properties.color"
      ></el-color-picker>
    </div>

    <div class="block">
      <span class="label">背景颜色</span>
      <el-color-picker
        show-alpha
        :predefine="predefineColors"
        class="picker"
        v-model="properties.backgroundColor"
      ></el-color-picker>
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
      // properties: this.$store.state.Config.properties, // "Error: [vuex] do not mutate vuex store state outside mutation handlers."
      // properties: JSON.parse(JSON.stringify(this.$store.state.Config.properties)), // no problem
      properties: Object.assign({}, this.$store.state.Config.properties), // no problem

      // Reference:
      // https://www.jianshu.com/p/ab9d7fbc5c5e
      // https://blog.csdn.net/cddcj/article/details/70739481
      fontFamily: "Microsoft YaHei",
      options: [
        { value: "Microsoft YaHei", label: "微软雅黑" },
        { value: "Microsoft JhengHei", label: "微软正黑体" },
        { value: "SimHei", label: "黑体" },
        { value: "SimSun", label: "宋体" },
        { value: "FangSong", label: "仿宋" },
        { value: "KaiTi", label: "楷体" },
        { value: "YouYuan", label: "幼圆" },
        { value: "STXihei", label: "华文细黑" },
        { value: "STFangsong", label: "华文仿宋" },
        { value: "FZShuTi", label: "方正舒体" },
        { value: "FZYaoti", label: "方正姚体" },
        { value: "STCaiyun", label: "华文彩云" },
        { value: "STHupo", label: "华文琥珀" },
        { value: "STXinwei", label: "华文新魏" },
        { value: "STXingkai", label: "华文行楷" }
      ],
      predefineColors: [
        "#FF0000",
        "#ffd700",
        "#ff4500",
        "#ff8c00",
        "#90ee90",
        "#00ced1",
        "#1e90ff",
        "#c71585",
        "rgb(255, 120, 0)",
        "hsl(181, 100%, 37%)",
        "rgba(255, 69, 0, 0.68)",
        "hsva(120, 40, 94, 0.5)",
        "hsla(209, 100%, 56%, 0.73)"
      ]
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
.select,
.picker,
.slider {
  float: right;
  width: 75%;
  margin-right: 20px;
}
</style>
