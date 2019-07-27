<template>
  <div id="banner">
    <header style="-webkit-app-region: drag">
      <section class="header">
        <div class="content">{{content}}</div>
      </section>
      <section style="-webkit-app-region: no-drag">
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
      content: "欢迎公益事业促进会会长一行莅临指导！",
    };
  },
  methods: {

  }
};
</script>

<style>
#banner {
  color: yellow;
  text-align: center;
  background-color: red;
}

.header .content {
  font-family: Microsoft YaHei;
  font-size: 80px;
  line-height: 100px;
  letter-spacing: 16px;
}
</style>
