<template>
  <div id="IAside" class="aside">
    <el-menu
      :router="true"
      :default-active="defaultActiveIndex">
      <el-menu-item
        v-for="item in list" :key="item.path"
        :index="item.path">
        <span>{{ item.text }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'IAside',
    data () {
      const data = {
        list: [
          { text: '全部', path: '/all' },
          { text: '链接', path: '/links' },
          { text: '文字', path: '/texts' },
          { text: '图像', path: '/images' },
          { text: '视频', path: '/videos' }
        ]
      }

      data.defaultActiveIndex = data.list[0].path

      return data
    },
    methods: {
      watchRouter (toPath) {
        let activePath = ''

        this.list.forEach(item => {
          if (toPath.indexOf(item.path) !== -1) {
            activePath = item.path
          }
        })

        this.defaultActiveIndex = activePath
      }
    },
    watch: {
      '$route' (to, from) { // todo go along with v-link, then delete watch $route & created
        this.watchRouter(to.path)
      }
    },
    created () {
      this.watchRouter(this.$route.path)
    }
  }
</script>

<style scoped>
  .aside {
    float: left;
    width: 170px;
    padding: 6px 0;
    background-color: #FFF;
  }
  .el-menu {
    border-right: none;
  }
  .el-menu-item {
    height: 40px;
    line-height: 40px;
    padding-right: 0;
    border-right: 1px solid #e6e6e6;
  }
  .el-menu-item.is-active {
    border-right: 1px solid #409EFF;
  }
</style>
