<template>
  <div id="banner">
    <header style="-webkit-app-region: drag">
      <section class="header">
        <div
          :style="{fontFamily:properties.fontFamily, fontSize:properties.fontSize+'px', 
          color:properties.color, backgroundColor:properties.backgroundColor,
          lineHeight:properties.lineHeight+'px', letterSpacing:properties.letterSpacing+'px'}"
        >{{content}}</div>
      </section>

      <section
        style="-webkit-app-region: no-drag; text-align: right;"
        @mouseenter="showConifg"
        @mouseleave="hideConfig"
      >
        <!--html代码-->
        <!-- <div v-show="ifShowConfig"> -->
          <el-popover placement="bottom" title="设置" width="900" trigger="click">
            <config @apply="update" :params="properties"></config>
            <el-button slot="reference">设置</el-button>
          </el-popover>
        <!-- </div> -->
      </section>
    </header>
  </div>
</template>

<script>
import Config from "./Banner/Config";

export default {
  name: "banner",
  components: { Config },
  data() {
    return {
      content: "欢迎公益事业促进会会长一行莅临指导！",
      properties: {
        fontFamily: "Microsoft YaHei",
        fontSize: 80,
        color: "#00FF00",
        backgroundColor: "red",
        lineHeight: 100,
        letterSpacing: 16
      },
      ifShowConfig: false
    };
  },
  methods: {
    update(params) {
      this.properties = params;
    },
    showConifg() {
      this.ifShowConfig = true;
    },
    hideConfig() {
      this.ifShowConfig = false;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#banner {
  text-align: center;
}
/* 
.header .content {
  font-family: Microsoft YaHei;
  font-size: 80px;
  color: yellow;
  background-color: red;
  line-height: 100px;
  letter-spacing: 16px;
} */
</style>
