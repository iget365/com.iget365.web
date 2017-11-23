<template>
  <div id="IHeader" class="header">
    <div class="container">
      <div class="header-wrap">
        <div class="header-logo">
          <img src="../../img/logo.png">
          <h1>iget365</h1>
        </div>
        <div class="header-user">
          <span class="header-user-name">李小新</span>
          <b class="header-user-split">|</b>
          <a href="javascript:;" class="header-user-logout" title="注销当前用户">注销</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IHeader',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .header {
    padding: 7px 0;
    background-color: #FFF;
    margin-bottom: 15px;
    color: #353535;
  }
  .header-wrap {
    display: flex;
    justify-content: space-between;
  }
  .header-logo img {
    width: 50px;
    vertical-align: middle;
    margin-right: 15px;
  }
  .header-logo h1 {
    display: inline-block;
    vertical-align: middle;
    font-size: 18px;
  }
  .header-user {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  .header-user-name {
    margin-right: 15px;
  }
  .header-user-split {
    color: #A6A6A6;
  }
  .header-user-logout {
    margin-left: 15px;
    text-decoration: none;
    color: #353535;
  }
  .header-user-logout:hover {
    color: #409EFF;
  }
</style>
