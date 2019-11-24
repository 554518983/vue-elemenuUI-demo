<template>
  <div class="page">
      <el-form label-width="45%" label-position="right">
        <el-form-item label="姓名:" class="textleft">
          <el-input style="width: 215px"></el-input>
        </el-form-item>
        <el-form-item label="性别" class="textleft">
          <el-radio v-model="radio" label="0">男</el-radio>
          <el-radio v-model="radio" label="1">女</el-radio>
        </el-form-item>
        <el-form-item label="住址" class="textleft">
          <el-cascader
            :options="options"
            :props="props"
            clearable></el-cascader>
        </el-form-item>
        <el-form-item label="文化程度" class="textleft">
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in optionsTwo" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="婚姻状况" class="textleft">
          <el-select v-model="hvalue" placeholder="请选择">
            <el-option v-for="item in optionsThree" :key="item.value" :label="item.label" :hvalue="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="创建时间" class="textleft">
          <el-date-picker
            v-model="value1"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item class="textleft">
          <el-button type="primary">创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
  export default {
    name: "add-user",
    data() {
      return {
        radio: '0',
        props: {multiple: true},
        options: [{
          value: 1,
          label: '东南',
          children: [{
            value: 2,
            label: '上海',
            children: [
              {value: 3, label: '普陀'},
              {value: 4, label: '黄埔'},
              {value: 5, label: '徐汇'}
            ]
          }, {
            value: 7,
            label: '江苏',
            children: [
              {value: 8, label: '南京'},
              {value: 9, label: '苏州'},
              {value: 10, label: '无锡'}
            ]
          }, {
            value: 12,
            label: '浙江',
            children: [
              {value: 13, label: '杭州'},
              {value: 14, label: '宁波'},
              {value: 15, label: '嘉兴'}
            ]
          }]
        }, {
          value: 17,
          label: '西北',
          children: [{
            value: 18,
            label: '陕西',
            children: [
              {value: 19, label: '西安'},
              {value: 20, label: '延安'}
            ]
          }, {
            value: 21,
            label: '新疆维吾尔族自治区',
            children: [
              {value: 22, label: '乌鲁木齐'},
              {value: 23, label: '克拉玛依'}
            ]
          }]
        }],
        optionsTwo: [{
          value: '0',
          label: '小学'
        }, {
          value: '1',
          label: '初中'
        }, {
          value: '2',
          label: '高中'
        }, {
          value: '3',
          label: '大学'
        }, {
          value: '4',
          label: '研究生'
        }, {
          value: '5',
          label: '博士'
        }],
        optionsThree: [{
          value: '0',
          label: '未婚'
        }, {
          value: '1',
          label: '已婚'
        }, {
          value: '2',
          label: '离异'
        }],
        value: '',
        value1: '',
        hvalue: ''
      }
    }
  }
</script>

<style>
  .page {
    width: 100%;
    height: 100%;
    padding-top: 20px;
  }
  .textleft {
    text-align: left;
  }
  .el-form-item__label {
    padding-right: 20px;
  }
</style>
