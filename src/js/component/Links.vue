<template>
  <div id="Links" class="links">
    <div class="section-bar">
      <h2 class="section-bar-title">链接列表</h2>
      <div class="section-bar-action">
        <router-link :to=" { name: 'updateLink', params: { id: 0 } } " class="section-bar-action-btn">
          <i class="el-icon-plus" title="新建"></i>
        </router-link>
      </div>
    </div>
    <Grid
      :column="grid.column"
      :url="grid.url">
    </Grid>
  </div>
</template>

<script>
import Grid from './Grid'

export default {
  name: 'Links',
  components: {
    Grid
  },
  data () {
    return {
      grid: {
        column: [
          { prop: 'url', label: '链接' },
          { prop: 'title', label: '标题' }
        ],
        url: 'links'
      }
    }
  },
  created () {
  }
}
</script>

<style scoped>
  .links {
  }
</style>
