<template>
	<div>
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