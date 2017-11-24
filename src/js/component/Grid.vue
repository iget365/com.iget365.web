<template>
  <div id="Grid" class="grid">
    <el-table
        :data="list"
        style="width: 100%">
        <el-table-column v-for="item in column" :key="item.prop"
          :prop="item.prop"
          :label="item.label">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="120">
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="detail(scope.row)">查看</el-button>
              <el-button type="text" size="small" @click="update(scope.row)">编辑</el-button>
              <el-button type="text" size="small" @click="del(scope.row, scope.$index)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <div class="grid-pager">
        <el-pagination
        @current-change="pageCurrChange"
        :current-page="page.curr"
        :page-size="page.size"
        layout="prev, next">
        </el-pagination>
    </div>
  </div>
</template>

<script>
import ui from '../common/ui'

export default {
  name: 'Grid',
  props: {
    column: {
      type: Array,
      default: []
    },
    url: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      list: [],
      page: {
        curr: 1,
        size: 10
      }
    }
  },
  methods: {
    detail (item) {
      this.$router.push({ path: `/${this.url}/${item.id}` })
    },
    update (item) {
      this.$router.push({ path: `/update/${this.url}/${item.id}` })
    },
    async del (item, itemIndex) {
      try {
        const confirmed = await this.$confirm('是否删除本条记录?', '确认删除', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        let msg = ''

        if (confirmed) {
          try {
            this.$http.del(`/api/${this.url}/${item.id}`)
            this.list.splice(itemIndex, 1)

            msg = '删除成功'

            ui.message({
              ctx: this,
              type: 'success',
              msg,
              duration: 2500
            })
          } catch (err) {
            msg = '删除失败'

            if (err.data && err.data.msg) {
              msg = err.data.msg
            }

            ui.message({
              ctx: this,
              type: 'error',
              msg,
              duration: 2500
            })
          }
        }
      } catch (err) {
      }
    },
    async getList () {
      try {
        const header = {
          'x-offset': (this.page.curr - 1) * this.page.size,
          'x-limit': this.page.size
        }

        let list = await this.$http.get(`/api/${this.url}`, header)

        list = this.applyFilter(list)

        this.list = list
      } catch (err) {
        this.list = []
      }
    },
    pageCurrChange (val) {
      this.page.curr = val
      this.getList()
    },
    parseFilter () {
      const filter = {}

      this.column && this.column.forEach(obj => {
        const itemFilter = obj.filter

        if (itemFilter) {
          for (let filterName in itemFilter) {
            const fn = (val, item) => {
              const filterArgs = itemFilter[filterName]
              const args = [val, ...filterArgs, item]

              return this.$options.filters[filterName].apply(null, args)
            }

            if (filter[obj.prop]) {
              filter[obj.prop].push(fn)
            } else {
              filter[obj.prop] = [fn]
            }
          }
        }
      })

      return filter
    },
    applyFilter (list) {
      const filter = this.parseFilter()

      if (Object.keys(filter).length) {
        list = list.map(item => {
          for (let prop in filter) {
            const propFilter = filter[prop]

            propFilter.forEach(fn => {
              item[prop] = fn ? fn(item[prop], item) : item[prop]
            })
          }

          return item
        })
      }

      return list
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style scoped>
  .grid {
    margin-top: 15px;
  }
  .grid-pager {
    margin-top: 20px;
    text-align: center;
  }
</style>
