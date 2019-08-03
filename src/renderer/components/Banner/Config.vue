<template>
  <div class="config">
    <!-- <div @click="apply">Config</div> -->
    <div class="block">
      <span class="demonstration">字体颜色</span>
      <el-color-picker v-model="properties.color"></el-color-picker>
    </div>

    <div class="block">
      <span class="demonstration">背景颜色</span>
      <el-color-picker v-model="properties.backgroundColor"></el-color-picker>
    </div>

    <div class="block">
      <span class="demonstration">字体大小</span>
      <el-slider v-model="properties.fontSize" show-input></el-slider>
    </div>

    <div class="block">
      <span class="demonstration">整行高度</span>
      <el-slider v-model="properties.lineHeight" :max="500" show-input></el-slider>
    </div>

    <div class="block">
      <span class="demonstration">字符间距</span>
      <el-slider v-model="properties.letterSpacing" show-input></el-slider>
    </div>
  </div>
</template>

<script>
export default {
  props: ["params"],
  data() {
    return {
      properties: this.params,
    };
  },
  methods: {
    apply() {
      this.$emit("apply", this.properties);
    }
  },
  watch: {
    // color() {  
    //   this.properties.color = this.color;
    //   this.$emit("apply", this.properties);
    // },
    // fontSize() {
    //   this.properties.fontSize = this.fontSize;
    //   this.$emit("apply", this.properties);
    // }
  }
};
</script>

<style scoped>
</style>
