<template>
<div>
  <el-row :gutter="20">
    <h1>实验室成员</h1>
    <div>
      <h2>教师</h2>
      <div>
        <el-col :span="6" v-for="(item,index) in teacherInfo" :key="index">
          <div class="grid-content bg-purple">
            <div class="grid-content bg-purple-dark">
              <div class="memberItem">
                <img :src="item.picUrl" alt="teacher">
                <div class="memberInfo">
                  <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item title="姓名 朱莉杰" name="1">
                      <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                      <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                    </el-collapse-item>
                  </el-collapse>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </div>
    </div>
  </el-row>
  <el-row :gutter="20">
    <h2>学生</h2>
    <div>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <div class="grid-content bg-purple-dark">
            <div class="memberItem">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543167195767&di=f11395c844adb50d66c9b2a04e18928d&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F17%2F09%2F22%2F8224fa7d474896ce77978e754883fee7.jpg" alt="test1">
              <div class="memberInfo">
                <el-collapse v-model="activeNames" @change="handleChange">
                  <el-collapse-item title="姓名 朱莉杰" name="1">
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </div>
  </el-row>
</div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ['1'],
      teacherInfo: [
        {
          name: '朱莉杰',
          picUrl: '/static/img/testUrl.jpg'
        }
      ]
    }
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  }
}
</script>

<style>
.memberItem {
  text-align: center;
}

.memberItem img {
  vertical-align: middle;
  width: 80%;
  border-radius: 50%;
}

h1 {
  border-bottom: 1px solid #ccc;
}
</style>
