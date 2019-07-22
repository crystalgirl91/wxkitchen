<template>
	<div class="page-sort">
		<van-nav-bar
		  title="排名"
		/>
		<van-dropdown-menu class="sort-dropmenu" active-color="#fc7e21">
		  <van-dropdown-item v-model="value1" :options="option1" />
		  <van-dropdown-item v-model="value2" :options="option2" />
		</van-dropdown-menu>
		<van-list class="main-cont"
		  v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
			<div class="row-head">
			  	<van-row>
					<van-col span="5">排名</van-col>
					<van-col span="6">厨师姓名</van-col>
					<van-col span="7">出菜数量（份）</van-col>
					<van-col span="6">绩效（元）</van-col>
				</van-row>
			</div>
			<div class="row-body">
				<div class="page-row van-hairline--bottom" v-for="item in list">
				  	<van-row>
					  <van-col span="6">{{item.sort}}</van-col>
					  <van-col span="6">{{item.name}}</van-col>
					  <van-col span="6">{{item.number}}</van-col>
					  <van-col span="6">{{item.performance}}</van-col>
					</van-row>
				</div>
			</div>
		</van-list>
	</div>
</template>
<script>
	import Vue from 'vue'
	import { DropdownMenu, DropdownItem } from 'vant';
	import { List } from 'vant';
	import { Row, Col } from 'vant';
	import { NavBar } from 'vant';

	Vue.use(DropdownMenu).use(DropdownItem).use(List).use(Row).use(Col);

	export default {
	  data() {
	    return {
	      value1: 1,
	      value2: 1,
	      option1: [
	        { text: '天', value: 1 },
	        { text: '月', value: 2 }
	      ],
	      option2: [
	        { text: '厨师', value: 1 },
	        { text: '出菜数量', value: 2 },
	        { text: '绩效', value: 3 },
	      ],
	      list: [],
	      loading: false,
	      finished: false
	    }
	  },
	  methods: {
	    onLoad() {
	      // 异步更新数据
	      setTimeout(() => {
	        for (let i = 0; i < 10; i++) {
	          this.list.push({
	          	"sort":i,
	          	"name":this.list.length + 1 + "姓名",
	          	"number":(Math.random() * 300).toFixed(0),
	          	"performance":(Math.random() * 1000).toFixed(0)
	          });
	        }
	        // 加载状态结束
	        this.loading = false;

	        // 数据全部加载完成
	        if (this.list.length >= 40) {
	          this.finished = true;
	        }
	      }, 500);
	    }
	  },
	  components:{
	  	[NavBar.name]:NavBar
	  }
	};

</script>
<style>
.page-sort{
	font-size: 14px;
}
	.row-head{
		background-color: #f7f7f7;
		line-height: 42px;
		height: 42px;
		text-align: center;
		color:#999999;
	}
	.page-sort .main-cont{

	}
	.page-sort .row-body{
		text-align: center;
	}
	.row-body .page-row{
		position: relative;
	}
	.row-body .page-row .van-col{
		padding: 14px;
	}
	.row-body .page-row .van-col:first-child{
		color: #fc7e21;
	}
	.row-body .page-row .van-col:last-child{
		color: #f83f3c;
	}
</style>