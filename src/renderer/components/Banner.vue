<template>
  <div id="banner">
    <header style="-webkit-app-region: drag">
      <section class="header">
        <div
          :style="{fontFamily:properties.fontFamily, fontSize:properties.fontSize, 
          color:properties.color, backgroundColor:properties.backgroundColor,
          lineHeight:properties.lineHeight, letterSpacing:properties.letterSpacing}"
        >{{content}}</div>
      </section>

      <section style="-webkit-app-region: no-drag">
        <!--html代码-->
      </section>
    </header>
    <config @apply="update"></config>
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
        fontFamily: "",
        fontSize: "",
        color: "",
        backgroundColor: "",
        lineHeight: "",
        letterSpacing: ""
      }
    };
  },
  methods: {
    update(params) {
      this.properties = params;
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
