<template>
  <div id="Index" class="index">
    <IHeader></IHeader>
    <div class="container content">
      <IAside></IAside>
      <div class="main">
        <router-view class="section" />
        <IFooter></IFooter>
      </div>
    </div>
  </div>
</template>

<script>
  import IHeader from '../component/IHeader'
  import IFooter from '../component/IFooter'
  import IAside from '../component/IAside'

  export default {
    name: 'Index',
    components: {
      IHeader,
      IFooter,
      IAside
    }
  }
</script>

<style>
body {
  background-color: #F2F2F2;
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}
.container {
  width: 1000px;
  margin: 0 auto;
}
.content{
  overflow: hidden;
}
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 600px;
  background-color: #FFF;
  margin-left: 185px;
  padding: 0 10px;
}
.section {
  margin: 10px 0;
}
.section-bar {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #E6EBF5;
  line-height: 2;
  padding-bottom: 3px;
  font-size: 17px;
}
.section.form .section-bar {
  margin-bottom: 30px;
}
.section.form .el-form {
  width: 98%;
}
.section-bar-title {
  color: #444;
  margin-left: 10px;
}
.section-bar-action {
  font-size: 17px;
}
.section-bar-action-btn {
  padding: 3px 5px;
  margin: 0 3px;
}
.section.detail .detail-item {
  display: flex;
  color: #444;
  margin: 15px 0;
  font-size: 14px;
}
.section.detail .detail-item-title {
  width: 100px;
  text-align: right;
  margin-right: 20px;
}
.section.detail .detail-item-content {
  line-height: 1.5;
  flex: 1;
}
.section.detail .detail-item-action {
  border-top: 1px solid #E6EBF5;
  margin: 20px 0;
  padding: 20px 0 0 10px;
}
</style>
