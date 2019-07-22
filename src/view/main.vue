<template>
	<div class="page-main">
		<router-view />
		<van-tabbar route active-color="#fc7e21" inactive-color="#999999">
	      <van-tabbar-item
	        replace
	        to="/main/sort"
	      >
	      <img
		      slot="icon"
		      slot-scope="props"
		      :src="props.active ? icon.active : icon.normal"
		    >
	        排名
	      </van-tabbar-item>
	      <van-tabbar-item
	        replace
	        to="/main/statistic"
	      >
	      	<img
		      slot="icon"
		      slot-scope="props"
		      :src="props.active ? icon.active2 : icon.normal2"
		    >
	        统计
	      </van-tabbar-item>
	    </van-tabbar>
  	</div>
</template>
<script>
	import Vue from 'vue'
	import { Tabbar, TabbarItem } from 'vant';

	Vue.use(Tabbar).use(TabbarItem);

	export default {
	  name: 'app',
	  data(){
	  	return {
	  		icon: {
		        normal: require('../assets/images/icon-sort.jpg'),
		        normal2: require('../assets/images/icon-statistic.jpg'),
		        active: require('../assets/images/icon-sort-on.jpg'),
		        active2: require('../assets/images/icon-statistic-on.jpg')
		    }
	  	}
	  }
	}
</script>
<style>
	.page-main .van-tabbar-item{
		font-size: 14px;
		position: relative;
	}
	.page-main .van-tabbar-item:not(:last-child):after{
		content: "";
		border-right: 1px solid #ccc;
		height: 80%;
		position: absolute;
		top: 10%;
		right: 0px;
		transform: scaleX(0.5);
	}
	.page-main .van-tabbar-item__icon img{
		height: 24px;
	}
	.page-main .van-tabbar{
		height: 58px;
	}
</style>