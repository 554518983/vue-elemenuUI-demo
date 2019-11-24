<template>
  <div style="width: 100%;height: 100%;">
    <el-table :data="userList" style="width: 100%" border height="100%" :row-class-name="tableRowClassName">
      <el-table-column type="index" label="序号" width="50px"></el-table-column>
      <el-table-column prop="name" label="姓名" width="95px"></el-table-column>
      <el-table-column prop="sex" label="性别" width="px"></el-table-column>
      <el-table-column prop="addre" label="住址" width="250px"></el-table-column>
      <el-table-column prop="wenj" label="文化程度" width="200px"></el-table-column>
      <el-table-column prop="hunyin" label="婚姻状况" width="120px"></el-table-column>
      <el-table-column prop="data" label="创建日期" width="200"></el-table-column>
      <el-table-column label="操作" width="150" fixed="right">
        <template slot-scope="scope">
          <el-button type="success" size="small">编辑</el-button>
          <el-button type="info" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "user-list",
    data() {
      return {
        userList: [
          {
            name: '张三',
            sex: 0,
            addre: '北京',
            wenj: '研究生',
            hunyin: 0,
            data: '2019-05-01'
          },
          {
            name: '李四',
            sex: 1,
            addre: '上海',
            wenj: '博士',
            hunyin: 1,
            data: '2019-12-01'
          },
          {
            name: '张三',
            sex: 0,
            addre: '北京',
            wenj: '研究生',
            hunyin: 0,
            data: '2019-05-01'
          },
          {
            name: '李四',
            sex: 1,
            addre: '上海',
            wenj: '博士',
            hunyin: 1,
            data: '2019-12-01'
          },
          {
            name: '张三',
            sex: 0,
            addre: '北京',
            wenj: '研究生',
            hunyin: 0,
            data: '2019-05-01'
          },
          {
            name: '李四',
            sex: 1,
            addre: '上海',
            wenj: '博士',
            hunyin: 1,
            data: '2019-12-01'
          },
          {
            name: '张三',
            sex: 0,
            addre: '北京',
            wenj: '研究生',
            hunyin: 0,
            data: '2019-05-01'
          },
          {
            name: '李四',
            sex: 1,
            addre: '上海',
            wenj: '博士',
            hunyin: 1,
            data: '2019-12-01'
          },
          {
            name: '张三',
            sex: 0,
            addre: '北京',
            wenj: '研究生',
            hunyin: 0,
            data: '2019-05-01'
          },
          {
            name: '李四',
            sex: 1,
            addre: '上海',
            wenj: '博士',
            hunyin: 1,
            data: '2019-12-01'
          },
          {
            name: '张三',
            sex: 0,
            addre: '北京',
            wenj: '研究生',
            hunyin: 0,
            data: '2019-05-01'
          },
          {
            name: '李四',
            sex: 1,
            addre: '上海',
            wenj: '博士',
            hunyin: 1,
            data: '2019-12-01'
          },
          {
            name: '张三',
            sex: 0,
            addre: '北京',
            wenj: '研究生',
            hunyin: 0,
            data: '2019-05-01'
          },
          {
            name: '李四',
            sex: 1,
            addre: '上海',
            wenj: '博士',
            hunyin: 1,
            data: '2019-12-01'
          },
          {
            name: '张三',
            sex: 0,
            addre: '北京',
            wenj: '研究生',
            hunyin: 0,
            data: '2019-05-01'
          },
          {
            name: '李四',
            sex: 1,
            addre: '上海',
            wenj: '博士',
            hunyin: 1,
            data: '2019-12-01'
          },
          {
            name: '张三',
            sex: 0,
            addre: '北京',
            wenj: '研究生',
            hunyin: 0,
            data: '2019-05-01'
          },
          {
            name: '李四',
            sex: 1,
            addre: '上海',
            wenj: '博士',
            hunyin: 1,
            data: '2019-12-01'
          },
          {
            name: '张三',
            sex: 0,
            addre: '北京',
            wenj: '研究生',
            hunyin: 0,
            data: '2019-05-01'
          },
          {
            name: '李四',
            sex: 1,
            addre: '上海',
            wenj: '博士',
            hunyin: 1,
            data: '2019-12-01'
          }
        ]
      }
    },
    methods: {
      tableRowClassName({row}) {
        if (row['sex'] == 0) {
          row['sex'] = '男';
        }
        if (row['sex'] == 1) {
          row['sex'] = '女';
        }
        if (row['hunyin'] == 0) {
          row['hunyin'] = '未婚';
        }

        if (row['hunyin'] == 1) {
          row['hunyin'] = '已婚';
        }
      }
    }
  }
</script>

<style scoped>

</style>
