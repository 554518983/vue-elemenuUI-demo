<template>
  <el-container direction="vertical">
    <el-header class="header"></el-header>
    <el-container>
      <el-aside class="aside">
        <el-scrollbar style="height: 100%">
          <el-menu router>
            <el-menu-item index="/home" class="home"><i class="el-icon-s-home"></i>首页</el-menu-item>
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-user-solid"></i>用户管理</template>
              <el-menu-item class="menuitem" index="/user">用户列表</el-menu-item>
              <el-menu-item class="menuitem" index="/adduser">添加用户</el-menu-item>
              <el-menu-item class="menuitem" index="1.3">导航1.3</el-menu-item>
              <el-menu-item class="menuitem" index="1.4">导航1.4</el-menu-item>
              <el-menu-item class="menuitem" index="1.5">导航1.5</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">导航二</template>
              <el-menu-item class="menuitem" index="2.1">导航1.1</el-menu-item>
              <el-menu-item class="menuitem" index="2.2">导航1.2</el-menu-item>
              <el-menu-item class="menuitem" index="2.3">导航1.3</el-menu-item>
              <el-menu-item class="menuitem" index="2.4">导航1.4</el-menu-item>
              <el-menu-item class="menuitem" index="2.5">导航1.5</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">导航一</template>
              <el-menu-item class="menuitem" index="3.1">导航1.1</el-menu-item>
              <el-menu-item class="menuitem" index="3.2">导航1.2</el-menu-item>
              <el-menu-item class="menuitem" index="3.3">导航1.3</el-menu-item>
              <el-menu-item class="menuitem" index="3.4">导航1.4</el-menu-item>
              <el-menu-item class="menuitem" index="3.5">导航1.5</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-main style="width: 100%; height: 100%; padding: 0px">
          <router-view></router-view>
        </el-main>
        <el-footer style="background-color: #F0F2F3; height: 50px;">
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "manager"
  }
</script>

<style>
  html, body, #app, .el-container {
    /*设置内部填充为0，几个布局元素之间没有间距*/
    padding: 0px;
    /*外部间距也是如此设置*/
    margin: 0px;
    /*统一设置高度为100%*/
    height: 100%;
  }

  .el-header.header {
    background-color: #324057;
    border-bottom: 1px solid #586b8a;
  }
  .el-aside.aside {
    width: 250px !important;
    background-color: #324057;
  }
  .el-menu-item.home {
    text-align: left;
    color: #bfcbd9;
    background-color: #324057;
  }
  .el-menu-item.home:focus {
    color: #409EFF;
    background-color: #324057;
  }
  .el-menu-item.home:hover {
    color: #409EFF;
    background-color: #537da5;
  }
  .el-submenu__title {
    text-align: left;
    color: #bfcbd9!important;
    background-color: #324057;
  }

  .el-submenu__title:focus {
    color: #409EFF;
    background-color: #324057;
  }

  .el-submenu__title:hover {
    color: #409EFF;
    background-color: #537da5;
  }

  .el-menu-item.menuitem {
    text-align: left;
    color: #bfcbd9;
    background-color: #1f2d3d;
  }

  .el-menu.menu {
    border: none;
  }

  .el-menu-item.menuitem:focus {
    color: #409EFF;
    background-color: #1f2d3d;
  }

  .el-menu-item.menuitem:hover {
    color: #409EFF;
    background-color: #537da5;
  }

  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
</style>
