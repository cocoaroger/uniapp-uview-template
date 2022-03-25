<template>
  <view class="content">
    {{data}}
  </view>
</template>

<script>
export default {
  onLoad(options) {
    // 测试接口
    this.$api.login.login().then(res => {
      this.data = res
    }).catch(e => {
      console.log('error:', e);
    })
  },
  data() {
    return {
      data: null
    }
  },
};
</script>

<style lang="scss" scoped>
.content {
  font-size: 40rpx;
}
</style>