<template>
  <div id="TextUpdate" class="form text-update">
    <div class="section-bar">
      <h2 class="section-bar-title">{{ '文字' | updateTitle(id) }} </h2>
    </div>
    <el-form :model="form" status-icon :rules="rule" ref="form" label-width="80px" size="mini">
      <el-form-item label="内容" prop="content">
        <el-input type="textarea" v-model="form.content" auto-complete="off"></el-input>
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
  name: 'TextUpdate',
  data () {
    return {
      loading: false,
      id: -1,
      form: {
        content: ''
      },
      rule: {
        content: [
          { required: true, message: '请输入内容', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          form.createOrUpdate(this, 'texts')
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
  .text-update {
  }
</style>
