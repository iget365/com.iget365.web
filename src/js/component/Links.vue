<template>
  <div id="Links" class="links">
    <div class="section-bar">
      <h2 class="section-bar-title">链接</h2>
      <div class="section-bar-action">
        <router-link :to=" { name: 'updateLink', params: { id: 0 } } " class="section-bar-action-btn">
          <i class="el-icon-plus"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Links'
}
</script>

<style scoped>
  .links {
  }
</style>
