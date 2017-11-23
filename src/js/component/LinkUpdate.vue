<template>
  <div id="LinkUpdate" class="form link-update">
    <div class="section-bar">
      <h2 class="section-bar-title">{{ '链接' | updateTitle(id) }} </h2>
    </div>
    <el-form :model="form" status-icon :rules="rule" ref="form" label-width="80px" size="mini">
      <el-form-item label="标题" prop="title">
        <el-input type="text" v-model="form.title" auto-complete="off" style="width: 66%;"></el-input>
      </el-form-item>
      <el-form-item label="链接" prop="url">
        <el-input type="text" v-model="form.url" auto-complete="off" style="width: 98%"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm" v-loading.lock="loading">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import form from '../common/form'

export default {
  name: 'LinkUpdate',
  data () {
    return {
      loading: false,
      id: -1,
      form: {
        title: '',
        url: ''
      },
      rule: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ],
        url: [
          { required: true, message: '请输入链接', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          form.createOrUpdate(this, 'links')
        } else {
          return false
        }
      })
    },
    resetForm () {
      this.$refs.form.resetFields()
    }
  },
  created () {
    this.id = +this.$route.params.id
  }
}
</script>

<style scoped>
  .link-update {
  }
</style>
