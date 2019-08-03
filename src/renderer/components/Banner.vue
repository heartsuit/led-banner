<template>
  <div id="banner">
    <header style="-webkit-app-region: drag">
      <section class="header">
        <div
          :style="{fontFamily:properties.fontFamily, fontSize:properties.fontSize+'px', 
          color:properties.color, backgroundColor:properties.backgroundColor,
          lineHeight:properties.lineHeight+'px', letterSpacing:properties.letterSpacing+'px'}"
        >{{properties.content}}</div>
      </section>

      <section style="-webkit-app-region: no-drag; text-align: right;">
        <!--html代码-->
      </section>
    </header>
  </div>
</template>

<script>

export default {
  name: "banner",
  data() {
    return {
      content: "欢迎公益事业促进会会长一行莅临指导！"
      // properties: {
      //   fontFamily: "Microsoft YaHei",
      //   fontSize: 80,
      //   color: "#00FF00",
      //   backgroundColor: "red",
      //   lineHeight: 100,
      //   letterSpacing: 16
      // },
    };
  },
  methods: {},
  computed: {
    properties() {
      return this.$store.state.Config.properties;
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
</style>
