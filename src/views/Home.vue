<template>
<div>
  <div class="gallery">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in gallery" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="hot-main">
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple hot">
          <el-table :data="hotNews" height="250"  style="width: 100%">
            <el-table-column prop="date" width="120" label='新闻列表'>
            </el-table-column>
            <el-table-column prop="content">
            </el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light main">
          main-area
        </div>
      </el-col>
    </el-row>
  </div>
  <div class="footer">
    网站footer
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      gallery: [
        '欢迎来到张艳峰课题组',
        'pic1',
        'pic2',
        'pic3'
      ],
      hotNews: [{
          date: '2016-05-03',
          content: 'content'
        },{
          date: '2016-05-03',
          content: 'content'
        },{
          date: '2016-05-03',
          content: 'content'
        },{
          date: '2016-05-03',
          content: 'content'
        },{
          date: '2016-05-03',
          content: 'content'
        },{
          date: '2016-05-03',
          content: 'content'
        },]
    }
  }
}
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
