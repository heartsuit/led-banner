<template>
  <div>
    <div @click="apply">Config</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      properties: {
        fontFamily: "Microsoft YaHei",
        fontSize: "80px",
        color: "yellow",
        backgroundColor: "red",
        lineHeight: "100px",
        letterSpacing: "16px"
      }
    };
  },
  methods: {
    apply() {
      this.$emit("apply", this.properties);
    }
  }
};
</script>

<style scoped>
</style>
