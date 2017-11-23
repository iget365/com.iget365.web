<template>
  <div id="Texts" class="texts">
    <div class="section-bar">
      <h2 class="section-bar-title">文字</h2>
      <div class="section-bar-action">
        <router-link :to=" { name: 'updateText', params: { id: 0 } } " class="section-bar-action-btn">
          <i class="el-icon-plus"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Texts'
}
</script>

<style scoped>
  .texts {
  }
</style>
