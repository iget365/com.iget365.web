<template>
  <div id="TextDetail" class="detail text-detail">
    <div class="section-bar">
      <h2 class="section-bar-title">文本详情</h2>
    </div>
    <div class="detail-item">
      <label class="detail-item-title">内容：</label>
      <p class="detail-item-content">{{ form.content }}</p>
    </div>
    <div class="detail-item">
      <label class="detail-item-title">创建日期：</label>
      <p class="detail-item-content">{{ form.createdAt | datetime }}</p>
    </div>
    <div class="detail-item">
      <label class="detail-item-title">更新日期：</label>
      <p class="detail-item-content">{{ form.updatedAt | datetime }}</p>
    </div>
    <div class="detail-item detail-item-action">
      <router-link :to=" { name: 'links' } " replace>
        <el-button>返回列表</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import form from '../common/form'

export default {
  name: 'TextDetail',
  data () {
    return {
      id: 0,
      form: {
      }
    }
  },
  created () {
    this.id = +this.$route.params.id

    form.getById(this, 'texts', this.id)
  }
}
</script>

<style scoped>
  .text-detail {
  }
</style>
