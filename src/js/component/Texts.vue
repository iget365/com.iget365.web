<template>
  <div id="Texts" class="texts">
    <div class="section-bar">
      <h2 class="section-bar-title">文字列表</h2>
      <div class="section-bar-action">
        <router-link :to=" { name: 'updateText', params: { id: 0 } } " class="section-bar-action-btn">
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
  name: 'Texts',
  components: {
    Grid
  },
  data () {
    return {
      grid: {
        column: [
          { prop: 'content', label: '内容', filter: { 'ellipsis': [ 120 ] } }
        ],
        url: 'texts'
      }
    }
  },
  created () {
  }
}
</script>

<style scoped>
  .texts {
  }
</style>
